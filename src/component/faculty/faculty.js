

import styled from 'styled-components';

export const Wrapper = styled.div`
 
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  .registration-form {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
  }

  input[type="text"],
  input[type="password"],
  input[type = "email"],
  input[type="file"],
  button[type="submit"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  .registration-form button[type="submit"] {
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-left: 8px;
  }
  
  .registration-form button[type="submit"]:hover {
    background-color: #0056b3;
  }
  .form-group {
    margin-bottom: 15px;
    width: 88%;
    padding: 3px;
    border: 0px solid #ccc;
    border-radius: 13px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"],
  .form-group input[type="file"],
  .registration-form button[type="submit"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
`;



  