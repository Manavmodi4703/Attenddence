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
    min-width: 90px;
    min-height: 100px;
    text-align: center;
    line-height: 30px;
    flex: 1;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1.2rem;
    background-color: #7bce4e;
    
    transition: background-color 0.3s, color 0.3s;
    box-shadow: 3px 6px 11px 0;
   

  }

  .section.selected {
    background-color: blue;
    color: white;
  }

  .section:hover {
    
    color: white;
  }

  .logoutbtn {
    width: 30%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  .listbtn {
    padding: 10px;
    width: 40%;
    font-size: large;
    height: 55px;
  }

  .listbtn:hover {
    color: white;
    background-color: blue;
  }

  .select {
    width: 140px;
    height: 40px;
    font-size: 15px;
  }

  .logoutbtn:hover {
    color: blue;
  }


  .student-list {
    background-color: #f8f8f8;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    margin-top: 20px;
    font-size: 1.2rem;
    display: ${props => props.visible ? 'block' : 'none'};
  }
  .section-btn{
    color: #231717;
    font-size: medium;  
    justify-content: center;
    background-color: #62b862;
    border: none;
    cursor: pointer;

  }
  .section-btn:hover{
    color:white;
    background-color:black;
    border-radius:5px;
    transform: scale(1.4);
  }
`;

export default Wrapper;
