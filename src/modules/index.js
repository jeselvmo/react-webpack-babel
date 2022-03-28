import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';

import AppUtils from '@/common/AppUtils';
import Routes from './routes';
import store from '../store';

window.AppUtils = AppUtils;

const App = () => (
  <Provider store={store}>
    <ConfigProvider locale={zhCN}>
      <Router>
        <Routes />
      </Router>
    </ConfigProvider>
  </Provider>
);

export default App;
