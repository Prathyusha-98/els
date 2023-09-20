import type { AppProps } from 'next/app'
import Head from 'next/head';
import '../app/layout'
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>
        endless stories
      </title>
      <link rel="shortcut icon" href="/favicon.ico" style={{borderRadius: '100%'}} />
    </Head>
    <Component {...pageProps} />
    </>
  );
}