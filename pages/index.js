import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

export default function Home() {
  return (
    <div className={styles.container}>
    <Head>
      <title>Hala Market</title>
    </Head>
    <Header></Header>
    </div>
  )
}
