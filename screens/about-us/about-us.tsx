import { ContentContainerWithHeroImage } from 'components/content-container-with-hero-image'

export function AboutUsPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/hands-in.jpeg"
      mainHeading="About Us"
      subHeading="Meet the Global Youth family"
    >
      <h1 className="text-9xl w-full text-center my-152">Some Page Content!</h1>
    </ContentContainerWithHeroImage>
  )
}
