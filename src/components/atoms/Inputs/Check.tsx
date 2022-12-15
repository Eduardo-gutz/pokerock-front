import styled from "styled-components";
import Field from "./TextField";
import imageRock from "../../../assets/images/rock_gesture_icon_154895.svg"

const Check = styled(Field)`
  width: 2rem;
  height: 2rem;
  border: none;
  appearance: none;
  &:checked {
    background: url(${imageRock}) center/90% no-repeat ${props => props.theme.gray};
  }
`

const CheckContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 7.6rem;
`

const CheckLabel = styled.label`
  text-transform: capitalize;
  color: ${props => props.theme.white};
  font-family: 'Red Hat Text', sans-serif;
  font-size: 1rem;
  font-weight: 600;
  letter-spacing: 0.08em;
`

const CheckBox = ({ label, name, onChange }: any) => {

  const changeSelect = (e: any) => {
    onChange(e.target.checked)
  }

  return (
    <CheckContainer>
      <Check type="checkbox" name={name} id={name} onChange={changeSelect} />
      <CheckLabel htmlFor={name}>
        { label }
      </CheckLabel>
    </CheckContainer>
  )
}

export default CheckBox;