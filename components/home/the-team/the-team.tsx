import { Button } from 'components/common/button'
import { ContentContainerStyled } from 'components/common/content-container-styled'
import { PictureWithHeadingAndText } from 'components/common/picture-with-heading-and-text'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'
import { useRouter } from 'next/router'

export function TheTeam() {
  const router = useRouter()

  return (
    <ContentContainerStyled bgColor="white" padding="lg">
      <SectionHeading color="blue" marginBottom="large">
        Meet The Team
      </SectionHeading>
      <div className="max-w-screen-xl mx-12 sm:mx-24 md:mx-32 lg:mx-16 text-left">
        <PictureWithHeadingAndText
          heading="World Class"
          objectPosition="center"
          src="/images/hands-in.jpg"
          style="side"
          subHeading="Always ready to help"
        >
          <div>
            <p>
              Our exceptional team consists of highly qualified college
              consultants and mentors who work together seamlessly to offer
              premium services for your child. You can trust in our passion and
              experience.
            </p>
            <div className="flex  justify-center mt-8 w-full">
              <Button
                buttonText="Learn more about us"
                buttonAction={() => {
                  router.push('/about-us')
                }}
              />
            </div>
          </div>
        </PictureWithHeadingAndText>
      </div>
    </ContentContainerStyled>
  )
}
