import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
  background-color: #88bdbc;
  width: 100vw;
  overflow: hidden;
  top: 0;
  left: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  position: relative;
  z-index: 10;
`;

const StyledTitle = styled.h1`
  width: 500px;
  justify-content: center;
`;

export default function Header() {
  return (
    <StyledHeader>
      <StyledTitle>React Demo App</StyledTitle>
    </StyledHeader>
  );
}
