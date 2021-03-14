import React, { useState } from 'react';
import { useMsal, useAccount } from '@azure/msal-react';
import { loginRequest, graphConfig } from '../../azure/authConfig';
import { ProfileData, fetchMsGraph } from '../../azure/graph';

export const ProfileContent = () => {
  const { instance, accounts } = useMsal();
  const account = useAccount(accounts[0] || {});
  const [graphData, setGraphData] = useState(null);

  function RequestProfileData() {
    if (account) {
      instance
        .acquireTokenSilent({
          ...loginRequest,
          account: account,
        })
        .then((response) => {
          fetchMsGraph(
            response.accessToken,
            graphConfig.graphMeEndpoint
          ).then((response) => setGraphData(response));
          localStorage.setItem('account', JSON.stringify(response));
        });
      console.log('request');
    }
  }
  return (
    <>
      {account ? account.name : 'unknown'}
      <div>{account.username}</div>
      {graphData ? (
        <ProfileData graphData={graphData} />
      ) : (
        <button onClick={RequestProfileData}>
          Request Profile Information
        </button>
      )}
    </>
  );
};

export default ProfileContent;
