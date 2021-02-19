import { Switch, Route } from 'react-router-dom';
import React from 'react';
import SidebarData from './SidebarData';

// Components
import Home from '../pages/Home';
import Components from '../pages/Components';
import Reports from '../pages/Reports';

const routes = () => {
  return (
    <Switch>
      {SidebarData.map((item) => (
        <Route path={item.path} component={item.title} />
      ))}
    </Switch>
  );
};

export default routes;

/*
      <Route path="/" exact component={Home} />
      <Route path="/components" component={Components} />
      <Route path="/reports" component={Reports} />
*/
