import { ReactNode } from "react"
import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"
import Button, { ButtonsContainer } from "../atoms/Button/Button"
import { Title } from "../atoms/Title/Title"
import { Form, FormCard, FormWrapper } from "../molecules/Form"

interface FormStructureProps {
  methods: UseFormReturn<FieldValues, any>
  onFormSubmit: (values: any) => void
  children: ReactNode
  onSecondaryClick: () => void
  onMainClick: () => void
  titleForm: string
  mainButtonText: string
  secondaryButtonText: string
}

const FormStructure = ({ methods, onFormSubmit, children, onSecondaryClick, onMainClick, titleForm, mainButtonText, secondaryButtonText }: FormStructureProps) => {
  return (
    <FormWrapper>
      <Title>{titleForm}</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onFormSubmit)}>
          <FormCard>
            {children}
            <ButtonsContainer>
              <Button secondary onClick={onSecondaryClick}>
                {secondaryButtonText}
              </Button>
              <Button onClick={onMainClick}>
                {mainButtonText}
              </Button>
            </ButtonsContainer>
          </FormCard>
        </Form>
      </FormProvider>
    </FormWrapper>
  )
}

export default FormStructure;