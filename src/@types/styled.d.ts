declare module 'styled-components' {
  export interface DefaultTheme {
    border: {
      radius: string
    }

    colors: {
      background: string
      backgroundBlack: string
      black: string
      gray: string
      lightBlack: string
      primary: string
      textColor: string
      secondaryTextColor: string
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
        '3xl': string
        '4xl': string
      }
    }
  }
}

export {}
