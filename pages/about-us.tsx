import { TheTeam } from 'components/the-team'
import { WhoWeAre } from 'components/who-we-are'

import { WhyGYConsulting } from 'components/why-gy-consulting'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="text-center">
      <div className="relative">
        {/* <div className="absolute w-full h-full z-10 opacity-30 " /> */}
        <div className="w-full h-full flex items-stretch justify-end border-b-2 border-cyan-800">
          <div className="grow bg-gradient-to-l from-cyan-100 to-cyan-200 ">
            <div className="flex justify-center h-full  text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl ml-20">
              <h1 className="flex text-center items-center relative text-cyan-900 ">
                Start your future today.
              </h1>
            </div>
          </div>

          <div className="w-full sm: md:w-7/12 lg:w-5/12 z-10 self-end">
            <Image
              alt="business woman"
              src="/images/friends-cyan-100.jpg"
              width={1500}
              height={1150}
              layout="responsive"
            />
          </div>
        </div>
      </div>

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}
