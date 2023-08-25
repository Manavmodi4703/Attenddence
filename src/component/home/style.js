
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
      width: 95%;

    }
    .login-field{
      padding: 0.5rem;
      border: 1px solid #ccc;
      border-radius: 3px;
      font-size: 1rem;
      width: 100%;
      margin-bottom: 1rem;

    }
  .forgot{
    margin-top: 7px;
    margin-left: 196px;
  }

  }
`;

// You can add more styling here for other components if needed






 