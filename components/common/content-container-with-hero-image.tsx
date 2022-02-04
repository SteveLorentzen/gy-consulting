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
      <div className="fixed w-full h-152">
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt="seoul-national-university"
          className=""
        />
      </div>

      <section className="relative h-152">
        <div className="absolute w-full h-full bg-gradient-to-l from-cyan-900 to-cyan-700 opacity-90"></div>
        <div className="flex flex-col justify-center h-full items-center text-white p-8">
          <h1 className="z-10 flex flex-col justify-center text-center lg:whitespace-nowrap font-semibold lg:font-normal text-7xl md:text-8xl xl:text-9xl mb-4 lg:mb-8">
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