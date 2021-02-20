import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// import SidebarData from './SidebarData';
// Components
import Home from '../pages/Home';
import Components from '../pages/Components';
import Reports from '../pages/Reports';

const StyledPage = styled.div`
  width: 100vw;
  flex: 1;
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`;

export default function Routes() {
  return (
    <StyledPage>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
        <Route path="/reports" component={Reports} />
      </Switch>
    </StyledPage>
  );
}

// {SidebarData.map(({ path, Component }, key) => (
//   <Route exact path={path} component={Component} key={key} />
// ))}
