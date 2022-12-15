import { useState } from "react";
import FormToArtist from "./Form";
import ArtistTable from "./TableAlbum";

export interface TracklistI {
  version: string
  songs: {
    number: number
    name: string
    writers: string[]
    length: number
  }[]
}

export interface AlbumFormI {
  albumName: string
  relase: Date
  recorderStart: Date
  recorderEnd: Date
  studio: string
  producer: string
  label: string
  minutes: number
  seconds: number
  genres: string[]
  tracklist: TracklistI[]
  bref: string
}

interface Props {
  artistList: AlbumFormI[]
  sendArtist: (artist: AlbumFormI) => void
  forPastMembers?: boolean
}

const AlbumForm = ({ artistList, sendArtist, forPastMembers }: Props) => {
  const [showForm, setShowForm] = useState<boolean>(false)

  const getValuesAndSend = (artist: AlbumFormI) => {
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

export default AlbumForm;