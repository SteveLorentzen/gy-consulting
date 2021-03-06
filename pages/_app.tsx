import 'styles/globals.css'

import 'styles/hero-images.css'
import type { AppProps } from 'next/app'
import { Layout } from 'components/_app/layout/layout'

export function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
