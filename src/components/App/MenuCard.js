import React from 'react';
import styled from 'styled-components';

export const StyledMenuCard = styled.div`
  z-index: 99;
  position: fixed;
  border-radius: 5px;
  border: 2px solid black;
  background-color: white;
  display: flex;
  color: black;
`;

const MenuCard = ({ className, children }) => {
  return <StyledMenuCard className={className}>{children}</StyledMenuCard>;
};

export default MenuCard;
