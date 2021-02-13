import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #88bdbc;
  width: 100vw;

  overflow: hidden;
  top: 0;
  left: 0;
  height: 80px;
`;

export default function Header() {
  return (
    <StyledHeader>
      <h1>Header</h1>
    </StyledHeader>
  );
}
