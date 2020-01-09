import styled from "styled-components";

export const StyledLogin = styled.div`
  p {
    text-align: center;
  }

  h1 {
    text-align: center;
  }
  .login-page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .login-page h1 {
      margin: 0 auto;
    }

    .login-img {
      width: 300px;
      height: 150px;
    }

    .login-rt {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin: 0 auto;
    }

    .form-field {
      margin: 0 auto;
    }

    .field-input {
      border-radius: 5px;
      border: 1px solid #353535;
      height: 20px;
    }
    button {
      border-radius: 5px;
      border: 1px solid #353535;
      background: #353535;
      color: #fff;
      padding: 0.25rem 2rem;
      width: 100%;
    }

    button:hover {
      background: yellow;
      color: #353535;
    }

    .hero-img {
      width: 70%;
      height: 92vh;
    }
  }
  @media only screen and (max-width: 550px) {
    .login-page {
      display: flex;
      flex-direction: column;

      .hero-img {
        width: 100%;
        height: 300px;
      }

      .login-rt {
        margin: 2rem auto;
      }
    }
  }
`;
