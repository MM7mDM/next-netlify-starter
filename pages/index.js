import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>M7Plus</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="اهلا بك في" />
        <p className="description">
           <code>M7Plus</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
