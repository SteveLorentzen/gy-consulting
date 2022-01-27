import * as React from 'react'
import { useScrollYPosition } from 'react-use-scroll-position'

import { Nav } from 'screens/_app/layout/nav/nav'

import { NavMobile } from 'screens/_app/layout/nav-mobile/nav-mobile'

export const Header: React.FC = () => {
  const [headerOpacity, setHeaderOpacity] = React.useState(0)
  const yPosition = useScrollYPosition()

  React.useEffect(() => {
    const calculatedOpacity = yPosition / 500

    if (yPosition < 501) {
      setHeaderOpacity(calculatedOpacity)
    } else if (headerOpacity !== 1) {
      setHeaderOpacity(1)
    }
  }, [yPosition, headerOpacity])

  return (
    <>
      <div className="fixed flex items-center w-full h-20 z-50 ">
        <div
          style={{
            opacity: headerOpacity,
          }}
          className="absolute w-full h-full bg-cyan-800"
        ></div>
        <div className="flex justify-between items-stretch w-full px-4 sm:px-6 md:px-12">
          <h1 className="flex items-center  text-white text-5xl font-semibold tracking-wider z-10">
            GY
          </h1>
          <Nav />
          <NavMobile />
        </div>
      </div>
    </>
  )
}
