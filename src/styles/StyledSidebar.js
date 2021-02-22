import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: #4f4a41;
  overflow: hidden;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  width: 50px;
  position: relative;
`;

export const StyledSpan = styled.span`
  margin-left: 20px;
`;

export const StyledMenuItem = styled.ul`
  width: 100%;
  padding: 1px;
`;

export const StyledList = styled.li`
  cursor: pointer;
`;

// export const StyledNavItem = styled.a`
//   display: flex;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 8px 0px 8px 8px;
//   list-style: none;
//   height: 50px;
// `;

export const ToggleButton = styled.button`
  position: absolute;
  bottom: 0;
`;
