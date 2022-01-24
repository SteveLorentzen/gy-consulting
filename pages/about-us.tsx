import { HeroImage } from 'components/hero-image'

import { TheTeam } from 'components/the-team'
import { WhoWeAre } from 'components/who-we-are'

import { WhyGYConsulting } from 'components/why-gy-consulting'

export default function AboutUsPage() {
  return (
    <div className="text-center">
      <div className="max-w-screen-2xl mx-auto">
        <HeroImage
          src="/images/hands.jpg"
          title="About Us"
          altText="team members place hands in for team cheer"
        />
      </div>

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}
