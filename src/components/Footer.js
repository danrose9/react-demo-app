import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.div`
  background-color: #88bdbc;
  width: 100vw;
  height: 30px;
  position: fixed;
  padding-bottom: 100% auto;
  bottom: 0;
  left: 0;
  font-size: 14px;
`;

export default function Footer() {
  return (
    <StyledFooter>
      <p>Footer</p>
    </StyledFooter>
  );
}
