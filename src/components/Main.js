import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Page from './Page';
import Components from '../pages/Components';
import { Route, Switch } from 'react-router-dom';

const StyledMain = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  height: 100vh;
  position: relative;
  width: 100%;
  backface-visibility: hidden;
  will-change: overflow;
`;

export default function Main() {
  return (
    <StyledMain>
      <Sidebar />
      <Page />
      {/* <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/components" component={Components} />
      </Switch> */}
    </StyledMain>
  );
}
