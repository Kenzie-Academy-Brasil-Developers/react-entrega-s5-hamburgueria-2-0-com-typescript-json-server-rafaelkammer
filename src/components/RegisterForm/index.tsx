import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useHistory } from "react-router";
import { ButtonContainer, RegisterContainer, TitleContainer } from "./styles";
import { useAuth } from "../../Provider/Auth";
import { TextField } from "@material-ui/core";
import Button from "../Button";
import { Link } from "react-router-dom";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const RegisterForm = () => {
  const { signUp } = useAuth();

  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup
      .string()
      .matches(/^[A-Za-z\s]+$/, "Nome deve ter apenas letras")
      .required("Campo Obrigatório"),
    email: yup
      .string()
      .email("Digite um email válido")
      .required("Campo Obrigatório"),
    password: yup
      .string()
      .min(8, "Mínimo 8 caracteres")
      .required("Campo Obrigatório")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        "Mínimo de 8 digitos, um caracter especial e uma letra maiúscula"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Senha não confere"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserData>({ resolver: yupResolver(formSchema) });

  const handleForm = (data: UserData) => {
    signUp(data, history);
  };

  return (
    <RegisterContainer>
      <TitleContainer>
        <h3>Cadastrar</h3>
        <Link to="/login">
          <p>Retornar para o login</p>
        </Link>
      </TitleContainer>
      <form onSubmit={handleSubmit(handleForm)}>
        <TextField
          label="Nome"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />
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
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />
        <TextField
          label="Confirmar senha"
          margin="normal"
          variant="outlined"
          size="small"
          color="primary"
          fullWidth
          {...register("confirmPassword")}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
        />

        <ButtonContainer>
          <Button format={false} type="submit">
            Cadastrar
          </Button>
        </ButtonContainer>
      </form>
    </RegisterContainer>
  );
};
export default RegisterForm;
