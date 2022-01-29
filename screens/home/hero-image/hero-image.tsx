import Image from 'next/image'

export const HeroImage = () => {
  return (
    <div className="relative">
      <div className="w-full h-full flex flex-col sm:flex-row sm:items-stretch justify-start bg-gradient-to-l from-cyan-900 to-cyan-700">
        <div className="w-full sm:w-320 lg:w-7/12 xl:w-6/12 -translate-x-8 sm:-translate-x-24 lg:-translate-x-12 xl:translate-x-0">
          <div className="absolute bottom-0 w-full h-20"></div>
          <Image
            alt="smiling business man"
            src="/images/mentor-and-student-pen-holder-brighter.png"
            width={1219}
            height={910}
            layout="responsive"
            priority
          />
        </div>
        <div className="relative sm:z-0 ">
          <div className="flex justify-center h-0 w-10/12 mx-auto sm:h-full -translate-y-16 xxs:-translate-y-24 xs:-translate-y-32 sm:-translate-y-0 -translate-x-12 text-white font-extrabold sm:font-normal ">
            <h1 className=" flex items-center text-3xl xxs:text-4xl xs:text-6xl sm:text-6xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-9xl">
              Start your future today.
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
