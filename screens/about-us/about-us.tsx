import { WhyGYConsulting } from 'screens/about-us/why-gy-consulting/why-gy-consulting'
import { WhoWeAre } from 'screens/about-us/who-we-are/who-we-are'
import { HeroImage } from 'screens/about-us/hero-image/hero-image'
import { TheTeam } from './the-team.tsx/the-team'

export function AboutUsPage() {
  return (
    <div className="text-center">
      <HeroImage />

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}
