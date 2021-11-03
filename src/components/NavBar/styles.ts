import styled from "styled-components";

export const NavContainer = styled.div`
  width: 100%;
  height: 80px;
  background-color: var(--color-gray0);
  display: flex;
  justify-content: center;
`;

export const NavInnerContainer = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1315px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeftContainer = styled.div`
  margin-left: 5px;
  h1 {
    font-size: 30px;
  }
  h1::after {
    content: "Kenzie";
    color: var(--color-secondary);
    font-size: 18px;
  }
`;

export const NavRightContainer = styled.div`
  margin-right: 5px;
  display: inherit;
`;
