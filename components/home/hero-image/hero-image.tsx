import Image from 'next/image'
import { useState, useEffect } from 'react'

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window
  return {
    width,
    height,
  }
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  )

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowDimensions
}

export function HeroImage() {
  const { width } = useWindowDimensions()

  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-gradient-to-l from-cyan-900 to-cyan-600" />
      <div className="absolute bottom-0 sm:hidden bg-gradient-to-t from-black to-transparent w-full h-1/2 opacity-50 z-10"></div>
      <div className="flex w-full h-160 xxs:h-192 xs:h-232 sm:h-160 lg:h-160 xl:h-172 2xl:h-192 3xl:h-224 max-w-screen-3xl  mx-auto flex-col sm:flex-row sm:items-stretch justify-end">
        <div className="absolute mx-auto left-0 right-0 xs:right-auto bottom-0 w-full sm:w-9/12 md:w-8/12 lg:w-7/12 h-full z-0 sm:-translate-x-36 md:-translate-x-16 lg:-translate-x-12 2xl:-translate-x-0">
          <div className="relative h-full">
            <Image
              alt="mentor and student"
              src="/images/graduate.png"
              layout="fill"
              objectFit={width < 640 ? 'cover' : 'contain'}
              priority
            />
          </div>
        </div>

        <div className="h-0 sm:flex justify-end 2xl:justify-center w-full 2xl:w-6/12 3xl:w-7/12 sm:h-full -translate-y-48 xxs:-translate-y-60 xs:-translate-y-72 sm:translate-y-0 text-white font-extrabold sm:font-normal lg:mr-8 z-20">
          <h1 className="font-bold sm:font-semibold mx-auto sm:mx-0 flex justify-center w-132 xxs:w-120 xs:w-144 sm:w-120 md:w-128 lg:w-168 xl:w-208 2xl:w-200 items-center text-7xl xxs:text-7xl xs:text-8xl sm:text-7xl lg:text-8xl xl:text-9xl 2xl:text-9xl pr-0 md:pr-8 lg:pr-0">
            Start your future today.
          </h1>
        </div>
      </div>
    </div>
  )
}
