import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import AppUtils from '@/common/AppUtils';

import './styles/index.less';

import AppView from './modules';

window.AppUtils = AppUtils;
console.log('🚀 ~ AppUtils', AppUtils);

const App = () => (
  <React.StrictMode>
    <Router>
      <AppView />
    </Router>
  </React.StrictMode>
);

export default App;
