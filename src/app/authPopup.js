import * as msal from '@azure/msal-browser';
import { msalConfig, loginRequest } from './authConfig';
import { callMSGraph } from './graph';
import { graphConfig } from './graphConfig';
import { updateUI } from './ui';

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(msalConfig);

let username = '';
let displayName = '';

export function selectAccount() {
  const currentAccounts = myMSALObj.getAllAccounts();

  if (currentAccounts.length === 0) {
    return;
  } else if (currentAccounts.length > 1) {
    // Add choose account code here
    console.warn('Multiple accounts detected.');
  } else if (currentAccounts.length === 1) {
    console.log(currentAccounts[0]);
    username = currentAccounts[0].username;
    displayName = currentAccounts[0].name;
    localStorage.setItem('username', username);
    localStorage.setItem('displayName', displayName);
  }
}

function handleResponse(response) {
  if (response !== null) {
    console.log('response : true');
  } else {
    selectAccount();
  }
}

export const signIn = () => {
  console.log('Sign In');
  myMSALObj
    .loginPopup(loginRequest)
    .then(handleResponse)
    .catch((error) => {
      console.error(error);
    });
  getProfile();
  getProfilePicture();
};

export function signOut() {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
  };

  myMSALObj.logout(logoutRequest);
}

export function getTokenPopup(request) {
  request.account = myMSALObj.getAccountByUsername(username);

  return myMSALObj.acquireTokenSilent(request).catch((error) => {
    console.warn('silent token acquisition fails. acquiring token using popup');
    if (error instanceof msal.InteractionRequiredAuthError) {
      // fallback to interaction when silent call fails
      return myMSALObj
        .acquireTokenPopup(request)
        .then((tokenResponse) => {
          console.log(tokenResponse);
          return tokenResponse;
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.warn(error);
    }
  });
}

export function getProfile() {
  getTokenPopup(loginRequest)
    .then((response) => {
      callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
    })
    .catch((error) => {
      console.error(error);
    });
}

export function getProfilePicture() {
  getTokenPopup(loginRequest)
    .then((response) => {
      callMSGraph(graphConfig.graphMePhoto, response.accessToken, updateUI);
    })
    .catch((error) => {
      console.error(error);
    });
}

selectAccount();
