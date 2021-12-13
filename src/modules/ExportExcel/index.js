import React from 'react';
import XLSX from 'xlsx';
// import XLSX from 'xlsx-style';
import jeselvmo from 'jeselvmo';

import styles from './index.less';

import Page from '@/components/Page';
import withRouter from '@/common/withRouter';
import { Button } from 'antd';

/**
 * 焦点图管理
 */
class ExportExcel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onExport = () => {
    //json 数据
    var data = [
      { a: 1, x: 2, b: 3, y: 4, success: true },
      { a: 1, x: 2, b: 3, y: 4, success: false },
    ];
    //数据表格
    var table = [];
    table.push({
      A: '列A',
      B: '列B',
      C: '列C',
      D: '列D',
      E: '列E',
    });
    data.forEach(function (item) {
      var row = {
        A: item.b,
        B: item.y,
        C: item.a,
        D: item.x,
        E: item.success ? '成功' : '失败',
      };
      table.push(row);
    });
    //创建book
    var wb = XLSX.utils.book_new();
    //json转sheet
    var ws = XLSX.utils.json_to_sheet(table, { header: ['A', 'B', 'C', 'D', 'E'], skipHeader: true });
    //设置列宽
    ws['!cols'] = [{ width: 4.7 }, { width: 4.7 }, { width: 4.7 }, { width: 4.7 }, { width: 4.7 }];
    var timestamp = new Date().getTime();
    //sheet写入book
    XLSX.utils.book_append_sheet(wb, ws, 'file');
    //输出
    XLSX.writeFile(wb, 'file' + timestamp + '.xlsx');
  };

  sheet2blob = (sheet, sheetName) => {
    // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
    sheetName = sheetName || 'sheet1';
    var workbook = {
      SheetNames: [sheetName],
      Sheets: {},
    };
    workbook.Sheets[sheetName] = sheet; // 生成excel的配置项

    var wopts = {
      bookType: 'xlsx', // 要生成的文件类型
      bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
      type: 'binary',
    };
    var wbout = XLSXS.write(workbook, wopts);
    var blob = new Blob([s2ab(wbout)], {
      type: 'application/octet-stream',
    }); // 字符串转ArrayBuffer
    function s2ab(s) {
      var buf = new ArrayBuffer(s.length);
      var view = new Uint8Array(buf);
      for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xff;
      return buf;
    }
    return blob;
  };

  render() {
    return (
      <Page title="ExportExcel">
        <Button onClick={this.onExport}>导出Excel</Button>
      </Page>
    );
  }
}

export default withRouter(ExportExcel);
