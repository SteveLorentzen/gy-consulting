import * as React from 'react'

import { Footer } from 'screens/_app/layout/footer/footer'
import { Header } from 'screens/_app/layout/header/header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col  mx-auto relative">{children}</div>
      <Footer />
    </>
  )
}
