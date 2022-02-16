import { WhyGYConsulting } from 'components/home/why-gy-consulting/why-gy-consulting'
import { WhoWeAre } from 'components/home/who-we-are/who-we-are'
import { HeroImage } from 'components/home/hero-image/hero-image'
import { TheTeam } from 'components/home/the-team/the-team'
import Head from 'next/head'

export function HomePage() {
  return (
    <div className="text-center text-xl">
      <Head>
        <title>GY Consulting</title>
        <meta name="description" content="A descriptioon for this page" />
      </Head>
      <HeroImage />

      <WhoWeAre />

      <WhyGYConsulting />

      <TheTeam />
    </div>
  )
}

export default HomePage
