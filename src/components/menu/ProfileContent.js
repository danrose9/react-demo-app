import {
  useMsal,
  useAccount,
  AuthenticatedTemplate,
  UnauthenticatedTemplate,
} from '@azure/msal-react';
import { loginRequest } from '../../azure/authConfig';
import { VscAccount } from 'react-icons/vsc';

export const ProfileContent = () => {
  const { accounts } = useMsal();
  const account = useAccount(accounts[0] || {});

  return (
    <>
      {account ? account.name : 'unknown'}
      <div>{account.username}</div>
    </>
  );
};

export const ToggleLoginLogout = (props) => {
  const { instance } = useMsal();

  return (
    <>
      <AuthenticatedTemplate>
        <VscAccount onClick={() => instance.logout()}></VscAccount>
      </AuthenticatedTemplate>
      <UnauthenticatedTemplate>
        <VscAccount
          onClick={() => instance.loginPopup(loginRequest)}
        ></VscAccount>
      </UnauthenticatedTemplate>
      {props.children}
    </>
  );
};

export default ProfileContent;
