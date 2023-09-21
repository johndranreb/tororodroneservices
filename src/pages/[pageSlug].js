import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'
import Header from '@/components/header'
import { getPageSlugs } from '../../lib/pages'
import { getSinglePage} from '../../lib/pages'

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage(params.pageSlug);

  return {
    props: {
      pageData,
    }
  }
}

export async function getStaticPaths() {
  const pageSlugs = await getPageSlugs();

  return {
    paths: pageSlugs.map((s) => ({
      params: {
        pageSlug: s.slug
      }
    })),
    fallback: false,
  }
}

export default function Page({ pageData }) {
  return (
    <div>
      <Head>
        <title>{pageData.title}</title>
        <link rel="icon" href="/favicon-32x32.png" />
      </Head>
      <Header/>
      <section className="content-area py-8">
        <article>
        <h1 className="text-6xl text-center text-slate-700 relative py-8">{pageData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: pageData.content }} className="post-content container mx-auto lg:max-w-4xl"/>
        </article>
      </section>
      <Footer/>
    </div>
  )
}
