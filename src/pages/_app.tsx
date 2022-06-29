import '@fontsource/inter/300.css'
import '@fontsource/inter/400.css'
import '@fontsource/inter/700.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from 'src/components/templates/layout'
import 'src/styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
