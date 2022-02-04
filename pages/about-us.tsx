import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'

export function AboutUsPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/hands-in.jpeg"
      mainHeading="Global Youth Consulting"
      subHeading=""
    >
      <h1 className="text-7xl w-full text-center my-152">Some Page Content!</h1>
    </ContentContainerWithHeroImage>
  )
}

export default AboutUsPage
