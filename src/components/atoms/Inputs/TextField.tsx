import styled from "styled-components";

const Field = styled.input`
  background-color: ${props => props.theme.white};
  border: none;
  border-radius: ${props => props.theme.rounded};
  color: ${props => props.theme.gray};
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 600;
  height: 2rem;
  letter-spacing: 0.08em;
  padding: 0 .8rem;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
`

export default Field;