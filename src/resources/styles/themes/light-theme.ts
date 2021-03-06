import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  border: {
    radius: '0.4rem',
  },

  colors: {
    background: '#FAFAFA',
    backgroundBlack: '#1E293B',
    black: '#1E293B',
    gray: '#E4E5E7',
    lightBlack: '#293445',
    primary: '#1FC8E1',
    textColor: '#1E293B',
    secondaryTextColor: '#FAFAFA',
  },

  font: {
    sans: '"DM Sans", sans-serif',
    mono: 'Inconsolata, Consolas, monospace',
    normal: 400,
    bold: 500,
    extrabold: 700,
    sizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2.0rem',
      '2xl': '2.8rem',
      '3xl': '3.2rem',
      '4xl': '4rem',
    },
  },
}
