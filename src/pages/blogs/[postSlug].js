import React from "react";
import Head from "next/head";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getPostSlugs } from "../../../lib/post";
import { getSinglePost } from "../../../lib/post";
import Date from "@/components/date";

export async function getStaticProps({params}) {
  const postData = await getSinglePost(params.postSlug);

  //let featuredImageUrl = "http://tororo-drone-service.local/wp-content/uploads/2023/08/wp_dummy_content_generator_22.jpg";

  // if(postData.featuredImage.node.mediaDetials.sizes[0].sourceUrl) {
  //    featuredImageUrl = postData.featuredImage.node.mediaDetials.sizes[0].sourceUrl;
  // }

  return {
    props: {
      postData,
      //featuredImageUrl: "url(" + featuredImageUrl + ")",
    },
  };
}

export async function getStaticPaths() {
  const postSlugs = await getPostSlugs();

  return {
    paths: postSlugs.map((s) => ({
      params: {
        postSlug: s.slug,
      },
    })),
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <>
      <Header/>
      <Head>
        <title key={postData.slug}> {postData.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
        <meta
          name="description"
          content={postData.excerpt}
          key="metadescription"
        />
      </Head>
    <article>
      <section className="relative h-full bg-[url('/hero-image-3.jpg')] relative bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-slate-900 opacity-40"></div>

        <div className="container mx-auto h-full  flex flex-col justify-center lg:max-w-4xl">
          <h1 className="text-6xl text-center text-slate-100 relative z-10 py-8 mt-12">{postData.title}</h1>

          <div className=""> Posted by John Dranreb | Last updated on <Date dateString={postData.modified} /></div>
{/* 
          <div dangerouslySetInnerHTML={{__html: postData.excerpt}} className="relative z-10 text-left text-slate-200 text-2xl pl-4 border-l-4 border-green-500"/> */}

        </div>
      </section>

      <section className="content-area py-8">
        <div dangerouslySetInnerHTML={{__html:postData.content}} className="post-content container max-w-4xl mx-auto pl-4 border-l-4 border-green-500">
          
        </div>

      </section>
      </article>
      <Footer/>
    </>
  );
}
