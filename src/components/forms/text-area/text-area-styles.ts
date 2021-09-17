import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.textarea`
  ${({ theme }) => css`
    background-color: inherit;
    border: none;
    color: ${theme.colors.black};
    font-family: ${theme.font.mono};
    font-size: ${theme.font.sizes.lg};
  `}
`
