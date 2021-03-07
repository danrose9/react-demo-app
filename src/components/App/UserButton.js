import React, { useState } from 'react';
import styled from 'styled-components';
import * as auth from '../../app/authPopup';
import { VscAccount, VscSmiley } from 'react-icons/vsc';
import MenuCard from './MenuCard';

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
  function signIn(e) {
    e.preventDefault();
    auth.signIn();
  }

  function signOut(e) {
    e.preventDefault();
    auth.signOut();
    localStorage.clear();
  }
  const displayName = localStorage.getItem('displayName');
  return (
    <StyledSignIn>
      <VscAccount
        onClick={signIn}
        // onMouseEnter={showCard}
        // onMouseLeave={showCard}
      />
      {displayName}
    </StyledSignIn>
  );
};

export default UserButton;
