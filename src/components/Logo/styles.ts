import styled from "styled-components";

export const LogoContainer = styled.div`
  width: 300px;
  h1 {
    font-size: 30px;
  }
  h1::after {
    content: "Kenzie";
    color: var(--color-secondary);
    font-size: 18px;
  }

  .InnerContainer {
    display: flex;
    flex-direction: row;
    width: 100%;
    border: 1px solid var(--color-gray100);
    box-sizing: border-box;
    box-shadow: 0px 4px 40px -20px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    margin: 40px 0 14px 0;
    padding: 15px;
  }

  .InnerContainerLeft {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 60px;
    height: 60px;
    background-color: #27ae601a;
    font-size: 20px;
    color: var(--color-primary);
    border-radius: 5px;
    margin-right: 19px;
  }

  .InnerContainerRight {
    display: flex;
    align-items: center;
    height: 60px;
    width: 170px;
    font-weight: normal;

    p {
      font-size: 12px;
      line-height: 1.5;
    }
    b {
      color: var(--color-gray600);
    }
  }

  .dotContainer {
    margin-top: 30px;
    display: none;
  }

  .dot {
    height: 11px;
    width: 11px;
    background-color: var(--color-gray100);
    border-radius: 50%;
    display: inline-block;
    margin: 0 23px 23px 0;
  }

  @media (min-width: 769px) {
    .dotContainer {
      display: inherit;
    }
  }
`;
