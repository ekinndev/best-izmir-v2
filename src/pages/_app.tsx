import '../styles/globals.scss';
import { Provider } from 'react-redux';
import { appWithTranslation } from 'next-i18next';
import { Provider as NProvider } from 'next-auth/client';
import store from '../store/store';
import Layout from '../components/Layout/Layout';
import type { AppProps } from 'next/app';
import { useEffect } from 'react';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  useEffect(() => {
    const handleTheme = (event: MediaQueryListEvent) => {
      console.log(event.matches);
    };

    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleTheme);

    return () => {
      window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change', handleTheme);
    };
  }, []);
  return (
    <NProvider session={session}>
      <Provider store={store}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </NProvider>
  );
}

export default appWithTranslation(MyApp);
