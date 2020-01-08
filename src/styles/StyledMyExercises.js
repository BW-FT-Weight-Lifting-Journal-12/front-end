import styled from "styled-components";

export const StyledMyExercises = styled.div`
  width: 20em;
  display: inline-block;
  margin: 3rem 3rem;

  .card-wrapper {
    margin: 3rem 2rem;
  }

  .card-body {
    background: #353535;
    width: 20em;
    color: #fff;
    padding: 2rem;
    text-align: center;
    outline-style: inset;
    outline-color: #353535;
    outline-width: 4px;
    border: 4px solid #fff;
  }

  .exercise-btn {
    width: 170px;
    background: #fff;
    color: #000;
    margin-top: 1.5rem;
  }

  .exercise-btn:hover {
    background: yellow;
  }

  @media only screen and (max-width: 550px) {
    width: 100%;
    display: flex;
    background: #353535;
    margin: 3rem 0;

    .card-wrapper {
      width: 100%;
    }
    .card-body {
      width: 100%;
    }
  }
`;
