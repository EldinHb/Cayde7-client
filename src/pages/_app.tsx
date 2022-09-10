import { Header } from 'components/menu/header'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import '../styles/colors.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark-theme');
  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
