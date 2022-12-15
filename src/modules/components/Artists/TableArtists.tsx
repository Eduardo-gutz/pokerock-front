import { useEffect } from "react"
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button"
import { Table, THeaders, TRow } from "../../../components/atoms/Table/Table"
import useDate from "../../../hooks/useDate/UseDate"
import { ArtistFormI } from "./ArtistForm"

interface Props {
  artistList: ArtistFormI[]
  setShowForm: (show: boolean) => void
}

const ArtistTable = ({ artistList, setShowForm }: Props) => {
  const heads = [
    'Name',
    'Stage Name',
    'Birth Date',
    'Death Date',
    'Roles',
  ]
  
  return (
    <>
      <Table>
        <THeaders heads={heads} />
        <tbody>
          {artistList.map((artist) => <ArtistRow artist={artist} key={artist.name} />)}
        </tbody>
      </Table>
      <ButtonsContainer>
        <Button type="button" onClick={() => setShowForm(true)}>
          Add New
        </Button>
      </ButtonsContainer>
    </>
  )
}

export default ArtistTable;

const ArtistRow = (props: {artist: ArtistFormI}) => {
  const birthDate = useDate(new Date())
  const deathDate = useDate(new Date())

  const { artist } = props

  const getDateLabel = (date: any) => {
    console.log("🚀 ~ file: TableArtists.tsx:47 ~ getDateLabel ~ date", date)
    return `${date?.date} ${date?.month}, ${date?.year}`
  }

  useEffect(() => {
    birthDate.setDate(artist.birthDate)
    if(artist.deathDate) {
      deathDate.setDate(artist.deathDate)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <TRow>
      <td>{artist.name}</td>
      <td>{artist.artistName}</td>
      <td>{getDateLabel(birthDate.objectDate)}</td>
      <td>{artist.deathDate ? getDateLabel(deathDate.objectDate) : ''}</td>
      <td>{artist.roles}</td>
    </TRow>
  )
}