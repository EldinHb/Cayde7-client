import { Global, useTheme } from '@emotion/react'
import styled from '@emotion/styled'
import { Footer } from 'components/menu/footer'
import { Header } from 'components/menu/header'
import { Page } from 'components/page/page'
import type { AppProps } from 'next/app'
import { EmotionProvider } from 'styles/emotion'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <EmotionProvider>
        <GlobalStyles />
        <PageContainer>
          <Container>
            <Header />
            <Page>
              <Component {...pageProps} />
            </Page>
          </Container>
          <Footer />
        </PageContainer>
      </EmotionProvider>
    </>
  )
};

const PageContainer = styled.div(() => {
  return {
    minHeight: '100%'
  }
})

const Container = styled.div(() => {
  return {
    minHeight: '100vh',
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
        },
        '*': {
          transition: 'all 100ms',
          boxSizing: 'border-box',
          color: colorScheme === 'dark' ? colors.lightGray : colors.darkBlue,
          colorScheme: colorScheme
        },
        'a': {
          color: colors.primary,
          textDecoration: 'underline'
        }
      }}
    />
  )
}

export default MyApp
