// import { styled } from "styled-components"

// .container `
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;
//   height: 90vh;
//   background-color: #325334;
  
// `;



// .header`
//   font-size: 40px;
//  margin : auto;
//   background-color: #a09d9d8f;
//   text-align: center;
 
  
  
// `;
// export const H2 = styled.h2 `
// text-align:center;
// `;


// .loginform = `
//   background-color: white;
//   padding: 2rem;
//   border-radius: 5px;
//   box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
//   width: 300px;
//   border-radius: 25px;
// `;

// export const Form = styled.form`
  // display: flex;
  // flex-direction: column;
// `;

// export const FormGroup = styled.div`
//   margin-bottom: 1rem;

// `;

// export const Label = styled.label`
  // font-size: 1rem;
  // margin-bottom: 0.5rem;
// `;

// export const Input = styled.input`
  // padding: 0.5rem;
  // border: 1px solid #ccc;
  // border-radius: 3px;
  // font-size: 1rem;
  // width: 100%;
// `;

// export const Select = styled.select`
//   padding: 0.5rem;
//   border: 1px solid #ccc;
//   border-radius: 3px;
//   font-size: 1rem;
//   width: 100%;
// `;

// export const Button = styled.button`
// padding: 0.5rem 4px;
// background-color: #00ff57;
// color: white;
// border: none;
// border-radius: 7px;
// font-size: 1rem;
// cursor: pointer;
// width: 54px;
// text-align: center;
// margin-left: 118px;
// `;

// export const Footer = styled.footer`
//   margin-top: 1rem;
// `;

import styled from 'styled-components';

export const StyledFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  border: 1px solid #ccc;
  width: 300px;
  padding: 20px;
  margin: auto;
  margin-top: 50px;
  box-shadow: 9px 15px 6px rgba(0, 0, 0, 0.1);
  .header{
    font-size: 40px;
      margin : auto;
       background-color: #a09d9d8f;
       text-align: center;
  }
  .login-form{
    background-color: white;
       padding: 16px;
       border-radius: 5px;
       box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
       width: 300px;
       border-radius: 25px;
       display: flex;
      flex-direction: column;
      text-align: center;
      margin-bottom: 1rem;
      margin-top: 40px;

     

    .submit-button{
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
      margin-top: 14px;
    }
    .input-field{
         padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 1rem;
      width: 100%;

    }
    .login-field{
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 1rem;
      width: 100%;
      margin-bottom: 1rem;

    }

  }
`;

// You can add more styling here for other components if needed






 