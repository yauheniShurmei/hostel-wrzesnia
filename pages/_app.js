import "../styles/globals.css";
import Layout from "../components/Layout/Layout";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Hostel Wrzesnia</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@200;300;600&display=swap"
          rel="stylesheet"
        />
        <meta
          name="description"
          content="Arkadia. Tanie noclegi. Pokoje gościnne Arkadia we Wrześni"
        />
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
