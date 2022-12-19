import { Controller, useFormContext } from "react-hook-form"
import CheckBox from "../../components/atoms/Inputs/Check"
import DateField from "../../components/atoms/Inputs/DateField"
import { ImagesField } from "../../components/atoms/Inputs/ImagesField"
import TextArea from "../../components/atoms/Inputs/TextArea"
import Field from "../../components/atoms/Inputs/TextField"
import { InnerForm, FieldsRow } from "../../components/molecules/Form"
import { InputWithButton } from "../../components/molecules/SearchInput"

export interface AddBandFormI {
  band: string
  origin: string
  tempStart: Date
  endTemp: Date
  present: boolean
  summary: string
}

const BandForm = () => {
  const { register, control, watch } = useFormContext<AddBandFormI>()

  const verifyGender = (value: string) => {
    console.log("🚀 ~ file: BandForm.tsx:23 ~ verifyGender ~ value", value)
  }
  return (
    <>
      <InnerForm>
        <Field
          {...register('band')}
          placeholder="Band name"
        />
        <Field
          {...register('origin')}
          placeholder="Origin"
        />
        <Controller
          name="tempStart"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              onChange={onChange}
              startDate={value ?? null}
              placeholder="Temp start"
              views={['year']}
            />
          )}
        />
        <FieldsRow>
          <Controller
            name="endTemp"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateField
                onChange={onChange}
                startDate={value ?? null}
                placeholder="Temp end"
                disable={watch('present', false)}
                views={['year']}
              />
            )}
          />
          <Controller
            name="present"
            control={control}
            render={({ field: { onChange, value } }) => (
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
          {...register('band')}
          placeholder="Summary"
        />
      </InnerForm>
      <InnerForm>
        <InputWithButton icon={"plus"} action={ verifyGender } />
      </InnerForm>
      <ImagesField textButton="Add Logo" />
      <ImagesField textButton="Add Images" multiple />
    </>
  )
}

export default BandForm;