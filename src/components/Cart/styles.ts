import styled from "styled-components";

export const CartContainer = styled.div`
  width: 375px;
  @media (min-width: 768px) {
    width: 500px;
  }
`;

export const CartHeader = styled.div`
  height: 54px;
  background-color: var(--color-primary);
  color: #fff;
  font-size: 18px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .closeButton {
    border: none;
    background-color: transparent;
    color: #fff;
    font-size: 20px;
  }
`;

export const TotalContainer = styled.div`
  padding: 20px;

  .valueContainer {
    margin: 20px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: var(--color-gray300);
  }
`;
