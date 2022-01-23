import * as React from 'react'
import { Header } from 'components/layout/header'

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col max-w-screen-2xl mx-auto relative">
        {children}
      </div>
    </>
  )
}
