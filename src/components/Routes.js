import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import SidebarData from './SidebarData';
// Components
import Home from '../pages/Home';
import Components from '../pages/Components';
import Reports from '../pages/Reports';
import Settings from '../pages/Settings';

const StyledPage = styled.div`
  width: 100vw;
  flex: 1;
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`;

const Routes = () => {
  return (
    <StyledPage>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
        <Route path="/reports" component={Reports} />
        <Route path="/settings" component={Settings} />
      </Switch>
    </StyledPage>
  );
};

export default Routes;
