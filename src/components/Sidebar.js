import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';

const StyledSidebar = styled.div`
  background-color: #4f4a41;
  overflow: auto;
  height: auto;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  width: 50px;
`;

const ToggleButton = styled.button`
  position: absolute;
  bottom: 150px;
`;

const StyledMenuItem = styled.ul`
  width: 100%;
  padding: 1px;
`;

const StyledSpan = styled.span`
  margin-left: 20px;
`;

const StyledList = styled.li`
  cursor: pointer;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <StyledSidebar className={sidebar ? 'sidebar active' : 'sidebar'}>
        <StyledMenuItem>
          {SidebarData.map((item, index) => {
            return (
              <StyledList key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <StyledSpan>{item.title}</StyledSpan>
                </Link>
              </StyledList>
            );
          })}
        </StyledMenuItem>
        <ToggleButton onClick={showSidebar}>BUTTON</ToggleButton>
      </StyledSidebar>
    </IconContext.Provider>
  );
};

export default Sidebar;
