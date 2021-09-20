import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  button {
    align-items: center;
    border: none;
    cursor: pointer;
    display: inline-flex;
    font-family: inherit;
    font-size: inherit;
    justify-content: center;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      font-family: ${theme.font.sans};
      font-size: ${theme.font.sizes.md};
    }`
  }
`

export default GlobalStyle