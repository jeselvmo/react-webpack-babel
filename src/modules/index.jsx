import React from 'react';
import { compose } from 'redux';
import { Routes, Route } from 'react-router-dom';
import Page from '@/components/Page';

import AppStateHOC from './hocs/AppStateHOC';
import QueryParserHOC from './hocs/QueryParserHOC';
import AntdLocaleHOC from './hocs/AntdLocaleHOC';
import ErrorBoundaryHOC from './hocs/ErrorBoundaryHOC';
import InitUserInfoHOC from './hocs/InitUserInfoHOC';

import Layout from './Layout';
import Login from './Login';
import Dashboard from './Dashboard';
import Banner from './Banner';
import About from './About';
import ExportExcel from './ExportExcel';

const AppView = () => (
  <Routes>
    <Route path="/" element={<Layout />}>
      <Route index element={<Dashboard />} />
      <Route path="banner" element={<Banner />} />
      <Route path="about" element={<About />} />
    </Route>
    <Route path="/login" element={<Login />} />
    <Route path="/export-excel" element={<ExportExcel />} />
    <Route path="*" element={<Page title="404" />} />
  </Routes>
);

const WrappedAppView = compose(
  AppStateHOC, //
  QueryParserHOC,
  AntdLocaleHOC,
  ErrorBoundaryHOC('Top Level App'),
  InitUserInfoHOC
)(AppView);

export default WrappedAppView;
