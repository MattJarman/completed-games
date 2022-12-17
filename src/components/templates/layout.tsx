import type { NextPage } from 'next'
import type { PropsWithChildren } from 'react'

const Layout: NextPage<PropsWithChildren> = ({ children }) => (
  <div className="flex flex-col min-h-screen transition-colors duration-300 bg-gray-900">
    <main className="container flex-grow px-4 mx-auto mb-auto lg:px-32">
      {children}
    </main>
  </div>
)

export default Layout
