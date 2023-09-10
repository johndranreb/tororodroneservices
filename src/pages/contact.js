import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Head from 'next/head'


const inter = Inter({ subsets: ['latin'] })

const contact = () => {
  return (
    <>
   
    <Head>
        <title>Contact</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header/>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <>
      <h1>Contact us</h1>
      </>

  </main>
   <Footer/>
    </>
  )
}

export default contact