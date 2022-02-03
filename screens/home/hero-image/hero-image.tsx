import Image from 'next/image'

export function HeroImage() {
  return (
    <div className="relative">
      <div className="flex w-full sm:h-144 lg:h-160 xl:h-172 2xl:h-184 flex-col sm:flex-row sm:items-stretch justify-end bg-gradient-to-l from-cyan-900 to-cyan-700">
        <div className="sm:absolute mx-auto right-0 xs:right-auto left-0 bottom-0 w-full sm:w-196 lg:w-216 xl:w-232 2xl:w-248 -translate-x-4 sm:-translate-x-36 md:-translate-x-24 lg:-translate-x-0">
          <Image
            alt="smiling business man"
            src="/images/mentor-and-student-pen-holder-brighter.png"
            width={1219}
            height={910}
            layout="responsive"
            priority
          />
        </div>

        <div className="h-0 sm:flex justify-end 2xl:justify-center w-full 2xl:w-7/12 sm:h-full -translate-y-40 xxs:-translate-y-48 xs:-translate-y-56 sm:translate-y-24 2xl:translate-y-0 text-white font-extrabold sm:font-normal lg:mr-8">
          <h1 className="font-bold sm:font-semibold mx-auto sm:mx-0 flex justify-center w-132 xxs:w-120 xs:w-144 sm:w-160 lg:w-200 2xl:w-200 items-center text-7xl xxs:text-7xl xs:text-8xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl">
            Start your future today.
          </h1>
        </div>
      </div>
    </div>
  )
}
