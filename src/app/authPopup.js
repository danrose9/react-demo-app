import * as msal from '@azure/msal-browser';
import { msalConfig, loginRequest } from './authConfig';

// Create the main myMSALObj instance
// configuration parameters are located at authConfig.js
const myMSALObj = new msal.PublicClientApplication(msalConfig);

// Handle response from auth
// response includes authority, tenantid, scopes, idToken, accessToken, expiration date & some account info
function handleResponse(response) {
  if (response !== null) {
    console.log('response received at: ' + new Date().toString());
  } else {
    console.log('no response received');
  }

  return response;
}

// Sign in (/authorize)
export const signIn = () => {
  return myMSALObj
    .loginPopup(loginRequest)
    .then(handleResponse)
    .catch((error) => {
      console.error(error);
    });
};

// export function signOut() {
//   const logoutRequest = {
//     account: myMSALObj.getAccountByUsername(username),
//   };

//   myMSALObj.logout(logoutRequest);
// }

// export function getTokenPopup(request) {
//   request.account = myMSALObj.getAccountByUsername(username);

//   return myMSALObj.acquireTokenSilent(request).catch((error) => {
//     console.warn('silent token acquisition fails. acquiring token using popup');
//     if (error instanceof msal.InteractionRequiredAuthError) {
//       // fallback to interaction when silent call fails
//       return myMSALObj
//         .acquireTokenPopup(request)
//         .then((tokenResponse) => {
//           // console.log(tokenResponse);
//           return tokenResponse;
//         })
//         .catch((error) => {
//           console.error(error);
//         });
//     } else {
//       console.warn(error);
//     }
//   });
// }

// export function getProfile() {
//   getTokenPopup(loginRequest)
//     .then((response) => {
//       callMSGraph(
//         graphConfig.graphMeEndpoint,
//         response.accessToken,
//         returnedData
//       );
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// export function getProfilePicture() {
//   getTokenPopup(loginRequest)
//     .then((response) => {
//       callMSGraph(graphConfig.graphMePhoto, response.accessToken, returnedData);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// }

// export function returnedData(data, endpoint) {
//   console.log(
//     'Graph API responded to ' + endpoint + ' at: ' + new Date().toString()
//   );

//   var dataLength = Object.keys(data).length;

//   console.log('Data Length : ' + dataLength);
// }

// selectAccount();
