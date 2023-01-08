import styled from "styled-components";

export const Title = styled.h1`
  font-family: 'Monoton', cursive;
  font-size: 2.5rem;
  font-weight: 400;
  color: ${props => props.theme.white};
  letter-spacing: 0.08em;
  line-height: 1;
`

export const TitleContainer = styled.div` 
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 7rem;
`
