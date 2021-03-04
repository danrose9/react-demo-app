import React, { useState } from 'react';
import styled from 'styled-components';
import * as auth from '../../app/authPopup';
import { VscAccount } from 'react-icons/vsc';
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

const UserCard = styled(MenuCard)`
  width: 300px;
  height: 100px;
  top: 65px;
  right: 60px;
`;

const UserButton = () => {
  function handleClick(e) {
    e.preventDefault();
    auth.signIn();
  }

  // const username = localStorage.getItem('username');
  const displayName = localStorage.getItem('displayName');

  const [card, setCard] = useState(false);

  const showCard = () => {
    setCard(!card);
  };

  return (
    <StyledSignIn>
      <VscAccount
        onClick={handleClick}
        onMouseEnter={showCard}
        onMouseLeave={showCard}
      />
      {displayName}
      {card ? <UserCard /> : null}
    </StyledSignIn>
  );
};

export default UserButton;
