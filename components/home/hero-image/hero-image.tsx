import Image from 'next/image'

export function HeroImage() {
  return (
    <div className="relative">
      <div className="absolute w-full h-full bg-gradient-to-l from-cyan-900 to-cyan-700" />
      <div className="absolute bottom-0 sm:hidden bg-gradient-to-t from-black to-transparent w-full h-1/2 opacity-50 z-10"></div>
      <div className="flex w-full h-120 sm:h-144 lg:h-160 xl:h-172 2xl:h-184 3xl:h-200 max-w-screen-3xl  mx-auto flex-col sm:flex-row sm:items-stretch justify-end">
        <div className="absolute mx-auto left-0 0 right-0 xs:right-auto bottom-0 w-full sm:w-9/12 md:w-3/5 h-full z-0">
          <Image
            alt="mentor and student"
            src="/images/graduate.png"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        <div className="h-0 sm:flex justify-end 2xl:justify-center w-full 2xl:w-7/12 sm:h-full -translate-y-40 xxs:-translate-y-44 xs:-translate-y-56 sm:translate-y-24 2xl:translate-y-12 text-white font-extrabold sm:font-normal lg:mr-8 z-20">
          <h1 className="font-bold sm:font-semibold mx-auto sm:mx-0 flex justify-center w-132 xxs:w-120 xs:w-144 sm:w-160 lg:w-200 2xl:w-200 items-center text-7xl xxs:text-7xl xs:text-8xl sm:text-8xl md:text-8xl lg:text-9xl xl:text-9xl 2xl:text-9xl">
            Start your future today.
          </h1>
        </div>
      </div>
    </div>
  )
}
