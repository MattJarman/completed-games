import '@fontsource/nunito/300.css'
import '@fontsource/nunito/400.css'
import '@fontsource/nunito/700.css'
import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import 'src/styles/globals.css'

const MyApp: NextPage<AppProps> = ({ Component, pageProps }) => (
  <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-900">
    <main className="container flex-grow px-4 mx-auto mb-auto lg:px-32">
      <Component {...pageProps} />
    </main>
  </div>
)

export default MyApp
