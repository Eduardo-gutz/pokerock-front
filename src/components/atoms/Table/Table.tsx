import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-top: 2px solid ${props => props.theme.gray};
  color: ${props => props.theme.gray};
  border-collapse: collapse;
`

export const TRow = styled.tr`
  width: 100%;
  height: 2rem;
  border-bottom: 2px solid ${props => props.theme.gray};
  color: ${props => props.theme.gray};
`
export const THead = styled.th`
  min-width: 8rem;
  height: 2rem;
  text-align: left;
  color: ${props => props.theme.gray};
`

interface THeadProps {
  heads: string[]
}

export const THeaders = ({ heads }: THeadProps) => {
  return (
    <thead>
      <TRow>
        { heads.map((head) => <THead key={head}>{ head }</THead>) }
      </TRow>
    </thead>
  )
}