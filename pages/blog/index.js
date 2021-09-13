import Head from 'next/head'
import Link from 'next/link'
import Layout, { siteTitle } from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { client } from "../../libs/client";
import { getMenuData } from 'lib/api';

export async function getStaticProps() {
let menusData = {};
menusData = await getMenuData(); // 2.でgetMenuData()をapiファイルに記述
return {
    props: { props }
  };
}

export default function Home({ blog }) {
  return (
    <Layout home>
    <Head>
    <title>{siteTitle}</title>
    </Head>
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
