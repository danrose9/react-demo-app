import styled, { css } from 'styled-components';

const inactiveStyles = `
  width: 50px;
  & span {
    display: none;
  }
  & li {
    padding: 0;
  }

`;

export const StyledSidebar = styled.div`
  background-color: #4f4a41;
  overflow: hidden;
  padding: 0.5rem;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;
  position: relative;
  width: 250px;
  // width: ${(props) => (props.iconStyle ? `250px` : `50px`)};
  &:iconstyle {
    ${inactiveStyles}
  }

  ${(props) =>
    props.iconStyle &&
    css`
      ${inactiveStyles}
    `}
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
  background-color: #4f4a41;
  padding: 0 5px;
  border: 0;
  font-size: 2.5em;
  cursor: pointer;
`;
