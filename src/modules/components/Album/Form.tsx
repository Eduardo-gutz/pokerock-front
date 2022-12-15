import { useEffect, useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button"
import CheckBox from "../../../components/atoms/Inputs/Check"
import DateField from "../../../components/atoms/Inputs/DateField"
import TextArea from "../../../components/atoms/Inputs/TextArea"
import Field from "../../../components/atoms/Inputs/TextField"
import Text from "../../../components/atoms/Text/Text"
import { InnerForm, FieldsRow } from "../../../components/molecules/Form"
import { AlbumFormI } from "./AlbumForm"

interface Props {
  sendArtist: (artist: AlbumFormI) => void
  forPastMembers?: boolean
}

const FormToArtist = ({ forPastMembers, sendArtist }: Props) => {
  const { register, control, getValues, reset } = useFormContext<AlbumFormI>()
  const [isDeath, setIsDeath] = useState<boolean>(false)

  // const getValuesAndSend = () => {
  //   const values = getValues()

  //   const artist: AlbumFormI = {
  //     name: values.name,
  //     artistName: values.artistName,
  //     birthDate: values.birthDate,
  //     deathDate: values.deathDate,
  //     causeDeath: values.causeDeath,
  //     startTemp: values.startTemp,
  //     endTemp: values.endTemp,
  //     roles: values.roles
  //   }
  //   sendArtist(artist)
  // }

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <>
      <InnerForm>
        <Field
          {...register('albumName')}
          placeholder="Album Name"
        />
        <FieldsRow>
          <Controller
            name="recorderStart"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateField
                onChange={onChange}
                startDate={value ?? null}
                placeholder="Start Recorder"
                views={['month', 'year']}
              />
            )}
          />
          <Text>To</Text>
          <Controller
            name="recorderEnd"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateField
                onChange={onChange}
                startDate={value ?? null}
                placeholder="Finish Recorder"
                views={['month', 'year']}
              />
            )}
          />
        </FieldsRow>
        <Field
          {...register('producer')}
          placeholder="Producer"
        />
        <FieldsRow>
          <Field
            {...register('minutes')}
            placeholder="Min"
            type="number"
          />
          <Text>Minutes</Text>
          <Field
            {...register('seconds')}
            placeholder="Sec"
            type="number"
          />
          <Text>Seconds</Text>
        </FieldsRow>
      </InnerForm>
      <InnerForm>
        <Controller
          name="relase"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              onChange={onChange}
              startDate={value ?? null}
              placeholder="Release"
            />
          )}
        />
        <Field
          {...register('studio')}
          placeholder="Studio"
        />
        <Field
          {...register('label')}
          placeholder="Label"
        />

      </InnerForm>
      <ButtonsContainer>
        <Button type="button">
          Save
        </Button>
      </ButtonsContainer>
    </>
  )
}

export default FormToArtist;