import styled from "styled-components"
import Card from "../atoms/Card/Card"
import Field from "../atoms/Inputs/TextField"

interface FormWrapperProps {
  maxWidth?: string
}

export const FormWrapper = styled.div<FormWrapperProps>`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: ${props => props.maxWidth?? '63rem'};
  width: 95%;
`

 export const Form = styled.form`
  width: 100%;
  max-width: 58rem;
  margin: 0 auto;
`

export const FormCard = styled(Card)`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 1rem;
` 

export const InnerForm = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.12rem;
  width: 49%;
  max-width: 24.3rem;
`

export const FieldsRow = styled.div`
  display: flex;
  column-gap: 1.5rem;
  width: 100%;

  ${ Field } {
    max-width: 14.75rem;
  }
`
