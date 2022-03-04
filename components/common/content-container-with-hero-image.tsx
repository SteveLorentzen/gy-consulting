import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'

import { useScrollYPosition } from 'react-use-scroll-position'

type ContentContainerWithHeroImageProps = {
  mainHeading: string
  subHeading: string
  src: string
  src2?: string
  yScrollValueForSecondaryBackground?: number
  children: React.ReactNode
}

export function ContentContainerWithHeroImage({
  mainHeading,
  subHeading,
  src,
  src2,
  yScrollValueForSecondaryBackground,
  children,
}: ContentContainerWithHeroImageProps) {
  const [showSecondaryImage, setShowSecondaryImage] = React.useState(false)

  const yPosition = useScrollYPosition()

  React.useEffect(() => {
    if (
      src2 &&
      yScrollValueForSecondaryBackground &&
      yPosition > yScrollValueForSecondaryBackground
    ) {
      setShowSecondaryImage(true)
    } else {
      setShowSecondaryImage(false)
    }
  }, [yPosition, showSecondaryImage, yScrollValueForSecondaryBackground, src2])

  return (
    <>
      <div className="fixed w-full h-192 -z-20">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="seoul-national-university"
          className=""
        />
      </div>
      {src2 && yScrollValueForSecondaryBackground && (
        <div
          className={`fixed w-full h-screen ${
            showSecondaryImage ? '-z-10' : '-z-30'
          }`}
        >
          <Image
            src={src2}
            layout="fill"
            objectFit="cover"
            alt="seoul-national-university"
            className=""
          />
        </div>
      )}

      <section className="relative h-192">
        <div className="absolute w-full h-full bg-gradient-to-l from-cyan-900 to-cyan-700 opacity-70"></div>
        <div className="flex flex-col justify-center h-full items-center text-white p-8 ">
          <h1 className="z-10 flex flex-col justify-center text-center lg:whitespace-nowrap font-semibold lg:font-normal text-7xl md:text-8xl xl:text-9xl mb-4 lg:mb-8 xxs:px-16 animate-ascendsmall">
            {mainHeading}
          </h1>
          <h2 className="z-10 flex flex-col text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl max-w-xs xs:max-w-sm sm:max-w-md mx-4 md:max-w-lg lg:w-full">
            {subHeading}
          </h2>
          <div className="flex flex-col sm:flex-row items-center  z-10">
            <h2 className="flex items-center text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl max-w-xs xs:max-w-sm sm:max-w-md mx-4 md:max-w-lg lg:w-full">
              Get a Free Consultation today
            </h2>
            <Link href="/">
              <a className="flex items-center mt-4 sm:mt-0 py-4 px-8 bg-orange-400 hover:bg-orange-500 text-white rounded-md font-bold whitespace-nowrap">
                Free Consultation{' '}
              </a>
            </Link>
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center w-full h-full z-10 text-2xl">
        {children}
      </div>
    </>
  )
}
