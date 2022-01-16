import Head from 'next/head'
import Header from '../components/Header'

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
      </main>
    </>
  )
}

export default base
