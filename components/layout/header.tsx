import * as React from 'react'
import { Nav } from 'components/layout/nav'

import { NavMobile } from './nav-mobile'

export const Header: React.FC = () => {
  return (
    <>
      <div className="fixed flex items-center w-full bg-white border-b-4 h-12 md:h-16 lg:h-20 z-30">
        <div className="flex justify-between items-stretch w-full px-4 sm:px-6 md:px-12">
          <h1 className="flex items-center first-letter:sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
            <span className="text-green-600 font-bold">GY</span> Consulting
          </h1>
          <Nav />
          <NavMobile />
        </div>
      </div>

      {/* A spacer with a height that matches the header's height.  This keeps contents from being hidden behind header*/}
      <div className="h-12 md:h-16 lg:h-20"></div>
    </>
  )
}
