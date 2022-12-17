import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/700.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import Layout from 'src/components/templates/Layout'
import 'src/styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
)

export default MyApp
