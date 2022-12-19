import { FieldError } from "react-hook-form";
import styled from "styled-components";
interface FiedProps {
  error?: FieldError | undefined
}
const Field = styled.input<FiedProps>`
  background-color: ${props => props.theme.white};
  border: ${props => props.error ? `2px solid ${props.theme.red}` : 'none'};
  border-radius: ${props => props.theme.rounded};
  color: ${props => props.theme.gray};
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  height: 2rem;
  letter-spacing: 0.08em;
  padding: 0 .8rem;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
`

export default Field;