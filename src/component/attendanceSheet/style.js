import styled from 'styled-components';

const Wrapper = styled.div`
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #f5f5f5;
  text-align: center;

  h1 {
    margin-bottom: 20px;
  }

  .student-list {
    display: flex;
    flex-direction: column;
    align-items: center;

    .student-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 80%;
      margin: 10px auto;

      .student-info {
        flex: 1;
      }

      .attendance-buttons {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        button {
          margin-left: 10px;
          padding: 5px 10px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: bold;
          text-transform: uppercase;
        }

        .present {
          background-color: #4caf50;
          color: white;
        }

        .absent {
          background-color: #f44336;
          color: white;
        }
      }
    }
  }

  .mark-button {
    margin-top: 20px;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    background-color: #2196f3;
    color: white;
    cursor: pointer;
    font-weight: bold;
    text-transform: uppercase;
  }
  .mark-button:hover{
    color:black;
  }
 
`;

export default Wrapper;
