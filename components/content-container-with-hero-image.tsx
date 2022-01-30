import Image from 'next/image'

type ContentContainerWithHeroImageProps = {
  mainHeading: string
  subHeading: string
  src: string
  children: React.ReactNode
}

export function ContentContainerWithHeroImage({
  mainHeading,
  subHeading,
  src,
  children,
}: ContentContainerWithHeroImageProps) {
  return (
    <>
      <div className="fixed w-full h-72 sm:h-80 md:h-104 lg:h-120 xl:h-132 2xl:h-152">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="seoul-national-university"
          className=""
        />
      </div>

      <section className="relative h-72 sm:h-80 md:h-104 lg:h-120 xl:h-132 2xl:h-152">
        <div className="absolute w-full h-full bg-cyan-900 opacity-90"></div>
        <div className="flex flex-col justify-center h-full items-center text-white">
          <h1 className="z-10 flex flex-col justify-center whitespace-nowrap font-light text-7xl md:text-8xl xl:text-9xl mb-4 lg:mb-8">
            {mainHeading}
          </h1>
          <h2 className="z-10 flex flex-col text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl max-w-xs xs:max-w-sm sm:max-w-md mx-4 md:max-w-lg lg:w-full">
            {subHeading}
          </h2>
        </div>
      </section>

      <div className="relative w-full h-full bg-white z-10 pt-16 text-xl">
        {children}
      </div>
    </>
  )
}
