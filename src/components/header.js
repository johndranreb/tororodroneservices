import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const header = () => {
  return (
  

<header className="absolute  w-full mx-auto lg:max-w bg-gray-700 sticky top-0 z-50 bg-opacity-70">
<div class="mx-auto text-xl font-bold">

<nav class="border-gray-200 px-2 mb-10">
  <div class="container mx-auto flex flex-wrap items-center justify-between">
  <Link href="/" class="flex">
  <Image src="/logo.png" alt="drone logo" width="50" height="50"/>
      <span class="self-center text-xl font-bold whitespace-nowrap">Tororo</span>
  </Link>
  <div class="flex md:order-2">
      <div class="relative mr-3 md:mr-0 hidden md:block">
        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
        </div>
        <input type="text" id="email-adress-icon" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2" placeholder="Search..."/>
      </div>
      <button data-collapse-toggle="mobile-menu-3" type="button" class="md:hidden text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-3" aria-expanded="false">
      <span class="sr-only">Open main menu</span>
      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="hidden md:flex justify-between items-center w-full md:w-auto md:order-1" id="mobile-menu-3">
    <ul class="flex-col md:flex-row flex md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium">
      <li>
        <Link href="/" className="text-white hover:text-green-500 border-b border-gray-100 md:hover:bg-green md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-500 md:p-0" aria-current="page">Home</Link>
      </li>
      <li>
        <Link href="/blogs" className="text-white hover:text-green-500 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-500 md:p-0">Blogs</Link>
      </li>
      <li>
        <Link href="/about" className="text-white hover:text-green-500 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-500 md:p-0">About</Link>
      </li>
      <li>
        <Link href="/contact" className="text-white hover:text-green-500 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-green-500 md:p-0">Contact us</Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
</div>

</header>
  )
}

export default header


