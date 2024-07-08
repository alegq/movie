// _app.tsx (или app.tsx)
import "@/app/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        {/*<link rel="icon" href="/logo.png" />*/}
        <title>Movie</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
