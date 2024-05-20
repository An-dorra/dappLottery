import { AppProps } from 'next/app'
import '@/styles/global.css'
import Layout from '@/components/Layout'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
