import React from 'react'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { getAllPosts } from '../../../lib/post'
import FeaturedImage from '@/components/FeaturedImage'
import Date from '@/components/date'




const inter = Inter({ subsets: ['latin'] })

export async function getStaticProps(){
  const allPosts = await getAllPosts();

  return{
    props: {
      allPosts: allPosts,
    },
  }
}

export default function BlogHome ({allPosts}) {
  return (
    <>
    <Header/>

      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="h-[50vh] min-h-[20rem] bg-[url('/hero-image-3.jpg')] relative bg-center bg-no-repeat bg-cover">
        <div className="absolute bg-slate-900 inset-0 z-0 opacity-30"></div>

      <h1 className="text-6xl text-center text-white relative z-10 py-8">Blog</h1>
      <p className=" relative z-10 text-center text-white text-2xl"> Read our latest article</p>

      </div>

      <main>
        <section className="container mx-auto lg:max-w-5xl post-list mt-4">
          <ul>
            {
              allPosts.nodes.map((post) =>
                <li key={post.slug} className="grid grid-cols-5 gap-4 mb-4">
                  <div className="col-span-2">
                    <FeaturedImage post = {post}></FeaturedImage>
                  </div>
                  <div className="col-span-3">
                    <h2 className="py-4">
                      <Link href={`/blogs/${post.slug}`} className="text-green-500 font-bold text-2xl hover:text-green-700">{post.title}</Link>
                    </h2>
                    <div className="py-4">
                      Published on <Date dateString={post.date} />
                    </div>

                    <div dangerouslySetInnerHTML={{__html: post.excerpt }} className="text-lg"></div>
                    <div className="py-4">
                      Posted under {
                        post.categories.nodes.map((category) =>(
                          <Link className="text-green-500 hover:text-green-700" href={`/category/${category.slug}`} key={category.slug}>{category.name}</Link>
                        ))
                      }
                    </div>
                  </div>
                </li>
              )
            }
          </ul>

        </section>
      </main>
   <Footer/>
   </>
  )
}
