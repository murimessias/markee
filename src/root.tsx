import { useTheme } from 'resources/hooks/use-theme'
import { ThemeProvider } from 'styled-components'

// Components
import { App } from './app'

// Styles
import GlobalStyle from 'resources/styles/global-styles'
import { darkTheme, lightTheme, ThemeButton } from 'resources/styles/themes'
import { LightIcon } from 'ui/icons'

const Root = () => {
  const { isDark, handleChangeTheme } = useTheme()

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <ThemeButton
        onClick={handleChangeTheme}
        aria-label='Mudar tema da aplicação'
        title='Mudar tema da aplicação'
      >
        <LightIcon />
      </ThemeButton>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  )
}

export { Root }
