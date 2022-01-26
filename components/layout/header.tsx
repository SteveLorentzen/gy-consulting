import * as React from 'react'
import { Nav } from 'components/layout/nav'
import { useScrollYPosition } from 'react-use-scroll-position'

import { NavMobile } from './nav-mobile'

export const Header: React.FC = () => {
  const [headerOpacity, setHeaderOpacity] = React.useState(0)
  const yPosition = useScrollYPosition()

  React.useEffect(() => {
    if (yPosition < 501) {
      setHeaderOpacity(
        yPosition / 500 <= 0.1 ? yPosition / 500 - 0.1 : yPosition / 500,
      )
    } else if (yPosition >= 501 && headerOpacity !== 0.9) {
      setHeaderOpacity(0.9)
    }
  }, [yPosition, headerOpacity])

  return (
    <>
      <div className="fixed flex items-center w-full h-12 md:h-16 lg:h-20 z-40 ">
        <div
          style={{
            opacity: headerOpacity,
          }}
          className="absolute w-full h-full bg-cyan-900"
        ></div>
        <div className="flex justify-between items-stretch w-full px-4 sm:px-6 md:px-12">
          <h1 className="flex items-center font-bold text-white first-letter:sm:text-xl md:text-2xl lg:text-6xl font-semibold tracking-wider z-10">
            GY
          </h1>
          <Nav />
          <NavMobile />
        </div>
      </div>

      {/* A spacer with a height that matches the header's height.  This keeps contents from being hidden behind header*/}
      {/* <div className="h-12 md:h-16 lg:h-20"></div> */}
    </>
  )
}
