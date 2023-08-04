import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>استمتع</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title"تكدر تشوف افلام باعلى دقة" />
        <p className="description">
           <code>Movie4u</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
