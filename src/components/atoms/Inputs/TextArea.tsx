import styled from "styled-components";

const TextArea = styled.textarea`
  background-color: ${props => props.theme.white};
  border: none;
  border-radius: ${props => props.theme.rounded};
  color: ${props => props.theme.gray};
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  height: 100%;
  letter-spacing: 0.08em;
  padding: .3rem .8rem;
  width: 100%;

  &:focus-visible {
    outline: none;
  }
`

export default TextArea