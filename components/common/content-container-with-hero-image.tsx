import Image from 'next/image'
import React from 'react'

import { useScrollYPosition } from 'react-use-scroll-position'
import { CallToAction } from 'components/common/call-to-action'

type ContentContainerWithHeroImageProps = {
  mainHeading: string
  subHeading: string
  src: string
  src2?: string
  yScrollValueForSecondaryBackground?: number
  children: React.ReactNode
  className: string
}

export function ContentContainerWithHeroImage({
  mainHeading,
  subHeading,
  src,
  src2,
  yScrollValueForSecondaryBackground,
  children,
  className,
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
      <div className="fixed w-full h-192 3xl:h-212 -z-20">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="seoul-national-university"
          className={className}
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

      <section className="relative h-192 3xl:h-212">
        <div className="absolute w-full h-full bg-gradient-to-l from-cyan-900 to-cyan-700 opacity-70"></div>
        <div className="flex flex-col justify-center h-full items-center text-white p-8 ">
          <h1 className="z-10 flex flex-col justify-center text-center lg:whitespace-nowrap font-semibold lg:font-normal text-7xl md:text-8xl xl:text-9xl mb-4 lg:mb-8 xxs:px-12 animate-ascendsmall">
            {mainHeading}
          </h1>
          <h2 className="z-10 flex flex-col text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl max-w-xs xs:max-w-sm sm:max-w-md mx-4 md:max-w-lg lg:w-full">
            {subHeading}
          </h2>
          <div className="flex flex-col sm:flex-row items-center h-24 sm:h-auto justify-between  z-10">
            <CallToAction text="Set up a free consultation today" />
          </div>
        </div>
      </section>

      <div className="flex flex-col items-center w-full h-full z-10 text-2xl">
        {children}
      </div>
    </>
  )
}
