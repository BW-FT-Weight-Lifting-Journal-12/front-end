import styled from "styled-components";

export const StyledNavigation = styled.div`
  .nav {
    width: 100%;
    height: 75px;
    background: #353535;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .link-text {
      color: #fff;
      text-decoration: none;
    }

    .link-text:hover {
      color: yellow;
    }

    .logo {
      width: 300px;
      height: 50px;
    }
  }
`;
