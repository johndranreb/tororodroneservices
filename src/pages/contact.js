import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'


const inter = Inter({ subsets: ['latin'] })

const contact = () => {
  return (
    <>
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