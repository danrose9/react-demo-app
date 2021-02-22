import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import {
  StyledSidebar,
  ToggleButton,
  StyledMenuItem,
  StyledSpan,
  StyledList,
} from '../styles/StyledSidebar';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

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
        <ToggleButton onClick={showSidebar}>
          {sidebar ? <VscChevronLeft /> : <VscChevronRight />}
        </ToggleButton>
      </StyledSidebar>
    </IconContext.Provider>
  );
};

export default Sidebar;
