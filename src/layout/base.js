import Head from 'next/head'

const base = ({ children }) => {
  return (
    <>
      <Head>
        <title> Naveed Ahamed &#10052;&#65039; </title>
        <link rel='icon' href='/images/favicon.ico' />
      </Head>

      <main className='portfolio-main'>
        { children }
      </main>
    </>
  )
}

export default base
