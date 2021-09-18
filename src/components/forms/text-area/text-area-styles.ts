import styled, { css } from 'styled-components/macro'

export const TextAreaWrapper = styled.textarea`
  ${({ theme }) => css`
    background: transparent;
    border: none;
    color: ${theme.colors.black};
    font-family: ${theme.font.mono};
    font-size: ${theme.font.sizes.lg};
    resize: none;
  `}
`
