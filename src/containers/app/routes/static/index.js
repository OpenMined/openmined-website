import React from 'react';
import { Route, Switch } from 'react-router-dom';

import asyncComponent from '../../components/async-component';

const Homepage = asyncComponent(() => import('./homepage'));

const NotFound = asyncComponent(() => import('../not-found'));

export default () => (
  <Switch>
    <Route exact path="/" component={Homepage} />

    <Route component={NotFound} />
  </Switch>
);
