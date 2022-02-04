import * as React from 'react'

import { Footer } from 'components/_app/layout/footer/footer'
import { Header } from 'components/_app/layout/header/header'

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <div className="flex flex-col  mx-auto relative">{children}</div>
      <Footer />
    </>
  )
}
