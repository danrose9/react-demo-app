import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import './Sidebar.css';

const StyledSidebar = styled.div`
  background-color: #4f4a41;
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
`;

const StyledMenuItem = styled.ul`
  width: 100%;
`;

const StyledSpan = styled.span`
  margin-left: 0px;
`;

export default function Sidebar() {
  return (
    <StyledSidebar>
      <StyledMenuItem>
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={item.cName}>
              <Link to={item.path}>
                {/* {item.icon} */}
                <StyledSpan>{item.title}</StyledSpan>
              </Link>
            </li>
          );
        })}
      </StyledMenuItem>
    </StyledSidebar>
  );
}
