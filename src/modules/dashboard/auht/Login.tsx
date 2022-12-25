import { useMutation } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button";
import Field from "../../../components/atoms/Inputs/TextField";
import Title from "../../../components/atoms/Title/Title";
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
        navigate('/dashboard/panel')
      },
      onError() {
        console.log("%cUsiario o contraseña incorrecta", "color:red;font-size:18px")
      }
    })
  }

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
                type="password"
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