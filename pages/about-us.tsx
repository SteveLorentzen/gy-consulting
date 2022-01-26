import { TheTeam } from 'components/the-team'
import { WhoWeAre } from 'components/who-we-are'

import { WhyGYConsulting } from 'components/why-gy-consulting'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="text-center">
      <div className="relative">
        <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-stretch justify-end bg-gradient-to-l from-cyan-900 to-cyan-700">
          <div className="w-full sm:w-full lg:w-7/12 xl:w-5/12 self-end sm:-translate-x-16 md:-translate-x-20 lg:translate-x-6 xl:translate-x-20">
            <div className="absolute bottom-0 w-full h-20 "></div>
            <Image
              alt="smiling business man"
              src="/images/handsome-man.png"
              width={800}
              height={650}
              layout="responsive"
            />
          </div>
          <div className="relative grow sm:z-0">
            <div className="flex justify-center h-0 sm:h-full -translate-y-8 xs:-translate-y-12 sm:-translate-y-0 sm:-translate-x-24 lg:-translate-x-12 text-cyan-900 sm:text-white font-extrabold sm:font-normal text-xl xxs:text-2xl xs:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              <h1 className=" flex items-center ">Start your future today.</h1>
              <div className="flex">
                <button className="enroll"></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}
