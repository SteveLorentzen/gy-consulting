import { TheTeam } from 'components/the-team'
import { WhoWeAre } from 'components/who-we-are'

import { WhyGYConsulting } from 'components/why-gy-consulting'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="text-center">
      <div className="relative">
        {/* <div className="absolute w-full h-full z-10 opacity-30 " /> */}
        <div className="w-full h-full flex flex-col sm:flex-row items-center sm:items-stretch justify-end bg-cyan-800">
          <div className="w-full md:w-9/12 lg:w-5/12 z-20 self-end sm:-translate-x-14 md:-translate-x-10 lg:translate-x-20">
            <Image
              alt="smiling business man"
              src="/images/handsome-man.png"
              width={900}
              height={600}
              layout="responsive"
            />
          </div>
          <div className="relative grow z-30 sm:z-0">
            <div className="flex justify-center h-0 sm:h-full -translate-y-6 sm:-translate-y-0 sm:-translate-x-24 lg:-translate-x-12 text-cyan-800 max-w-xs sm:max-w-none font-bold sm:font-normal sm:text-white text-xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl">
              <h1 className="flex text-center items-center relative  ">
                Start your future today.
              </h1>
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
