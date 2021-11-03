import { ReactNode } from "react";
import { ButtonStyled } from "./styles";

interface ButtonProps {
  children: ReactNode;
  size?: boolean;
  format?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
  type?: any;
}

const Button = ({
  size = true,
  format = true,
  fullWidth = true,
  children,
  onClick,
  type = "button",
}: ButtonProps) => {
  return (
    <ButtonStyled
      type={type}
      size={size}
      format={format}
      fullWidth={fullWidth}
      onClick={onClick}
    >
      {children}
    </ButtonStyled>
  );
};

export default Button;
