import { FormProvider, useForm } from "react-hook-form";
import Button, { ButtonsContainer } from "../../components/atoms/Button/Button";
import Field from "../../components/atoms/Inputs/TextField";
import Title from "../../components/atoms/Title/Title";
import { FormWrapper, FormCard, Form } from "../../components/molecules/Form";
import { login } from "../../services/auth.service";

interface LoginForm {
  username: string
  password: string
}

const Dashboard = () => {
  const methods = useForm<LoginForm>();

  const onSubmitForm = async (data: LoginForm) => {
    const tokend = await login(data)
    console.log("🚀 ~ file: Dashboard.tsx:18 ~ onSubmitForm ~ tokend", tokend)
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

export default Dashboard;