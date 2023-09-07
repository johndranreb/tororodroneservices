import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const header = () => {
  return (
  
      <header className="container mx-auto lg:max-w flex items-center justify-between bg-gray-600">
<div class="max-w-2xl mx-auto text-xl font-bold">
    
    <nav class="border-gray-200 py-4 space-x-4 text-2xl font-bold">
    <div class="container mx-auto flex flex-wrap items-center justify-between">
        
        <div className="logo-area">
         <Link href="/" className="flex justify-center mr-2">
     <Image src="/logo.png" alt="drone logo" width="50" height="50"/>
           </Link>
       </div>
       <a href="/" class="flex">
        
            <span class="self-center text-lg font-semibold mr-6 ">Tororo</span>
        </a>

        <button data-collapse-toggle="mobile-menu" type="button" class="md:hidden ml-3 text-gray-400 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded-lg inline-flex items-center justify-center" aria-controls="mobile-menu-2" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
        <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </button>
        <div class="hidden md:block w-full md:w-auto" id="mobile-menu">
        <ul class="flex-col md:flex-row flex justify-end md:space-x-8 mt-4 md:mt-0 md:text-sm md:font-medium lg:font-2xl">
        <li>
            <a href="/" class="text-green-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Home</a>
            </li>
            
            <li>
            <a href="/blogs" class="text-green-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Blogs</a>
            </li>
            <li>
            <a href="/about" class="text-green-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">About</a>
            </li>
            <li>
            <a href="/contact" class="text-green-500 hover:bg-gray-50 border-b border-gray-100 md:hover:bg-transparent md:border-0 block pl-3 pr-4 py-2 md:hover:text-white md:p-0">Contact us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
</div>

<script src="https://unpkg.com/@themesberg/flowbite@1.1.1/dist/flowbite.bundle.js"></script>
  </header>
  )
}

export default header


