import { useEffect, useState } from "react"
import { Controller, useFormContext } from "react-hook-form"
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button"
import CheckBox from "../../../components/atoms/Inputs/Check"
import DateField from "../../../components/atoms/Inputs/DateField"
import TextArea from "../../../components/atoms/Inputs/TextArea"
import Field from "../../../components/atoms/Inputs/TextField"
import { InnerForm, FieldsRow } from "../../../components/molecules/Form"
import { ArtistFormI } from "./ArtistForm"

interface Props {
  sendArtist: (artist: ArtistFormI) => void
  forPastMembers?: boolean
}

const FormToArtist = ({ forPastMembers, sendArtist }: Props) => {
  const { register, control, getValues, reset } = useFormContext<ArtistFormI>()
  const [isDeath, setIsDeath] = useState<boolean>(false)

  const getValuesAndSend = () => {
    const values = getValues()

    const artist: ArtistFormI = {
      name: values.name,
      artistName: values.artistName,
      birthDate: values.birthDate,
      deathDate: values.deathDate,
      causeDeath: values.causeDeath,
      startTemp: values.startTemp,
      endTemp: values.endTemp,
      roles: values.roles
    }
    sendArtist(artist)
  }

  useEffect(() => {
    reset()
  }, [reset])

  return (
    <>
      <InnerForm>
        <Field
          {...register('artistName')}
          placeholder="Stage Name"
        />
        <Controller
          name="birthDate"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              onChange={onChange}
              startDate={value ?? null}
              placeholder="Birth Date"
            />
          )}
        />
        <Controller
          name="startTemp"
          control={control}
          render={({ field: { onChange, value } }) => (
            <DateField
              onChange={onChange}
              startDate={value ?? null}
              placeholder="Start in The Band"
              views={['year']}
            />
          )}
        />
        {forPastMembers &&
          <Controller
            name="endTemp"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DateField
                onChange={onChange}
                startDate={value ?? null}
                placeholder="End The Band"
                views={['year']}
              />
            )}
          />
        }
      </InnerForm>
      <InnerForm>
        <Field
          {...register('name')}
          placeholder="Name"
        />
        <Field
          {...register('roles')}
          placeholder="Roles"
        />
        <Field
          {...register('instruments')}
          placeholder="Instruments"
        />

      </InnerForm>
      <FieldsRow style={{ margin: '1.12rem 0' }}>
        <CheckBox
          onChange={() => setIsDeath(!isDeath)}
          label="Is Death"
        />
      </FieldsRow>
      {isDeath &&
        <>
          <InnerForm>
            <Controller
              name="deathDate"
              control={control}
              render={({ field: { onChange, value } }) => (
                <DateField
                  onChange={onChange}
                  startDate={value ?? null}
                  placeholder="Date of Death"
                />
              )}
            />
          </InnerForm>
          <InnerForm style={{ height: '5rem' }}>
            <TextArea
              {...register('causeDeath')}
              placeholder="Causes of Death"
              height="100%"
            />
          </InnerForm>
        </>
      }
      <ButtonsContainer>
        <Button type="button" onClick={getValuesAndSend}>
          Save
        </Button>
      </ButtonsContainer>
    </>
  )
}

export default FormToArtist;