import '../styles/root.css';
import '../styles/typography.css';
import '../styles/global.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Layout from '../lib/components/layout/layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <link rel="preconnect" href="https://stijndv.com" />
        <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      </Head>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
