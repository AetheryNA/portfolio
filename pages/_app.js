import LayoutBase from '../src/layout/base'
import '../styles/styles.scss'

function MyApp({ Component, pageProps }) {
  const Layout = Component.layout || LayoutBase

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
