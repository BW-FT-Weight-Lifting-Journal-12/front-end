import styled from "styled-components";

export const StyledExercises = styled.div`

  h1 {
    text-align: center;
  }
  
  .form-wrapper {
    margin: 4rem auto;
    width: 65%;
    color: #fff;
    padding: 6rem 3rem;
    text-align: center;
    background: #353535;
    margin-bottom: 19.1rem;

    .form-grp {
      display: inline;
      margin: 0 2rem;
    }

    .exercise-btn {
      width: 170px;
      background: #fff;
      color: #000;
      margin-top: 1.5rem;
    }

    .exercise-input {
      border-radius: 5px;
      padding-left: 10px;
      margin-bottom: 2rem;
    }

    #exercise {
      width: 180px;
    }
  }
  @media only screen and (max-width: 550px) {
    .form-wrapper {
      width: 100%;
      margin: 2rem auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      

      .form-grp {
        margin: 0;
        padding-right: 6rem;
      }
      .exercise-btn {
        width: 220px;
        margin-right: 6rem;
      }
    }

    
  }
`;
