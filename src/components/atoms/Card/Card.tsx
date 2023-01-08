import styled from "styled-components";


const Card = styled.div`
  width: 100%;
  height: 100%;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.dark};
  border-radius: ${props => props.theme.rounded};
`

export const CardSmall = styled(Card)`
  width: 14rem;
  height: auto;
  padding: 2px;
  
  & img {
    height: 11.75rem;
    object-fit: contain;
  }
`

export const CardContent = styled.div`
  width: 14rem;
  padding: .5rem .25rem;
`

export default Card;