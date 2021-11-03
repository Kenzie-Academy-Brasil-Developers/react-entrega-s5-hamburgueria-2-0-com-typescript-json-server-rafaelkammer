import styled from "styled-components";

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 15px;
  border: 1px solid var(--color-gray100);
  box-sizing: border-box;
  box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  h3 {
    align-self: flex-start;
    margin: 5px 0 10px;
  }

  @media (min-width: 769px) {
    width: 400px;
    margin-right: 60px;
  }
  @media (min-width: 950px) {
    width: 500px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 15px;
`;

export const Text = styled.p`
  margin: 20px 25px;
  font-size: 14px;
  font-weight: normal;
  text-align: center;
`;
