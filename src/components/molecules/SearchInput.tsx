import { RefObject, useRef } from "react";
import styled from "styled-components";
import Icon from "../atoms/Icon/Icon";
import Field from "../atoms/Inputs/TextField"

const SearchField = styled(Field)`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  width: 100%;
`

const FieldContainer = styled.div`
  display: flex;
  background-color: ${props => props.theme.white};
  border-radius: ${props => props.theme.rounded};
  justify-content: center;
  align-items: center;
  height: 2rem;
`

const IconButton = styled.button`
  align-items: center;
  border-radius: ${props => props.theme.rounded};
  display: flex;
  border: none;
  height: 2rem;
  justify-content: center;
  width: 2.5rem;
`

const Divider = styled.div<{direction: any}>`
  height: ${props => props.direction === 'vertical' ? '2px' : '75%' };
  width: ${props => props.direction === 'vertical' ? '75%' : '2px' };
  background-color: ${props => props.theme.gray};
`

const SearchInput = () => {
  return (
    <FieldContainer>
      <SearchField />
      <Divider direction={'horizontal'} />
      <IconButton>
        <Icon icon="bx bx-search"/>
      </IconButton>
    </FieldContainer>
  )
}

export default SearchInput;

interface InputWithButtonProps {
  icon: string
  action: (value: string) => void
}

export const InputWithButton = ({ icon, action }: InputWithButtonProps) => {
  const input = useRef<HTMLInputElement>()

  const clickButton = () => {
    const value = input.current?.value
    if(value) action(value)
  }

  return (
    <FieldContainer>
      <SearchField ref={ input as RefObject<HTMLInputElement> } />
      <Divider direction={'horizontal'} />
      <IconButton type="button" onClick={clickButton} >
        <Icon icon={ `bx bx-${ icon }` }/>
      </IconButton>
    </FieldContainer>
  )
}