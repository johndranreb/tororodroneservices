import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

const index = () => {
  return (
    <>
    <Header/>
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <>
      <h1>Blog</h1>
      </>

  </main>
   <Footer/>
   </>
  )
}

export default index