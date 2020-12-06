import React from 'react';
import { HashRouter as Router, Route } from 'react-keeper';
import loadable from '@/common/loadable';

const Home = loadable(() => import('@/pages/Home'));
const Banner = loadable(() => import('@/pages/Banner'));

const router = () => (
  <Router>
    <>
      <Route path="/" component={Home} exact />
      <Route path="/banner" component={Banner} />
    </>
  </Router>
);

export default router;
