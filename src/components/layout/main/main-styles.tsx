import styled, { css } from 'styled-components/macro'

export const MainWrapper = styled.main`
  ${({ theme }) => css`
    display: grid;
    grid:
      'sidebar content' 1fr
      / minmax(auto, 36rem) 1fr;
    min-height: 100vh;
    background-color: ${theme.colors.background};

    @media screen and (max-width: 768px) {
      grid:
        'sidebar' auto
        'content' 1fr
        / 100%;
    }
  `}
`
