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
  min-width: 124px;
  min-height: 130px;
  text-align: center;
  line-height: 30px;
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
    width: 30%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
}
.listbtn{
  padding:10px;
  width: 40%;
  font-size:large;
  height:55px;
}
.select{
  width:140px;
  height:40px;
  font-size:15px;
}

.logoutbtn:hover {
  color: blue;
}





`

export default Wrapper