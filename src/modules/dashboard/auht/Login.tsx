import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button";
import Field from "../../../components/atoms/Inputs/TextField";
import { Title } from "../../../components/atoms/Title/Title";
import { FormWrapper, FormCard, Form } from "../../../components/molecules/Form";
import { login } from "../../../services/auth.service";
import { saveTokens } from "../../../store/slices/auth/auth.slice";

interface LoginForm {
  username: string
  password: string
}

const Login = () => {
  const methods = useForm<LoginForm>();
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const { mutate } = useMutation(login, {})

  const onSubmitForm = async (data: LoginForm) => {
    mutate(data, {
      onSuccess(data) {
        const tokens = {
          ...data,
          isAuthenticated: true
        }
        dispatch(saveTokens(tokens))
        navigate('/')
      },
      onError() {
        console.log("%cUsiario o contraseña incorrecta", "color:red;font-size:18px")
      }
    })
  }
  // TODO: Agregar loader al hacer el login
  // TODO: Trabajar en la funcion de loggout
  return (
    <FormWrapper maxWidth="25rem">
      <Title>Login</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmitForm)}>
          <FormCard>
            <Field
              {...methods.register('username', { required: true })}
              placeholder="Username"
              error={methods.formState.errors.username}
            />
            <Field
              {...methods.register('password', { required: true })}
              placeholder="Password"
              type="text"
              error={methods.formState.errors.password}
            />
            <ButtonsContainer>
              <Button>
                Login
              </Button>
            </ButtonsContainer>
          </FormCard>
        </Form>
      </FormProvider>
    </FormWrapper>
  )
}

export default Login;