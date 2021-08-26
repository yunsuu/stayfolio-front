import Header from '../components/header';
import Cards from '../components/cards';
import Footer from '../components/footer';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>메인 페이지</title>
        <meta name="description" content="메인 페이지" />
      </Head>
      <Header />
      <Cards />
      <Footer />
    </>
  );
}
