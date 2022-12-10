import { Fragment, useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import Button, { ButtonsContainer } from "../../components/atoms/Button/Button";
import DateField from "../../components/atoms/Inputs/DateField";
import TextArea from "../../components/atoms/Inputs/TextArea";
import Field from "../../components/atoms/Inputs/TextField";
import { Table, THeaders, TRow } from "../../components/atoms/Table/Table";
import { InnerForm } from "../../components/molecules/Form";

export interface ArtistFormI {
  name: string
  artistName: string
  birthDate: Date
  deathDate: Date | null
  causeDeath: string
  startTemp: Date | null
  endTemp: Date | null
  instruments?: string,
  roles: string,
  mainBand?: boolean | null,
}

interface Props {
  artistList: ArtistFormI[]
  sendArtist: (artist: ArtistFormI) => void
}

const ArtistForm = ({ artistList, sendArtist }: Props) => {
  const { register, control, getValues } = useFormContext<ArtistFormI>()
  const [ showForm, setShowForm ] = useState<boolean>(false)
  const heads = [
    'Name',
    'Stage Name',
    'Birth Date',
    'Death Date',
    'Roles',
  ]

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
    setShowForm(false)
  }

  const getRow = (artist: ArtistFormI) => {
    return (
      <TRow key={artist.name}>
        <td>{ artist.name }</td>
        <td>{ artist.artistName }</td>
        <td>{ artist.birthDate?.toString() }</td>
        <td>{ artist.deathDate?.toString() }</td>
        <td>{ artist.roles }</td>
      </TRow>
    )
  }

  return (
    artistList.length > 0 && !showForm ?
      <>
        <Table>
          <THeaders heads={heads} />
          <tbody>
            { artistList.map((artist) => getRow(artist)) }
          </tbody>
        </Table>
        <ButtonsContainer>
          <Button type="button" onClick={() => setShowForm(true)}>
            Add New
          </Button>
        </ButtonsContainer>
      </>
    :
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
          <TextArea
            {...register('causeDeath')}
            placeholder="Causes of Death"
            height="45%"
          />
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
        </InnerForm>
        <ButtonsContainer>
          <Button type="button" onClick={getValuesAndSend}>
            Save
          </Button>
        </ButtonsContainer>
      </>
  )
}

export default ArtistForm;