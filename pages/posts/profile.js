import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function Profile() {
  return (
    <Layout>
    <Head>
    <title>Profile</title>
    </Head>
    <h1>Profile</h1>
    <h2>
    <Link href="/">
    <a>Back to home</a>
    </Link>
    </h2>
    </Layout>
  )
}
