import styled, { css } from 'styled-components/macro'

export const ThemeButton = styled.button`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    bottom: 2.4rem;
    color: ${theme.colors.black};
    height: 4.2rem;
    right: 2.4rem;
    position: fixed;
    transition: all 250ms ease-in-out;
    width: 4.2rem;
    z-index: 10;

    &:hover {
      filter: contrast(0.6);
    }

    svg {
      width: 3.2rem;
      height: 3.2rem;
    }
  `}
`
