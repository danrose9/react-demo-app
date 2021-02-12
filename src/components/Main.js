import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Home from '../pages/Home';
import Components from '../pages/Components';
import { Route, Switch } from 'react-router-dom';

const StyledMain = styled.div`
  width: 100vw;
`;

export default function Main() {
  return (
    <StyledMain>
      <Sidebar />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
      </Switch> */}
    </StyledMain>
  );
}
