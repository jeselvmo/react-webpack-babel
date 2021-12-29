import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '@/modules/Dashboard';
import Banner from '@/modules/Banner';
import About from '@/modules/About';

const router = (props) => {
  return (
    <Switch>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/banner" component={Banner} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default router;
