import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarItems } from './SidebarItems';
import { IconContext } from 'react-icons';
import {
  StyledSidebar,
  ToggleButton,
  StyledMenuItem,
  StyledSpan,
  StyledList,
} from '../styles/StyledSidebar';
import { VscChevronLeft, VscChevronRight } from 'react-icons/vsc';

const Sidebar = (props) => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => {
    setSidebar(!sidebar);
  };

  return (
    <IconContext.Provider value={{ color: '#fff' }}>
      <StyledSidebar iconStyle={sidebar}>
        <StyledMenuItem>
          {SidebarItems.filter((item) => item.active).map((item, index) => {
            return (
              <StyledList key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <StyledSpan>{item.title}</StyledSpan>
                </Link>
              </StyledList>
            );
          })}
          <ToggleButton onClick={showSidebar}>
            {sidebar ? <VscChevronRight /> : <VscChevronLeft />}
          </ToggleButton>
        </StyledMenuItem>
      </StyledSidebar>
    </IconContext.Provider>
  );
};

export default Sidebar;
