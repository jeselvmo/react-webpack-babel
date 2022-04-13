import ExcelJS from 'exceljs';
import _ from 'lodash';
import jeselvmo from 'jeselvmo';
import { border, alignment, labelStyle, valueStyle } from './ExcelExportCommon';

class ExcelExport {
  constructor(list, columns, name) {
    this.list = list; // Sheet数据
    this.columns = columns; // Sheet列
    this.name = name; // Excel文件名称
  }

  addWorksheet(workbook, sheetName) {
    const ws = workbook.addWorksheet(sheetName, {});

    // let r = 0; // 行索引
    // let c = 1; // 列索引，从第二列开始
    let row = null; // 行
    let defaultColWidth = 10; // 列宽度
    let labelRowHeight = 20; // 表头的行高
    let valueRowHeight = 20; // 默认行高

    // 定义列宽
    ws.columns = this.columns.map((column) => ({
      width: column.width || defaultColWidth,
    }));

    // 表头
    row = ws.addRow();
    row.height = labelRowHeight;

    for (let j = 0; j < this.columns.length; j++) {
      let column = this.columns[j];
      row.getCell(j + 1).value = column.label;
      row.getCell(j + 1).border = border.thin;
      row.getCell(j + 1).alignment = alignment[column.align || 'left'];
      row.getCell(j + 1).fill = labelStyle.fill;
      row.getCell(j + 1).font = labelStyle.font;
    }

    // 数据
    for (let i = 0; i < this.list.length; i++) {
      const item = this.list[i];

      row = ws.addRow();
      row.height = valueRowHeight;

      for (let j = 0; j < this.columns.length; j++) {
        let column = this.columns[j];
        row.getCell(j + 1).value = item[column.prop];
        row.getCell(j + 1).border = border.thin;
        row.getCell(j + 1).alignment = alignment[column.align || 'left'];
        row.getCell(j + 1).fill = i % 2 === 0 ? valueStyle.fill : valueStyle.fill2;
        row.getCell(j + 1).font = valueStyle.font;
      }
    }
  }

  async writeBuffer() {
    // 创建book
    const workbook = new ExcelJS.Workbook();
    workbook.creator = 'ljlx';
    workbook.lastModifiedBy = 'ljlx';
    workbook.created = new Date();
    workbook.modified = new Date();

    this.addWorksheet(workbook, 'Sheet1');

    // 写入文件
    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }

  async download() {
    const buffer = await this.writeBuffer();
    jeselvmo.downloadData(buffer, 'application/vnd.ms-excel', `${this.name}.xlsx`);
  }
}

ExcelExport.download = async (list, columns, name) => {
  const excel = new ExcelExport(list, columns, name);
  await excel.download();
};

export default ExcelExport;
