import styled from "styled-components";

export const StyledJournalTitle = styled.h1`
  color: #353535;
  font-size: 1.5rem;
  text-align: center;
`;

export const StyledJournalForm = styled.form`
  background: #353535;
  width: 70%;
  padding: 3rem;
  margin: 2rem auto;
  text-align: center;
  outline-style: inset;
  outline-color: #353535;
  outline-width: 4px;
  border: 4px solid #fff;
  display: flex;
  justify-content: center;
  
  input {
    display: flex;
    margin: 2rem auto;
    width: 400px;
    height: 30px;
    padding-left: 10px;
    
  }
  button {
    border-radius: 5px;
    border: 1px solid #353535;
    background: #fff;
    color: #353535;
    padding: 1rem 2rem;
    width: 100%;
    font-size: 1.5rem;
    margin-top: 2rem;
  }
  
  button:hover {
    background: yellow;
    color: #353535;
  }
`;

export const StyledJournalFooter = styled.footer`
  background: #353535;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 15vh;

  `;