import React, { useState } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import { loginRequest, graphConfig } from './authConfig';

export const ConnectMSGraph = () => {
  console.log("ConnectMSGraph called");
  
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);

  console.log("RequestData called");
    if (account) {
          instance
            .acquireTokenSilent({
              ...loginRequest,
              account: account,
            })
            .then((response) => {
              fetchMsGraph(
                response.accessToken,
                graphConfig.graphMePhoto
              ).then((response) => setGraphData(response));
              localStorage.setItem('photo', JSON.stringify(response));
            });
          console.log(graphData);
      };}



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

export default ConnectMSGraph;




