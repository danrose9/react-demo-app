import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #254e58;
  width: 100vw;
  height: 50px;
  position: fixed;
  width: 100%;
  padding-bottom: 100% auto;
  bottom: 0;
  left: 0;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
}
