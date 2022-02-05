import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

const base = ({ children }) => {
  return (
    <>
      <Head>
        <title> Naveed Ahamed </title>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <main className='portfolio-main'>
        <Header />
        { children }
        <Footer />
      </main>
    </>
  )
}

export default base
