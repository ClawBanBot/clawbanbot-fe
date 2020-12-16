import styled from 'styled-components'

const Title = styled.h1`
  font-size: 4rem;
  font-family: var(--font-family-main);
  color: var(--color-offwhite);
  margin-bottom: 2rem;
`

const TagLine = styled.h2`
  font-size: 2rem;
  font-family: var(--font-family-main);
  color: var(--color-offwhite);
  margin-bottom: 4rem;
`

const PantherContainer = styled.div`
  height: 8rem;
  width: 8rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`

export { Title, TagLine, PantherContainer }