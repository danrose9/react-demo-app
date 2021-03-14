import React, { useState } from 'react';
import {
  MsalProvider,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig } from '../../azure/authConfig';
import { PageLayout } from '../../azure/ui';
import ProfileContent from './ProfileContent';
import styled from 'styled-components';

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
        <PageLayout>
          <div>
            <AuthenticatedTemplate>
              <ProfileContent />
            </AuthenticatedTemplate>
            <UnauthenticatedTemplate>Log In</UnauthenticatedTemplate>
          </div>
        </PageLayout>
      </MsalProvider>
    </StyledSignIn>
  );
};
export default UserButton;
