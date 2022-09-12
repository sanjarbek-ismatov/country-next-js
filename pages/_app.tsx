import "../styles/globals.scss";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import Head from "next/head";
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Bosh sahifa</title>
        <link
          rel="shortcut icon"
          href="https://i.ibb.co/fvqt4T1/2947698-removebg-preview.png"
        />
        <meta name="title" content="Country Next js" />
        <meta
          name="description"
          content="Next js yordamida tuzilgan Country dasturi"
        />
        <meta name="keywords" content="country app, uz, Mamlakat" />
        <meta property="og:title" content="Country Next js" />
        <meta
          property="og:description"
          content="Next js yordamida tuzilgan Country dasturi"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/fvqt4T1/2947698-removebg-preview.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
