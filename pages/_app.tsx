import '../styles/globals.css'
import type { AppProps } from 'next/app'
import MouseContextProvider from '../context/mouse-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MouseContextProvider>
    <Component {...pageProps} />
  </MouseContextProvider>
  )
}

export default MyApp
