import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSidebar = styled.div`
  background-color: #4f4a41;
  width: 200px;
  display: flex;
  height: 100vh;
`;
export default function Sidebar() {
  return (
    <StyledSidebar>
      {/* <div>
        <Link to="/">Home </Link>
        <Link to="/components">Components </Link>
      </div> */}
    </StyledSidebar>
  );
}
