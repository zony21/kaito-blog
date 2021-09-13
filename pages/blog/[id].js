import { client } from "../../libs/client";
import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function BlogId({ blog }) {
  return (
    <Layout>
    <Head>
    <title>{blog.title}</title>
    </Head>
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.publishedAt}</p>
      <p className="category">{blog.category && `${blog.category.name}`}</p>
      <div
        dangerouslySetInnerHTML={{
          __html: `${blog.content}`,
        }}
      />
    </main>
    </Layout>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "news" });

  const paths = data.contents.map((content) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "news", contentId: id });

  return {
    props: {
      blog: data,
    },
  };
};
