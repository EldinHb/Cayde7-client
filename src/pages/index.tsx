import styled from '@emotion/styled';
import { HighlightedText } from 'components/text/highlightedText';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Container>
      <WelcomeText>Welcome to <HighlightedText>Cayde-7</HighlightedText></WelcomeText>
    </Container>
  )
}

const Container = styled.div(() => {
  return {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

const WelcomeText = styled.span(() => {
  return {
    fontSize: '1.875rem',
    fontWeight: 'bold'
  }
})

export default Home
