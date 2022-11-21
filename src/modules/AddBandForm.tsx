import styled from "styled-components";
import Card from "../components/atoms/Card/Card";
import Title from "../components/atoms/Title/Title";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 63rem;
  width: 95%;
`

const Form = styled.form`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
`

const AddBandForm = () => {
  return (
    <FormWrapper>
      <Title>Add a Band</Title>
      <Form>
        <Card></Card>
      </Form>
    </FormWrapper>
  )
}

export default AddBandForm;