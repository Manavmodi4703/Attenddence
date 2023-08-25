import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  .role-buttons {
    display: flex;
    gap: 20px;

    button {
      padding: 15px 30px;
      font-size: 18px;
      border: none;
      cursor: pointer;
      border-radius: 5px;
    }

    .faculty-button {
      background-color: #007bff;
      color: white;
    }

    .student-button {
      background-color: #28a745;
      color: white;
    }
  }
`;