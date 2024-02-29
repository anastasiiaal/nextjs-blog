import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Here are some things to say about me</p>
        <p>You can also visit another page by following <Link href="/posts/first-post">this link</Link> </p>
      </section>
    </Layout>
  );
}