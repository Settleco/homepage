import '../styles/globals.css'
import { motion } from 'framer-motion';
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Head from "next/head";

function MyApp({ Component, pageProps, router }) {
  return (
    <>
        <Head>
            <link href="https://api.fontshare.com/v2/css?f[]=general-sans@701,200,500,301,201,1,300,2,601,600,401,501,400,700&display=swap" rel="stylesheet"></link>
        </Head>
        <Navbar text=""/>
        <motion.div key={router.route} initial="pageInitial" animate="pageAnimate" variants={{
            pageInitial: {
                opacity: 0
            },
            pageAnimate: {
                opacity: 1
            },
        }}>
            <Component {...pageProps} />
        </motion.div>
        <Footer/>
    </>
  )
}

export default MyApp
