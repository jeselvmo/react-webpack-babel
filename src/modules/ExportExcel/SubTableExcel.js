import ExcelJS from 'exceljs';
import _ from 'lodash';

const C = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'; // 列号

class SubTableExcel {
  constructor(name, list, questions) {
    this.name = name;
    this.list = list;
    this.questions = questions;
    this.questionMap = _.keyBy(questions, 'question_id');
    this.max = 15; // 一行放几个分数
    this.firstColWidth = 0.5; // 第一列宽度
    this.colWidth = 5.5; // 列宽度
    this.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    this.middleCenter = {
      vertical: 'middle',
      horizontal: 'center',
    };
    this.middleLeft = {
      vertical: 'middle',
      horizontal: 'left',
    };
    this.labelFill = {
      type: 'pattern',
      pattern: 'solid',
      fgColor: { argb: 'FFCCFFFF' },
    };
    this.valueFill = {};
    this.textFont = {
      name: 'SimSun',
      color: { argb: 'FF000000' },
      family: 1,
      size: 9,
    };
  }

  async writeBuffer() {
    //创建book
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'ljlx';
    workbook.lastModifiedBy = 'ljlx';
    workbook.created = new Date();
    workbook.modified = new Date();

    const ws = workbook.addWorksheet('Sheet1', {
      pageSetup: { paperSize: 9 },
    });

    let r = 0;
    let c = 1; // 从第二列开始

    // 定义列宽
    let columns = [];
    columns.push({ width: this.firstColWidth });
    for (let i = 0; i < this.max + 1; i++) {
      columns.push({ width: this.colWidth });
    }
    ws.columns = columns;

    for (let i = 0; i < this.list.length; i++) {
      const student = this.list[i];

      ws.addRow([]);
      r++;
      let title = `  ${student.class.name}  ${student.id}  ${student.name}  ${student.subject.name}：${student.score / 100}    ${this.name}`;
      ws.mergeCells(`${C[c]}${r}:${C[c + this.max]}${r}`);
      ws.getCell(`${C[c]}${r}`).value = title;
      ws.getCell(`${C[c]}${r}`).alignment = this.middleLeft;
      ws.getCell(`${C[c]}${r}`).font = this.textFont;

      let chunks = _.chunk(student.question_stat, this.max);

      for (let j = 0; j < chunks.length; j++) {
        const chunk = chunks[j];

        if (chunk.length < this.max) {
          let len = this.max - chunk.length;
          for (let k = 0; k < len; k++) {
            chunk.push(null);
          }
        }

        ws.addRow([]);
        r++;
        ws.getCell(`${C[c + 0]}${r}`).border = this.border;
        ws.getCell(`${C[c + 0]}${r}`).value = '小题';
        ws.getCell(`${C[c + 0]}${r}`).alignment = this.middleCenter;
        ws.getCell(`${C[c + 0]}${r}`).fill = this.labelFill;
        ws.getCell(`${C[c + 0]}${r}`).font = this.textFont;
        for (let k = 0; k < chunk.length; k++) {
          let item = chunk[k];
          ws.getCell(`${C[c + k + 1]}${r}`).border = this.border;
          ws.getCell(`${C[c + k + 1]}${r}`).value = item ? j * this.max + (k + 1) : null;
          ws.getCell(`${C[c + k + 1]}${r}`).alignment = this.middleCenter;
          ws.getCell(`${C[c + k + 1]}${r}`).fill = this.labelFill;
          ws.getCell(`${C[c + k + 1]}${r}`).font = this.textFont;
        }

        ws.addRow([]);
        r++;
        ws.getCell(`${C[c + 0]}${r}`).border = this.border;
        ws.getCell(`${C[c + 0]}${r}`).value = '满分';
        ws.getCell(`${C[c + 0]}${r}`).alignment = this.middleCenter;
        ws.getCell(`${C[c + 0]}${r}`).fill = this.labelFill;
        ws.getCell(`${C[c + 0]}${r}`).font = this.textFont;
        for (let k = 0; k < chunk.length; k++) {
          let item = chunk[k];
          ws.getCell(`${C[c + k + 1]}${r}`).border = this.border;
          ws.getCell(`${C[c + k + 1]}${r}`).value = this.getCorrectAnswer(item);
          ws.getCell(`${C[c + k + 1]}${r}`).alignment = this.middleCenter;
          ws.getCell(`${C[c + k + 1]}${r}`).fill = this.labelFill;
          ws.getCell(`${C[c + k + 1]}${r}`).font = this.textFont;
        }

        ws.addRow([]);
        r++;
        ws.getCell(`${C[c + 0]}${r}`).border = this.border;
        ws.getCell(`${C[c + 0]}${r}`).value = '得分';
        ws.getCell(`${C[c + 0]}${r}`).alignment = this.middleCenter;
        ws.getCell(`${C[c + 0]}${r}`).fill = this.valueFill;
        ws.getCell(`${C[c + 0]}${r}`).font = this.textFont;
        for (let k = 0; k < chunk.length; k++) {
          let item = chunk[k];
          ws.getCell(`${C[c + k + 1]}${r}`).border = this.border;
          ws.getCell(`${C[c + k + 1]}${r}`).value = this.getAnswer(item);
          ws.getCell(`${C[c + k + 1]}${r}`).alignment = this.middleCenter;
          ws.getCell(`${C[c + k + 1]}${r}`).fill = this.valueFill;
          ws.getCell(`${C[c + k + 1]}${r}`).font = this.textFont;
        }
      }

      ws.addRow();
      r++;

      if ((i + 1) % 6 === 0) {
        // 在该行下方插入一个分页符
        ws.getRow(r).addPageBreak();
      }
    }

    // 写入文件
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }

  getAnswer(item) {
    if (item) {
      if (item.score === item.max_score) {
        return '√';
      } else {
        return `${_.get(item, 'score', 0) / 100}/${this.parseAnswer(item.answer)}`;
      }
    }
    return null;
  }

  parseAnswer(answer) {
    if (answer) {
      if (typeof answer === 'string') {
        return this.parseAnswer(JSON.parse(answer));
      }
      if (answer instanceof Array && answer.length > 0) {
        return answer[0];
      }
    }
    return '';
  }

  getCorrectAnswer(item) {
    if (item) {
      const question = this.questionMap[item.question_id];
      return `${_.get(item, 'max_score', 0) / 100}/${_.get(question, 'answer', '')}`;
    }
    return '';
  }
}

export default SubTableExcel;
