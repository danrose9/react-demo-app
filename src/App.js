import React, { useState } from 'react';
import styled from 'styled-components';
import Header from './components/Header';
import Routes from './components/Routes';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Login from './components/Login';

const Container = styled.div`
  width: 100vw;
  display: flex;
  overflow: hidden;
  position: absolute;
  bottom: 30px;
  top: 80px;
  backface-visibility: hidden;
  will-change: overflow;
`;

function App() {
  const [token, setToken] = useState();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <>
      <Header />
      <Container>
        <Sidebar />
        <Routes />
      </Container>
      <Footer />
    </>
  );
}

export default App;
