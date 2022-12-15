import { useState } from "react";
import FormToArtist from "./Form";
import ArtistTable from "./TableArtists";

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
  forPastMembers?: boolean
}

const ArtistForm = ({ artistList, sendArtist, forPastMembers }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const getValuesAndSend = (artist: ArtistFormI) => {
    sendArtist(artist)
    setShowForm(false)
  }

  return (
    (artistList.length > 0 && !showForm) ?
      <ArtistTable artistList={ artistList } setShowForm={ (show) => setShowForm(show) } />
      :
      <FormToArtist sendArtist={ getValuesAndSend } forPastMembers={ forPastMembers } />
  )
}

export default ArtistForm;