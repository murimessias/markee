import styled, { css } from 'styled-components/macro'

export const Wrapper = styled.input`
  ${({ theme }) => css`
    align-items: center;
    border: none;
    background-color: inherit;
    display: flex;
    flex: 1;
    height: 100%;
    font-size: ${theme.font.sizes.lg};
    font-weight: ${theme.font.bold};
    width: 100%;
  `}
`
