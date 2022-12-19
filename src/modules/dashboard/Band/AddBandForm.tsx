import { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import Button, { ButtonsContainer } from "../../../components/atoms/Button/Button";
import Title from "../../../components/atoms/Title/Title";
import { FormWrapper, Form, FormCard } from "../../../components/molecules/Form";
import AlbumForm, { AlbumFormI } from "../../components/Album/AlbumForm";
import ArtistForm, { ArtistFormI } from "../../components/Artists/ArtistForm";
import BandForm from "../../components/BandForm";

const AddBandForm = () => {
  const methods = useForm()
  const [ step, setStep ] = useState<number>(0)
  const [ members, setMembers ] = useState<ArtistFormI[]>([]);
  const [ membersPast, setMembersPast ] = useState<ArtistFormI[]>([]);

  const forms = useMemo<JSX.Element[]>(() => [
    <BandForm />,
    <ArtistForm artistList={members} sendArtist={(artist: ArtistFormI) => setMembers((past) => [...past, artist])} />,
    <ArtistForm forPastMembers artistList={membersPast} sendArtist={(artist: ArtistFormI) => setMembersPast((past) => [...past, artist])} />,
    <AlbumForm artistList={[]} sendArtist={function (artist: AlbumFormI): void {
      throw new Error("Function not implemented.");
    } } />
  ], [members, membersPast])

  const onSubmitForm = (data: any) => {
    console.log("🚀 ~ file: AddBandForm.tsx ~ line 61 ~ onSubmitForm ~ data", data)
  }

  const changeStep = (increase = true) => {
    const nextStep = step + 1
    const formsLength = forms.length

    if(increase && nextStep < formsLength) {
      setStep(nextStep)
    } else if(!increase && step > 0) {
      setStep(step - 1)
    }
  }

  return (
    <FormWrapper>
      <Title>Add a Band</Title>
      <FormProvider {...methods}>
        <Form onSubmit={methods.handleSubmit(onSubmitForm)}>
          <FormCard>
            { forms[step] }
            <ButtonsContainer>
              <Button secondary onClick={() => changeStep(false)}>
                Return
              </Button>
              <Button onClick={() => changeStep()}>
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