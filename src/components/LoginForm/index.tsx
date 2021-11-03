import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { ButtonContainer, LoginContainer, Text } from "./styles";
import { useAuth } from "../../Provider/Auth";
import { TextField } from "@material-ui/core";
import Button from "../Button";

interface UserData {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { signIn } = useAuth();

  const history = useHistory();

  const formSchema = yup.object().shape({
    email: yup.string().required("Campo obrigatório"),
    password: yup.string().required("Campo obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: UserData) => {
    signIn(data, history);
  };

  return (
    <LoginContainer>
      <h3>Login</h3>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="E-mail"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          label="Senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          type="password"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <ButtonContainer>
          <Button type="submit">Enviar</Button>
        </ButtonContainer>
        <Text>
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </Text>
        <ButtonContainer>
          <Button
            onClick={() => {
              history.push("/register");
            }}
            format={false}
          >
            Cadastrar
          </Button>
        </ButtonContainer>
      </form>
    </LoginContainer>
  );
};
export default LoginForm;
