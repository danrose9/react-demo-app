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

const UserCard = styled(MenuCard)`
  width: 300px;
  height: 100px;
  top: 65px;
  right: 60px;
  display: flex;
  flex-direction: column;
  background-color: #f1fffa; // Card color
  border: 2px solid #93b7be;
`;

const UserDetails = styled.div`
  display: flex;
  align-self: center;
  height: 70%;
  width: 90%;
  border-bottom: 2px solid #93b7be;
  & svg {
    font-size: 4em;
  }
`;
const Names = styled.div`
  padding: 6px;
  width: 100%;
`;

const DisplayName = styled.div`
  font-size: 1.25em;
  font-weight: bold;
`;

const LowerCard = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 3px 0 0 0;
`;

const SignInOut = styled.div`
  cursor: pointer;
`;

const is_user_logged_in = () => {
  // do we have name in storage?
  // Yes => logged In
  // No => Show login
};

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
            <Names>
              <DisplayName>{displayName}</DisplayName>
              <div>{username}</div>
            </Names>
          </UserDetails>
          <LowerCard>
            <div className="status">Status</div>
            <SignInOut className="signInOut" onClick={signIn}>
              Sign In
            </SignInOut>
          </LowerCard>
        </UserCard>
      ) : null}
    </StyledSignIn>
  );
};

export default UserButton;
