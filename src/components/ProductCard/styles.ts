import styled from "styled-components";

export const ProductContainer = styled.div`
  width: 300px;
  height: 346px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  border: 2px solid #e0e0e0;
  box-sizing: border-box;
  border-radius: 5px;
  margin-top: 25px;
  &:focus-within {
    border: 2px solid var(--color-primary);
  }
  &:hover {
    border: 2px solid var(--color-primary);
  }
`;

export const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
  background-color: var(--color-gray0);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 80%;
    width: auto;
    border-radius: 5px;
  }
`;

export const InfoContainer = styled.div`
  width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  p {
    font-weight: normal;
  }
  h4 {
    color: var(--color-primary);
  }
`;
