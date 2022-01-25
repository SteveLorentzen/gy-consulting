import * as React from 'react'
import { Header } from 'components/layout/header'
import { Footer } from './footer'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col  mx-auto relative">{children}</div>
      <Footer />
    </>
  )
}
