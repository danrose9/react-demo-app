import React from 'react';

// need to pull this in from UserButton and make it more generic

// function callMSGraph(graphEndpoint: string) {
//   if (account) {
//     instance
//       .acquireTokenSilent({
//         ...loginRequest,
//         account: account,
//       })
//       .then((response) => {
//         fetchMsGraph(
//           response.accessToken,
//           graphConfig.graphMeEndpoint
//         ).then((response) => setGraphData(response));
//         localStorage.setItem('account', JSON.stringify(response));
//       });
//     console.log('request');
//   }
// }

export async function fetchMsGraph(accessToken: string, graphEndpoint: string) {
  const headers = new Headers();
  const bearer = `Bearer ${accessToken}`;

  headers.append('Authorization', bearer);

  const options = {
    method: 'GET',
    headers: headers,
  };

  return fetch(graphEndpoint, options)
    .then((response) => response.json())
    .catch((error) => console.log(error));
}


//This is just here for button, this should be removed
export const ProfileData = (props: any) => {
  return (
    <>
    </>
  );
};
