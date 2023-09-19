import React from 'react'
import Head from 'next/head'
import Link from 'next/link';
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadMore from '@/components/Loadmore';
import FeaturedImage from '@/components/FeaturedImage';
import { getCategorySlugs } from '../../../lib/post';
import { getPostList } from '../../../lib/post';
import { getCategoryDetails } from '../../../lib/post';
import { useState } from 'react';
import Date from '@/components/date';


export async function getStaticPaths() {
  const categories = await getCategorySlugs();

  return{
    paths: categories.map((category) => (
      {
      params:{
        categoryName: category.slug
      }
    }
    )),
    fallback: false,
  }
}

export async function getStaticProps({params}) {
  const categoryPosts = await getPostList(null,{key:"categoryName", value: params.categoryName} );

  const categoryDetails = await getCategoryDetails(params.categoryName);

  return{
    props: {
      categoryPosts: categoryPosts,
      categoryDetails: categoryDetails,
    }
  }
}

export default function CategoryArchive({categoryPosts, categoryDetails}) {

  const [posts, setPosts] = useState(categoryPosts);

  return (
    <>
    <Header/>
    <Head>
        <title>{categoryDetails.name}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <div className="relative h-full bg-[url('/hero-image-3.jpg')] bg-center bg-no-repeat bg-cover">
        <div className=" absolute bg-slate-900 opacity-40 inset-0 z-0"> </div>
        <h1 className=" text-6xl text-center text-white relative z-10 py-8"> Category Archive: {categoryDetails.name} </h1>
        <p className="relative z-10 text-center text-white text-2xl"> Found {categoryDetails.count} posts</p>
      </div>
      <main>
        <section className="post-list mt-4">
          <div className=" container mx-auto lg:max-w-5xl">
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
            </div>
        </section>
      </main>
    <Footer/>
    </>
  )
}