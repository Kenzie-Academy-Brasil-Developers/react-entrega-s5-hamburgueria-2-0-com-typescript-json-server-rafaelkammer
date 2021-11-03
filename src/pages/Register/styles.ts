import styled from "styled-components";

export const RegisterContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;

  @media (min-width: 769px) {
    flex-direction: row-reverse;
    justify-content: center;
    margin-top: 100px;
  }
`;

export const LogoRegisterContainer = styled.div`
  display: none;

  @media (min-width: 769px) {
    display: inherit;
  }
`;
