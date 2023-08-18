import Layout from '@/pages/layout'
import '@/styles/globals.css'
import '@/styles/layout.scss'

export default function App({ Component, pageProps }) {
  return <Layout><Component {...pageProps} /></Layout>
}
