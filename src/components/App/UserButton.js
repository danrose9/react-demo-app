import React, { useState } from 'react';
import styled from 'styled-components';
import { signIn } from '../../app/authPopup';
import { VscAccount } from 'react-icons/vsc';
import { UserProvider, UserContext } from './UserProvider';

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
  const [displayName, setDisplayName] = useState('');

  async function connect() {
    const response = await signIn();

    setDisplayName(response.account.name);
  }

  // const displayName = localStorage.getItem('displayName');
  // console.log('userDetails : ' + userDetails);

  return (
    <StyledSignIn>
      <VscAccount
        onClick={connect}
        // onMouseEnter={showCard}
        // onMouseLeave={showCard}
      />
      {displayName}
    </StyledSignIn>
  );
};

export default UserButton;
