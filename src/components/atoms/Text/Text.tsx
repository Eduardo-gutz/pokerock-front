import styled from "styled-components";

const Text = styled.p`
  font-family: 'Red Hat Text', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  color: ${props => props.theme.white};
  display: flex;
  align-items: center;
`

export default Text;