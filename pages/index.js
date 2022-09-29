import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'
export default function Home(products) {
  return (
    <div className='bg-gray-100'> 
    <Head>
      <title>Hala Market</title>
    </Head>
    <Header>
      
    </Header>

    <main className='max-w-screen-2xl mx-auto'>
      <Banner />
      <ProductFeed products={products}/>
    </main>

    </div>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
    },
  }
  
}