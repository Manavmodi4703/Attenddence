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
  
  .header {
    background-color: grey;
    text-align: center;
    color: black;
    margin: 0;
    padding: 10px;
  }
  
  .registration-form {
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 300px;
  }
  
  .registration-form h1 {
    margin-bottom: 10px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  .form-group input[type="text"],
  .form-group input[type="email"],
  .form-group input[type="password"],
  .form-group select,
  .form-group input[type="file"],
  .registration-form input[type="submit"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  .form-group select {
    appearance: none;
    background-color: white;
  }
  
  .registration-form button[type="submit"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #007bff;
  }
  
  .registration-form button[type="submit"]:hover {
    background-color: #0056b3;
  }
  `