declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: string
    }

    colors: {
      black: string
      gray: string
      lightBlack: string
      primary: string
      white: string
    }

    font: {
      sans: string
      mono: string
      normal: number
      bold: number
      extrabold: number
      sizes: {
        xs: string
        sm: string
        md: string
        lg: string
        xl: string
        '2xl': string
      },
    },
  }
}

export {}
