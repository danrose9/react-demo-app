import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Components
import Home from '../pages/Home';
import Components from '../pages/Components';
import Apis from '../pages/Apis';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/components" component={Components} />
    <Route path="/apis" component={Apis} />
  </Switch>
);

export default routes;
