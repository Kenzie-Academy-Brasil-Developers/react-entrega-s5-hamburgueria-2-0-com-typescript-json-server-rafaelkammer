import Logo from "../../components/Logo";
import RegisterForm from "../../components/RegisterForm";
import { RegisterContainer, LogoRegisterContainer } from "./styles";

const Register = () => {
  return (
    <RegisterContainer>
      <RegisterForm />
      <LogoRegisterContainer>
        <Logo />
      </LogoRegisterContainer>
    </RegisterContainer>
  );
};
export default Register;
