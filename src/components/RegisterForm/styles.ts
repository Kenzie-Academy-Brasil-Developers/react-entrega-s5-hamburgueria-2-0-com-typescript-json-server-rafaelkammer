import styled from "styled-components";

export const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 15px;
  border: 1px solid var(--color-gray100);
  box-sizing: border-box;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  @media (min-width: 769px) {
    width: 400px;
    margin-left: 60px;
  }
  @media (min-width: 950px) {
    width: 500px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin: 5px 0 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  p {
    font-size: 12px;
    font-weight: normal;
    text-decoration: underline;
  }
  h3 {
    font-size: 16px;
  }
`;
