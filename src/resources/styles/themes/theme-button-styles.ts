import styled, { css } from 'styled-components/macro'

export const ThemeButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    bottom: 2.4rem;
    color: ${theme.colors.black};
    height: 4rem;
    right: 2.4rem;
    padding: 0.4rem;
    position: fixed;
    transition: all 250ms ease-in-out;
    width: 4rem;
    z-index: 10;

    &:hover {
      filter: contrast(0.6);
    }

    svg {
      width: 100%;
      height: 100%;
    }
  `}
`
