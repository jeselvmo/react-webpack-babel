import React from 'react';
import Page from '@/components/page';
import { Button } from 'antd';
import ExcelExport from '@/common/ExcelExport';

import data from './data.json';
import columns from './columns.json';

/**
 * 焦点图管理
 */
class Banner extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onDownload = () => {
    ExcelExport.download(data, columns, '教师批阅统计');
  };

  render() {
    return (
      <Page title="ExcelJs">
        <Button type="primary" onClick={this.onDownload}>
          下载
        </Button>
      </Page>
    );
  }
}

export default Banner;
