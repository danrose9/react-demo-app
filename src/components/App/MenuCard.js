import React from 'react';
import styled from 'styled-components';

export const StyledMenuCard = styled.div`
  z-index: 99;
  position: fixed;
  border-radius: 5px;
  background-color: lightgray;
  display: flex;
`;

const MenuCard = ({ className, children }) => {
  return <StyledMenuCard className={className}>{children}</StyledMenuCard>;
};

export default MenuCard;
