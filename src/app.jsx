import React from 'react';
import { HashRouter } from 'react-router-dom';
import AppView from './modules';
import AppUtils from '@/common/AppUtils';
import './styles/index.less';

window.AppUtils = AppUtils;
console.log('🚀 ~ AppUtils', AppUtils);

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <AppView />
    </HashRouter>
  </React.StrictMode>
);

export default App;
