import React, { Fragment, useState } from 'react';
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

const UserCard = styled(MenuCard)`
  width: 300px;
  height: 100px;
  top: 65px;
  right: 60px;
`;

const UserDetails = styled.div`
  display: flex;

  height: 70%;
  width: 100%;
  & svg {
    font-size: 4em;
    cursor: pointer;
  }

  & h4 {
    margin: 5px 0 0 0;
    font-size: 20px;
  }
  & p {
    font-size: 14px;
    margin: 5px;
  }

  &.divider {
    border-top: 1px solid #bbb;
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

  const username = localStorage.getItem('username');
  const displayName = localStorage.getItem('displayName');

  const [card, setCard] = useState(false);

  const showCard = () => {
    setCard(!card);
  };

  return (
    <StyledSignIn>
      <VscAccount
        onClick={showCard}
        // onMouseEnter={showCard}
        // onMouseLeave={showCard}
      />
      {displayName}
      {card ? (
        <UserCard>
          <UserDetails>
            <VscSmiley />
            <div>
              <h4>{displayName} </h4>
              <i>{username}</i>
            </div>
            <div className="divider" />
          </UserDetails>

          {/* <div>
            <div onClick={signIn}>Sign In</div>
            <div onClick={signOut}>Sign Out</div>
          </div> */}
        </UserCard>
      ) : null}
    </StyledSignIn>
  );
};

export default UserButton;
