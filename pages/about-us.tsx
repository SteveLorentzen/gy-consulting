import { HeroImage } from 'components/hero-image'

import { TheTeam } from 'components/the-team'
import { WhoWeAre } from 'components/who-we-are'

import { WhyGYConsulting } from 'components/why-gy-consulting'
import Image from 'next/image'

export default function AboutUsPage() {
  return (
    <div className="text-center">
      {/* <HeroImage
        src="/images/hands.jpg"
        title="About Us"
        altText="team members place hands in for team cheer"
      /> */}

      <div className="relative bg-herotop overflow-hidden">
        <div className="absolute w-full h-full z-10  opacity-30" />
        <div className="w-full h-full flex flex-wrap items-center justify-center">
          <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mx-auto">
            <h1 className="flex items-center h-40 relative text-orange-50 z-10 m-12">
              Join us today. Make your future.
            </h1>
          </div>
          <div className="w-152 mx-auto ">
            <Image
              alt="business woman"
              src="/images/freckles.jpg"
              width={800}
              height={600}
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
