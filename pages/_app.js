import '../styles/globals.css'
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Head>
          <link href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,1,300,2,601,600,401,501,400,700&display=swap" rel="stylesheet"></link>
        </Head>
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
