import React from 'react';
import { compose } from 'redux';

import App from '@/pages/App';
import AppStateHOC from '@/common/AppStateHOC';
import QueryParserHOC from '@/common/QueryParserHOC';
import AntdLocaleHOC from '@/common/AntdLocaleHOC';
import ErrorBoundaryHOC from '@/common/ErrorBoundaryHOC';
import InitUserInfoHOC from '@/common/InitUserInfoHOC';

const WrappedApp = compose(
  AppStateHOC, //
  QueryParserHOC,
  AntdLocaleHOC,
  ErrorBoundaryHOC('Top Level App'),
  InitUserInfoHOC
)(App);

export default WrappedApp;
