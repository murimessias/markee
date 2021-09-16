import styled, { css } from 'styled-components/macro'

type WrapperProps = {
  hasIcon: boolean
}

const wrapperModifiers = {
  withIcon: () => css`
     svg {
        width: 1.5rem;

        & + span {
          margin-left: .8rem;
        }
    }
  `,
}

export const Wrapper = styled.button<WrapperProps>`
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
