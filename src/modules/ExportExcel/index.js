import React from 'react';
import { Button } from 'antd';
import ExcelJS from 'exceljs';
import jeselvmo from 'jeselvmo';
import _ from 'lodash';

import styles from './index.less';

import Page from '@/components/Page';
import withRouter from '@/common/withRouter';
import SubTableExcel from './SubTableExcel';
import data from './data';
import questions from './questions';

/**
 * 焦点图管理
 */
class ExportExcel extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onExport = async () => {
    let subTableExcel = new SubTableExcel('2020-2021学年第二学期初二期中考试', data, questions);
    const buffer = await subTableExcel.writeBuffer();
    jeselvmo.downloadData(buffer, 'application/vnd.ms-excel', '123.xls');
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
