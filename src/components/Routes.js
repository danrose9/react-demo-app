import { Switch, Route } from 'react-router-dom';
import React from 'react';

// Components
import Home from '../pages/Home';
import Components from '../pages/Components';
import Reports from '../pages/Reports';

const routes = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/components" component={Components} />
    <Route path="/reports" component={Reports} />
  </Switch>
);

export default routes;
