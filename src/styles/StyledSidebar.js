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
  padding: 0;
`;

export const StyledList = styled.li`
  &.nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 0;
    list-style: none;
    height: 50px;

    & a {
      text-decoration: none;
      color: #f5f5f5;
      font-size: 20px;
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 5px;
      &:hover {
        background-color: #716e67;
        width: 100%;
      }
    }
    & svg {
      font-size: 24px;
    }

    // &.base {
    //   position: absolute;
    //   bottom: 4px;
    //   &:hover {
    //     background-color: #716e67;
    //     width: 75%;
    //   }
    // }
  }
  cursor: pointer;
`;

export const ToggleButton = styled.a`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #4f4a41;
  padding: 0 5px;
  font-size: 2.5em;
  cursor: pointer;
  &:hover {
    background-color: #716e67;
  }
`;
