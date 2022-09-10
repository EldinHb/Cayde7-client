import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark-theme');
  }, [])

  return (
    <Component {...pageProps} />
  )
}

export default MyApp
