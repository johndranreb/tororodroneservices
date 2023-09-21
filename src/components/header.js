import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
  

<header className="absolute  h-18 mx-auto mb-10 lg:max-w bg-gray-700 sticky top-0 z-50 bg-opacity-70">
<div className="mx-auto text-xl font-bold">
  <div className="container mx-auto flex items-center h-24">
    <Link href="/" className="flex items-center justify-center">
    <Image src="/logo.png" alt="drone logo" width="50" height="50"/>
      <span className="ml-4 uppercase font-black">Tororo</span>
    </Link>
    <nav className="contents font-semibold text-base lg:text-lg">
      <ul className="mx-auto flex items-center text-white">
        <li className="p-5 xl:p-8 active">
          <Link href="/">
            <span>Home</span>
          </Link>
        </li>
        <li className="p-5 xl:p-8">
          <Link href="/blogs">
            <span>Blogs</span>
          </Link>
        </li>
        <li className="p-5 xl:p-8">
          <Link href="/about">
            <span>About</span>
          </Link>
        </li>
        <li className="p-5 xl:p-8">
          <Link href="/contact">
            <span>Contact us</span>
          </Link>
        </li>
      </ul>
    </nav>
    
  </div>
  </div>
</header>

  )
}

export default Header;


