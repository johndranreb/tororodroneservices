import React from "react";
import Head from "next/head";
import Header from "@/components/header";
import Footer from "@/components/footer";
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
      <section className="h-[70vh] ">
        <div className="absolute h-[60vh] min-h-[32rem] inset-0 bg-slate-900 opacity-70 bg-[url('/hero-image-3.jpg')] bg-center bg-no-repeat bg-cover"></div>

        <div className="container mx-auto h-full  flex flex-col justify-center lg:max-w-4xl">
          <h1 className="text-6xl text-center  relative font-bold py-8 mt-12">{postData.title}</h1>

          <div className="z-10"> Posted by John Dranreb | Last updated on <Date dateString={postData.modified} /></div>
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
