import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Analytics } from '@vercel/analytics/react';
import MouseContextProvider from '../context/mouse-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <MouseContextProvider>
    <Component {...pageProps} />
    <Analytics />
  </MouseContextProvider>
  )
}

export default MyApp
