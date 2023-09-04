import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

const index = () => {
  return (
    <main
    className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
  >
    <h1 className="text-4xl font-bold text-gray-900">Blog</h1>


    <Footer/>
  </main>
  )
}

export default index