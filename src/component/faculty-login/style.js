import { styled } from "styled-components";

const Wrapper = styled.section`

text-align: center;
padding: 20px;

input[type="search"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 20px;
}

.sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
}

.section {
  min-width: 150px;
  min-height: 150px;
  text-align: center;
  line-height: 35px;
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1.2rem;
  background-color: #f8f8f8;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.section:hover {
  background-color: #007bff;
  color: white;
}

.logoutbtn {
    width: 10%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
}

.logoutbtn:hover {
  color: blue;
}





`

export default Wrapper