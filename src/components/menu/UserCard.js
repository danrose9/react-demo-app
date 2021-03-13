import React, { useState } from 'react';
import MenuCard from './MenuCard';

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

export const UserCard = () => {
  const username = localStorage.getItem('username');
  const displayName = localStorage.getItem('displayName');

  const [card, setCard] = useState(false);

  const showCard = () => {
    setCard(!card);
  };

  return;
  {
    card ? (
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
    ) : null;
  }
};
