import React from 'react';

// need to pull this in from UserButton and make it more generic

// const { instance, accounts } = useMsal();
// const account = useAccount(accounts[0] || {});
// const [graphData, setGraphData] = useState(null);

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
//           graphEndpoint
//         ).then((response) => setGraphData(response));
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
