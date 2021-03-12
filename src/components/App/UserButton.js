import React, { useState } from 'react';
import { MsalProvider, AuthenticatedTemplate, UnauthenticatedTemplate, useMsal, useAccount } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { msalConfig, loginRequest } from '../../azure/authConfig';
import { PageLayout } from '../../azure/ui';
import { ProfileData, callMsGraph } from '../../azure/graph';
import styled from 'styled-components';
// import { VscAccount } from 'react-icons/vsc';

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

const ProfileContent = () => {
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
                    callMsGraph(response.accessToken).then((response) => setGraphData(response));
                });
        }
    }

    return (
        <>
            <h5 className="card-title">Welcome {account ? account.name : 'unknown'}</h5>
            {graphData ? (
                <ProfileData graphData={graphData} />
            ) : (
                <button variant="secondary" onClick={RequestProfileData}>
                    Request Profile Information
                </button>
            )}
        </>
    );
};

const MainContent = () => {
    return (
        <div>
            <AuthenticatedTemplate>
                <ProfileContent />
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate></UnauthenticatedTemplate>
        </div>
    );
};

const UserButton = () => {
    const msalInstance = new PublicClientApplication(msalConfig);

    const { instance } = useMsal();

    return (
        <MsalProvider instance={msalInstance}>
            <PageLayout>
                <MainContent />
            </PageLayout>
        </MsalProvider>
    );
};
export default UserButton;
