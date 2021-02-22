import styled from 'styled-components';

export const StyledSidebar = styled.div`
  background-color: #4f4a41;
  overflow: hidden;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  position: relative;
  width: ${(props) => (props.iconStyle ? `250px` : `50px`)};
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

export const ToggleButton = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  // background-color: ${(props) => (props.iconStyle ? `white` : `black`)};
  background-color: #4f4a41;
  padding: 0 5px;
  border: 0;
  font-size: 2.5em;
  cursor: pointer;
`;
