import styled from "styled-components";

export const CartInnerContainer = styled.div`
  width: 300px;
  height: 80px;
  margin: 20px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  background: #ffffff;

  .deleteButton {
    background-color: transparent;
    border: none;
    color: var(--color-gray300);
  }
  @media (min-width: 768px) {
    width: 450px;
  }
`;

export const ImgContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: var(--color-gray100);
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    height: 85%;
    width: auto;
    border-radius: 5px;
  }
`;

export const InfoContainer = styled.div`
  height: 100%;
  width: 200px;
  margin-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    font-weight: normal;
  }
  h4 {
    color: var(--color-primary);
  }

  .quantityContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 34px;
    width: 100px;
    border: 2px solid #f2f2f2;
    box-sizing: border-box;
  }

  .quantityButton {
    border: none;
    height: 100%;
    width: 30px;
  }
`;
