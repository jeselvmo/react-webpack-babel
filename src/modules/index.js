import React from 'react';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import Page from '@/components/Page';

import AppStateHOC from './hocs/AppStateHOC';
import QueryParserHOC from './hocs/QueryParserHOC';
import AntdLocaleHOC from './hocs/AntdLocaleHOC';
import InitUserInfoHOC from './hocs/InitUserInfoHOC';

import Layout from './Layout';
import Login from './Login';

const AppView = () => (
  <Switch>
    <Route path="/" component={Layout} exact />
    <Route path="/login" component={Login} />
  </Switch>
);

const WrappedAppView = compose(
  AppStateHOC, //
  QueryParserHOC,
  AntdLocaleHOC,
  InitUserInfoHOC
)(AppView);

export default WrappedAppView;
