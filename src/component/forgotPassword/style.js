import styled  from "styled-components";

export const Wrapper = styled.div`

max-width: 400px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
background-color: #f9f9f9;
margin-top :75px;

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.input {
  margin-bottom: 10px;

  input {
    width: -webkit-fill-available;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
}

button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  cursor: pointer;
}

p {
  text-align: center;
  margin-top: 10px;
  color: #ff0000;
}

.forgotInput {
  margin-top: 20px;

  input {
    width: -webkit-fill-available;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 10px;
  }
}
`;