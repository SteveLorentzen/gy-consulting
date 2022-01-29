import { WhyGYConsulting } from 'screens/home/why-gy-consulting/why-gy-consulting'
import { WhoWeAre } from 'screens/home/who-we-are/who-we-are'
import { HeroImage } from 'screens/home/hero-image/hero-image'
import { TheTeam } from 'screens/home/the-team/the-team'

export function HomePage() {
  return (
    <div className="text-center text-xl">
      <HeroImage />

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}
