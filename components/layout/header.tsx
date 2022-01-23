import * as React from 'react'
import { Nav } from 'components/layout/nav'

import { NavMobile } from './nav-mobile'

export const Header: React.FC = () => {
  return (
    <>
      <div className="fixed flex items-center w-full bg-white border-b-2  h-12 md:h-16 lg:h-20 z-10">
        <div className="max-w-screen-2xl mx-auto flex justify-between items-stretch w-full px-4 sm:px-6 md:px-8">
          <div className="sm:text-xl md:text-2xl lg:text-3xl font-semibold tracking-wider">
            GY Consulting
          </div>
          <Nav />
          <NavMobile />
        </div>
      </div>

      {/* A spacer with a height that matches the header's height.  This keeps contents from being hidden behind header*/}
      <div className="h-12 md:h-16 lg:h-20"></div>
    </>
  )
}
