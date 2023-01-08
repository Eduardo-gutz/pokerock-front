import { useForm } from "react-hook-form";
import FormStructure from "../../../components/Forms/Form";
import BandForm from "../../components/BandForm";

const AddBandForm = () => {
  const methods = useForm()

  const onSubmitForm = (data: any) => {
    console.log("🚀 ~ file: AddBandForm.tsx ~ line 61 ~ onSubmitForm ~ data", data)
  }

  return (
    <FormStructure
      methods={methods}
      onFormSubmit={onSubmitForm}
      onSecondaryClick={() => null}
      onMainClick={() => null}
      titleForm={"Add a Band"}
      mainButtonText={"Save"}
      secondaryButtonText={"Cancel"}
    >
      <BandForm />
    </FormStructure>
  )
}

export default AddBandForm; 