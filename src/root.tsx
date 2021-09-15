import { ThemeProvider } from 'styled-components'
import { App } from './app'

// Styles
import { theme } from 'resources/theme'
import GlobalStyle from 'resources/globalStyles'

const Root = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
