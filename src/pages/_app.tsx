import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from 'styles/Global'
import theme from 'styles/theme'

interface CustomAppProps extends AppProps {}

function CustomApp({ Component, pageProps }: CustomAppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
    <GlobalStyle />
  </ThemeProvider>
}

export default CustomApp
