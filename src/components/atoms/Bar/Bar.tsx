import styled from "styled-components";

const Bar = styled.div`
  width: 100%;
  height: 3.8rem;
  background: ${props => props.theme.dark};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`

export default Bar;