import { Global, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Footer } from 'components/menu/footer'
import { Header } from 'components/menu/header'
import type { AppProps } from 'next/app'
import { EmotionProvider } from 'styles/emotion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <EmotionProvider>
      <GlobalStyles />
      <PageContainer>
        <Container>
          <Header />
          <Component {...pageProps} />
        </Container>
        <Footer />
      </PageContainer>
    </EmotionProvider>
  )
};

const PageContainer = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '100%'
  }
})

const Container = styled.div(() => {
  return {
    height: '100%',
    flex: '1',
    display: 'flex',
    flexDirection: 'column'
  }
})

const GlobalStyles = () => {
  const { colorScheme, colors } = useTheme();

  return (
    <Global
      styles={{
        'html,body': {
          backgroundColor: colorScheme === 'dark' ? colors.darkBlue : 'white',
          padding: 0,
          margin: 0,
          fontFamily: `-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif`,
          height: '100%',
          minHeight: '100%',
          width: '100%'
        },
        '#__next': {
          height: '100%',
          minHeight: '100%'
        },
        '*': {
          transition: 'all 100ms',
          boxSizing: 'border-box',
          color: colorScheme === 'dark' ? colors.lightGray : colors.darkBlue,
          colorScheme: colorScheme
        },
        'a': {
          color: 'inherit',
          textDecoration: 'none'
        }
      }}
    />
  )
}

export default MyApp
