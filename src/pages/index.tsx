import type { NextPage } from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
  const switchTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme');
    if (theme && theme === 'dark-theme') {
      document.documentElement.setAttribute('data-theme', 'light-theme');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark-theme');
    }
  }

  return (
    <div>
      home
      <Link href={'/destinylogin'} >to bla</Link>
      <button onClick={switchTheme}>
        switch theme
      </button>
    </div>
  )
}

export default Home
