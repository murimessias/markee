import { ThemeProvider } from 'styled-components'
import { App } from './app'

// Styles
import { theme } from 'resources/styles/theme'
import GlobalStyle from 'resources/styles/global-styles'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
