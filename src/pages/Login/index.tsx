import LoginForm from "../../components/LoginForm";
import Logo from "../../components/Logo";
import { LoginContainer } from "./styles";

const Login = () => {
  return (
    <LoginContainer>
      <Logo />
      <LoginForm />
    </LoginContainer>
  );
};
export default Login;
