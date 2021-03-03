import React from 'react';
import styled from 'styled-components';
import * as auth from '../../app/authPopup';
import { VscAccount } from 'react-icons/vsc';

const StyledSignIn = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  color: #f5f5f5;
  cursor: default;

  & svg {
    font-size: 2.5em;
    cursor: pointer;
    padding-right: 10px;
  }
`;

const UserButton = () => {
  function handleClick(e) {
    e.preventDefault();
    auth.signIn();
  }

  // const username = localStorage.getItem('username');
  const displayName = localStorage.getItem('displayName');

  return (
    <StyledSignIn>
      <VscAccount onClick={handleClick} />
      {displayName}
    </StyledSignIn>
  );
};

export default UserButton;
