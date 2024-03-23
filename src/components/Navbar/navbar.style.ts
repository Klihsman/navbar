import styled, { css } from "styled-components";

const NavbarWrapper = styled.div`
  ${() => css`
    &.navbar-component {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `}
`;

export default NavbarWrapper;
