import styled, { css } from "styled-components";

interface ButtonStyledProps {
  size: boolean;
  format: boolean;
  fullWidth: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  outline: none;
  cursor: pointer;
  width: 130px;
  height: 40px;
  font-size: 16px;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  background-color: var(--color-gray100);
  color: var(--color-gray300);
  &:hover {
    background-color: var(--color-gray300);
    color: var(--color-gray100);
  }
  &:focus {
    background-color: var(--color-gray300);
    color: var(--color-gray100);
  }
  ${(props) =>
    props.format &&
    css`
      background: var(--color-primary);
      color: white;
      &:hover {
        background-color: #93d7af;
      }
      &:focus {
        background-color: #93d7af;
      }
    `}
  ${(props) =>
    props.size &&
    css`
      height: 60px;
    `}
    ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;
