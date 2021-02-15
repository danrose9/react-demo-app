import React from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';
import Page from './Page';

const StyledMain = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  height: 100vh;
  position: relative;
  backface-visibility: hidden;
  will-change: overflow;
`;

export default function Main() {
  return (
    <StyledMain>
      <Sidebar />
      <Page />
    </StyledMain>
  );
}
