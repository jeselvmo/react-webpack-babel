import React from 'react';
import { compose } from 'redux';
import { HashRouter } from 'react-router-dom';

import Routes from './routes';
import AppStateHOC from './hocs/AppStateHOC';
import QueryParserHOC from './hocs/QueryParserHOC';
import AntdLocaleHOC from './hocs/AntdLocaleHOC';
import InitUserInfoHOC from './hocs/InitUserInfoHOC';
import AppUtils from '@/common/AppUtils';

window.AppUtils = AppUtils;

const App = () => (
  <HashRouter>
    <Routes />
  </HashRouter>
);

export default compose(
  AppStateHOC, //
  QueryParserHOC,
  AntdLocaleHOC,
  InitUserInfoHOC
)(App);
