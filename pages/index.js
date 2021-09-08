import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { client } from "../libs/client";

export default function Home() {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
    <section className={utilStyles.headingMd}>
    <p>Hey!My name Kaito.I am react beginner.</p>
    <p>
    (This is a sample website - you’ll be building a site like this on{' '}
    <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
    </p>
    </section>
    <ul>
    {blog.map((blog) => (
      <li key={blog.id}>
      <Link href={`/blog/${blog.id}`}>
      <a>{blog.title}</a>
      </Link>
      </li>
    ))}
    </ul>
    </Layout>
  )
}
// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "news" });

  return {
    props: {
      blog: data.contents,
    },
  };
};
