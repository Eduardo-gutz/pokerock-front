import { Controller, FormProvider, useForm } from "react-hook-form";
import Button, { ButtonsContainer } from "../components/atoms/Button/Button";
import CheckBox from "../components/atoms/Inputs/Check";
import DateField from "../components/atoms/Inputs/DateField";
import { ImagesField } from "../components/atoms/Inputs/ImagesField";
import TextArea from "../components/atoms/Inputs/TextArea";
import Field from "../components/atoms/Inputs/TextField";
import Title from "../components/atoms/Title/Title";
import { FormWrapper, Form, FormCard, InnerForm, FieldsRow } from "../components/molecules/Form";

interface AddBandFormI {
  band: string
  origin: string
  tempStart: Date
  endTemp: Date
  present: boolean
  summary: string
}

const AddBandForm = () => {
  const methods = useForm<AddBandFormI>()

  const onSubmitForm = (data: any) => {
    console.log("🚀 ~ file: AddBandForm.tsx ~ line 61 ~ onSubmitForm ~ data", data)
  }

  return (
    <FormWrapper>
      <Title>Add a Band</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmitForm)}>
          <FormCard>
            <InnerForm>
              <Field
                {...methods.register('band')}
                placeholder="Band name"
              />
              <Field
                {...methods.register('origin')}
                placeholder="Origin"
              />
              <Controller
                  name="tempStart"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DateField
                      onChange={onChange}
                      startDate={value ?? null}
                      placeholder="Temp start"
                    />
                  )}
                />
              <FieldsRow>
                <Controller
                  name="endTemp"
                  control={methods.control}
                  render={({ field: { onChange, value } }) => (
                    <DateField
                      onChange={onChange}
                      startDate={value ?? null}
                      placeholder="Temp end"
                      disable={methods.watch('present', false)}
                    />
                  )}
                />
                <Controller
                  name="present"
                  control={methods.control}
                  render={({field: { onChange, value }}) => (
                    <CheckBox
                      onChange={onChange}
                      label="Present"
                    />
                  )}
                />
              </FieldsRow>
            </InnerForm>
            <InnerForm>
              <TextArea
                {...methods.register('band')}
                placeholder="Summary"
              />
            </InnerForm>
            <ImagesField textButton="Add Images" />
            <ButtonsContainer>
              <Button secondary >
                Cancel
              </Button>
              <Button>
                Continue
              </Button>
            </ButtonsContainer>
          </FormCard>
        </Form>
      </FormProvider>
    </FormWrapper>
  )
}

export default AddBandForm; 