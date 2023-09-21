import React from 'react'
import { Inter } from 'next/font/google'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import { getPostList } from '../../../lib/post'
import FeaturedImage from '@/components/FeaturedImage'
import Date from '@/components/date'
import LoadMore from '@/components/Loadmore'
import { useState } from 'react'


const inter = Inter({ subsets: ['latin'] })



export async function getStaticProps(){
  const allPosts = await getPostList();

  return{
    props: {
      allPosts: allPosts,
    },
  }
}

export default function BlogHome ({allPosts}) {

  const [posts, setPosts] = useState(allPosts);

  return (
    <>
    <Header/>

      <Head>
        <title>Blog</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="h-[70vh] ">
        <div className="h-[60vh] min-h-[30rem] absolute bg-slate-900 inset-0 z-0 bg-[url('/hero-image-3.jpg')] bg-center bg-no-repeat bg-cover"></div>

      <h1 className="text-6xl text-center font-bold relative z-10 py-8 pt-20">Blog</h1>
      <p className=" relative z-10 text-center font-bold text-2xl pb-20"> Read our latest article</p>

      </div>

      <main>
        <section className="container mx-auto lg:max-w-5xl post-list mt-4">
          <ul>
            {
              posts.nodes.map((post) =>
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
            <LoadMore posts={posts} setPosts={setPosts}/>
        </section>
      </main>
   <Footer/>
   </>
  )
}
