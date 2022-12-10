import styled from "styled-components";

interface Props {
  secondary?: boolean
}

const Button = styled.button<Props>`
  width: 8.5rem;
  min-width: 7rem;
  height: 2.56rem;
  color: ${props => props.secondary ? props.theme.dark : props.theme.white};
  background-color: ${props => props.secondary ? props.theme.gray : props.theme.red};
  border: none;
  border-radius: 0.25rem;
  cursor: pointer;
`

export default Button;

export const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  margin-top: 1.5rem;
`