import { ChangeEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";
import Button from "../Button/Button";

export const ImagesFieldContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 1.5rem 0;
  display: flex;
  gap: 3rem;
`

const ImagesNames = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: .8rem 1.25rem;
  color: ${props => props.theme.gray};
`

export const ImagesField = ({textButton}: any) => {
  const [ images, setImages ] = useState<File[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const saveImages = (ev: ChangeEvent<HTMLInputElement>) => {
    const files = ev.target.files
    if(files) {
      const filesArray = Object.values(files)
      setImages(filesArray)
    }
  }

  useEffect(() => {
    if(inputRef.current) {
      inputRef.current.onchange = saveImages as any
    }
  }, [])

  return (
    <ImagesFieldContainer>
      <Button type="button" onClick={() => inputRef.current?.click()}>
        { textButton }
      </Button>
      <input type="file" hidden ref={inputRef} multiple />
      <ImagesNames>
        {images.map((image) => (
          <p key={image.name}>{image.name}</p>
        ))}
      </ImagesNames>
    </ImagesFieldContainer>
  )
}
