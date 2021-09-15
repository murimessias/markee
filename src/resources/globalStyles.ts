import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    vertical-align: baseline;
  }

  html {
    font-size: 62.5%;
    min-height: 100vh;
  }

  body {
    font-family: 'DM Sans', sans-serif;
  }
`

export default GlobalStyle
