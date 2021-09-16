import styled, { css, DefaultTheme } from 'styled-components/macro'

import { LogoProps } from './logo'

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
  `,

  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
}

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, version }) => css`
      ${!!version && wrapperModifiers[version](theme)}
  `}
`
