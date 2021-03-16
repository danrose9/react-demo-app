import { VscAccount } from 'react-icons/vsc';

import {
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
  useMsal,
} from '@azure/msal-react';
import { loginRequest } from './authConfig';

export const PageLayout = (props: any) => {

  const { instance } = useMsal();
  
  return (
    <>
      <AuthenticatedTemplate>
        <VscAccount onClick={() => instance.logout()}>
        </VscAccount>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <VscAccount onClick={() => instance.loginPopup(loginRequest)}>
        </VscAccount>
      </UnauthenticatedTemplate>
      {props.children}
    </>
  );
};
