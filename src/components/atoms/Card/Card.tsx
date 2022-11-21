import styled from "styled-components";

const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.dark};
  border-radius: ${props => props.theme.rounded};
`

export default Card;