import styled from "styled-components";

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  color: var(--color-gray300);
  margin-right: 5px;

  .iconButton {
    background-color: transparent;
    border: none;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;

  input {
    width: 100%;
    padding: 15px;
    border: none;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  button {
    width: 60px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
  }
`;
