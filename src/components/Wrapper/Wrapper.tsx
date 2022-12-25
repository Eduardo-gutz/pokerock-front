import { ReactNode } from "react";
import styled from "styled-components";
import NavBar from "../NavBar/NavBar";
import Container from "../atoms/Container/Container";
import useProtectRoutes from "../../hooks/UseProtectRoutes/UseProtectRoutes";
import { protectedRoutes } from "../../router/protectedRoutes";

interface Props {
  children: ReactNode
}

const Main = styled.main`
  background-color: ${props => props.theme.gray};
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 100vw;
  min-height: 100vh;
  width: 100vw;
`

const Wrapper = ({ children }: Props) => {
  useProtectRoutes(protectedRoutes)
  return (
    <Main>
      <NavBar />
      <Container>
        { children }
      </Container>
    </Main>
  )
}

export default Wrapper;