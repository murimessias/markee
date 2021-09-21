import styled, { css, DefaultTheme } from 'styled-components/macro'

import { LogoProps } from './logo'

const wrapperModifiers = {
  light: (theme: DefaultTheme) => css`
    color: ${theme.colors.secondaryTextColor};
  `,

  dark: (theme: DefaultTheme) => css`
    color: ${theme.colors.black};
  `,
}

export const LogoWrapper = styled.div<LogoProps>`
  ${({ theme, version }) => css`
    width: 100%;
    height: 100%;
    ${!!version && wrapperModifiers[version](theme)}
  `}
`
