import 'boxicons/css/boxicons.min.css'
import styled from 'styled-components'

interface Props {
  icon: string
}

const I = styled.i`
  color: ${props => props.theme.gray};
  font-size: x-large;
  min-height: 1.5rem;
  min-width: 1.5rem;
`

const Icon = ({ icon }: Props) => {
  return (
    <I className={`${icon}`} />
  )
}

export default Icon;