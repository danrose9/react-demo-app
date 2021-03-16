import React from 'react';
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../../azure/authConfig';
import styled from 'styled-components';
import { ProfileContent, ToggleLoginLogout } from './ProfileContent';

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
  const msalInstance = new PublicClientApplication(msalConfig);

  return (
    <StyledSignIn>
      <MsalProvider instance={msalInstance}>
        <ToggleLoginLogout>
          <div>
            <AuthenticatedTemplate>
              <ProfileContent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>Log In</UnauthenticatedTemplate>
          </div>
        </ToggleLoginLogout>
      </MsalProvider>
    </StyledSignIn>
  );
};
export default UserButton;
