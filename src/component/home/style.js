import { styled } from "styled-components"

export  const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  background-color: #dfdbdb;
  
`;



export const Header = styled.h1`
  font-size: 40px;
 margin : auto;
  background-color: #ff00008f;
  text-align: center;
 
  
  
`;
export const H2 = styled.h2 `
text-align:center;
`;


export const LoginForm = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 300px;
  border-radius: 25px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const FormGroup = styled.div`
  margin-bottom: 1rem;

`;

export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const Input = styled.input`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
`;

export const Select = styled.select`
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  font-size: 1rem;
`;

export const Button = styled.button`
padding: 0.5rem 4px;
background-color: #00ff57;
color: white;
border: none;
border-radius: 7px;
font-size: 1rem;
cursor: pointer;
width: 54px;
text-align: center;
margin-left: 118px;
`;

export const Footer = styled.footer`
  margin-top: 1rem;
`;






 