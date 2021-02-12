import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #88bdbc;
  width: 100vw;
  // position: fixed;

  top: 0;
  left: 0;
  height: 60px;
  // z-index: 100;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}
