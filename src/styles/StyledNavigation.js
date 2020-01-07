import styled from "styled-components";

export const StyledNavigation = styled.div`
  .nav {
    width: 100%;
    height: 75px;
    background: #353535;
    display: flex;
    justify-content: space-around;
    align-items: center;

    .links {
      width: 60%;
      display: flex;
      justify-content: space-evenly;
    }

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
  @media only screen and (max-width: 550px) {
    .nav {
      flex-direction: column;
      height: 100px;
      padding: 1.5em 0;
      margin: 0 auto;
      align-content: center;
    }
    .logo {
      width: 200px;
      height: 25px;
    }
  }
`;
