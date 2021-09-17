import styled from 'styled-components/macro'

export const Wrapper = styled.main`
  display: grid;
  grid:
    'sidebar content' 1fr
    / minmax(auto, 40rem) 1fr;
  min-height: 100vh;
`
