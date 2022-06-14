import '@fontsource/inter/variable.css'
import 'normalize.css'
import 'the-new-css-reset/css/reset.css'
import '@wooorm/starry-night/style/core.css'
import '../styles/global.css'
import type { AppProps } from 'next/app'
import { SWRConfig } from 'swr'
import { fetcher } from '@lib/fetcher'
import { ThemeProvider } from 'contexts/theme'
import { Layout } from '@components/Layout'
import { NavBarProvider } from 'contexts/nav-bar'

function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fetcher }}>
      <ThemeProvider>
        <NavBarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </NavBarProvider>
      </ThemeProvider>
    </SWRConfig>
  )
}

export default App
