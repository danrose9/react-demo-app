import React from 'react';
import styled from 'styled-components';
import UserButton from './menu/UserButton';

const StyledHeader = styled.div`
    background-color: #785964;
    width: 100vw;
    overflow: hidden;
    top: 0;
    left: 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    position: relative;
    z-index: 10;
    justify-content: space-between;
`;

const StyledTitle = styled.a`
    width: 500px;
    justify-content: center;
    color: #f5f5f5;
    padding: 20px;
    font-size: 2.5em;
`;

export default function Header() {
    return (
        <StyledHeader>
            <StyledTitle>React Demo Application</StyledTitle>
            <UserButton />
        </StyledHeader>
    );
}
