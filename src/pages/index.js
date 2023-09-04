import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<>
<Head>
	<title key="pagetitle">Tororo Drone Services</title>
	<meta name="description" content="Tororo Drone Services Blog" key="metadescription" />
</Head>

<div className="max-w-screen relative">
    
  <div className="absolute bg-slate-900 inset-0 z-0 bg-opacity-75 p-4"> </div>
  <header className="container mx-auto z-10 relative flex items-center justify-between">
    <div className="logo-area">
        <Link href="/" className="flex justify-center">
          <Image src="/logo.png" width="50" height="50"/>
        </Link>
    </div>
    <nav className="text-slate-100">
      <ul className="flex justify-center [&>li>a]:px-3 [&>li>a]:py-2 [&>li>a:hover]:text-green-500 [&>li>a]:transition text-xl">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/blogs">Blogs</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/contact">Contact us</Link></li>
      </ul>

    </nav>
  </header>

</div>


{/* <div class="absolute top-[0px] left-[0px] bg-gray-1000 w-full h-[100px] text-5xl bg-gray-200"
        />
        
          <div class="absolute top-[40px] left-[170px] w-56 h-[50px]">
            <div
              class="absolute top-[1px] left-[65px] font-extrabold inline-block w-[159px] h-[29px]"
            >
              Tororo
            </div>
            <div
              class="absolute top-[33px] left-[65px] text-xs font-semibold text-gray-400"
            >
              photo and video production
            </div>
            <div>
            <img
              class="absolute top-[0px] left-[0px] w-[50px] h-[50px] overflow-hidden"
              alt=""
              src="/logo.png"
            />
            </div>
            <header  className='container mx-auto z-10 relative flex items-center justify-center w-72 h-10'>
            <nav className="text-black-500">
              <ul  className="flex justify-between">
              <li> <Link href='/'>Home</Link></li>
                <li> <Link href='/blogs'>Blog</Link></li>
                <li> <Link href='/about'>About</Link></li>
                <li> <Link href='/contact'>Contact us</Link></li>
              </ul>
            </nav>
            </header>  
  </div> */}

  <main
      className={`/*flex min-h-screen flex-col items-center justify-between p-24*/ ${inter.className}`}
    >

<section
  class="relative bg-[url('/hero-image-1.jpg')] bg-cover bg-center bg-no-repeat bg-gray"
>
  <div
    class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div class="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 class="font-extrabold sm:text-5xl text-21xl text-green-500 text-left">
        TORORO

        <strong class="block font-extrabold ">
          Drone Services
        </strong>
      </h1>

      <p class="mt-4 max-w-lg sm:text-xl/relaxed text-left">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo
        tenetur fuga ducimus numquam ea!
      </p>

      <div class="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          class="block w-full rounded bg-green-600 px-8 py-3 text-sm font-medium text-white transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:bg-green-500 sm:w-auto"
        >
          Order Now
        </a>

        <a
          href="#"
          class="block w-full rounded border border-current px-8 py-3 text-sm font-medium text-green-600 transition hover:scale-110 hover:shadow-xl focus:outline-none focus:ring active:text-green-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>



      <Footer/>
    </main>
    </>
  )
}
