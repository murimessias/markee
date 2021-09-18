import styled, { css } from 'styled-components/macro'

type ButtonWrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: () => css`
    div {
      width: 1.5rem;

      & + span {
        margin-left: 0.8rem;
      }
    }
  `,
}

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  ${({ theme, hasIcon }) => css`
    background-color: ${theme.colors.primary};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.black};
    max-width: 40rem;
    padding: 1rem 2rem;
    transition: all 250ms ease-in-out;
    width: 100%;

    &:hover {
      filter: brightness(0.9);
    }

    &:active {
      filter: brightness(0.75);
    }

    ${!!hasIcon && wrapperModifiers.withIcon}
  `}
`
