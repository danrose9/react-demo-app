import React, { useState } from 'react';
import styled from 'styled-components';
import { VscAccount } from 'react-icons/vsc';
import AzureAuthenticationButton from '../../azure/azure-authentication-component';
import { AccountInfo } from '@azure/msal-browser';

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
  const [currentUser, setCurrentUser] = useState();

  // authentication callback
  const onAuthenticated = async (userAccountInfo) => {
    setCurrentUser(userAccountInfo);
  };

  // Render JSON data in readable format
  const PrettyPrintJson = ({ data }) => {
    return (
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  };

  // Quick link - user revokes app's permission
  const ShowPermissionRevokeLinks = () => {
    return (
      <div>
        <div>
          <a href="https://myapps.microsoft.com" target="_blank" rel="noopener">
            Revoke AAD permission
          </a>
        </div>
        <div>
          <a
            href="https://account.live.com/consent/manage"
            target="_blank"
            rel="noopener"
          >
            Revoke Consumer permission
          </a>
        </div>
      </div>
    );
  };

  return (
    <StyledSignIn id="Auth">
      <VscAccount></VscAccount>
      <AzureAuthenticationButton onAuthenticated={onAuthenticated} />
      {currentUser && (
        <div>
          <PrettyPrintJson data={currentUser} />
          <ShowPermissionRevokeLinks />
        </div>
      )}
    </StyledSignIn>
  );
};
export default UserButton;
