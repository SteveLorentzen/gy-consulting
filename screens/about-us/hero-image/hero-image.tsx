import Image from 'next/image'

export const HeroImage = () => {
  return (
    <div className="relative">
      <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-stretch justify-end bg-gradient-to-l from-cyan-900 to-cyan-700">
        <div className="w-full sm:w-full lg:w-7/12 xl:w-5/12 self-end sm:-translate-x-12 lg:translate-x-12">
          <div className="absolute bottom-0 w-full h-20 "></div>
          <Image
            alt="smiling business man"
            src="/images/handsome-man.png"
            width={800}
            height={650}
            layout="responsive"
            priority
          />
        </div>
        <div className="relative grow sm:z-0">
          <div className="flex justify-center h-0 sm:h-full -translate-y-12 sm:-translate-y-0 sm:-translate-x-24 lg:-translate-x-16 text-cyan-900 sm:text-white font-extrabold sm:font-normal ">
            <h1 className=" flex items-center text-4xl xs:text-5xl sm:text-7xl lg:text-8xl 2xl:text-9xl">
              Start your future today.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
