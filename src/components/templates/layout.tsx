import type { NextPage } from 'next'
import type { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => (
  <div className="flex flex-col min-h-screen transition-colors duration-300 bg-steam-blue">
    <main className="container flex-grow px-4 mx-auto mb-auto lg:px-32">
      {children}
    </main>
  </div>
)

export default Layout
