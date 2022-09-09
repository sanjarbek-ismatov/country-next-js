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
          rel="stylesheet"
          href="https://i.ibb.co/fvqt4T1/2947698-removebg-preview.png"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
