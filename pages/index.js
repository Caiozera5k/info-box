import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Main from '../pages/components/Main'
import Main2 from '../pages/components/Main2'
import Footer from '../pages/components/Footer'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Info</title>
        <meta name='autor' content='Caio Brobim'></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main />
  
      <Main2 />

      <Footer />


    </div>
  )
}
