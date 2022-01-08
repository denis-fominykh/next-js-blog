import type { AppProps } from 'next/app';

import AppWrapper from '~/AppWrapper';
import NavBar from '~/components/NavBar';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppWrapper>
      <NavBar>
        <Component {...pageProps} />
      </NavBar>
    </AppWrapper>
  );
}

export default MyApp;
