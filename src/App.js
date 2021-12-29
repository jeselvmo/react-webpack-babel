import React from 'react';
import { HashRouter } from 'react-router-dom';

import './styles/index.less';

import AppView from './modules';
import AppUtils from '@/common/AppUtils';

window.AppUtils = AppUtils;

const App = () => (
  <React.StrictMode>
    <HashRouter>
      <AppView />
    </HashRouter>
  </React.StrictMode>
);

export default App;
