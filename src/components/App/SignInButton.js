import React from 'react';
import styled from 'styled-components';
import * as auth from '../../app/authPopup';

const StyledSignIn = styled.button`
  width: 80px;
  height: 20px;
`;

const SignInButton = () => {
  function handleClick(e) {
    e.preventDefault();
    auth.signIn();
    console.log('The link was clicked.');
  }
  return (
    <StyledSignIn href="#" onClick={handleClick}>
      Click me
    </StyledSignIn>
  );
};

export default SignInButton;
