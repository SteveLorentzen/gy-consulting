import { ContentContainerStyled } from 'components/common/content-container-styled'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { PictureWithHeadingAndText } from 'components/common/picture-with-heading-and-text'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'

export function AboutUsPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/graduation-caps.jpeg"
      mainHeading="Global Youth Consulting"
      subHeading=""
      className=""
    >
      <section className="flex flex-col items-center bg-white w-full">
        <ContentContainerStyled bgColor="white" padding="lg">
          <div className="max-w-screen-lg mx-4 xxs:mx-8 xs:mx-12 sm:mx-16">
            <SectionHeading color="blue" marginBottom="large">
              Our Mission
            </SectionHeading>
            <PictureWithHeadingAndText
              heading="Instilling integrity"
              objectPosition="center"
              src="/images/graduate-crowd.jpeg"
              style="top"
              subHeading="Creating compassion through competence"
            >
              GY Consulting is S. Korea&apos;s first and best Homestay-focused
              Educational Consulting Company. GY Consulting was founded in 2016
              in Jeju Island, South Korea. Our mentors live together with our
              students attending the international schools in the area, such as
              St. Johnsbury Academy Jeju and Korea International School Jeju. We
              have years of experience guiding students through the daily grind
              of school while providing insight and direction as they navigate
              through their college admissions journeys. In-depth knowledge of
              our students through co-living allows mentors to know exactly what
              to do to help students not only cherish their school experience,
              but thrive as scholars and global youths. Grounded in our beliefs
              that instilling integrity (through sharing life experiences and
              ethical compass), passion (for the joys of living each day to the
              fullest), and a sense of vocation (of what one must do in order to
              contribute to the greater global community), our team works
              tirelessly to ensure every student gains the skills and knowledge
              they need to be successful after high school.
            </PictureWithHeadingAndText>
          </div>
        </ContentContainerStyled>
        <ContentContainerStyled bgColor="blue" padding="lg">
          <SectionHeading color="white" marginBottom="large">
            Our Founder
          </SectionHeading>
          <div className="flex flex-col lg:flex-row max-w-screen-lg mx-8 xxs:mx-12 xs:mx-12 sm:mx-16 md:mx-32 lg:mx-16 items-center lg:items-start">
            <div className="basis-full text-white order-2 lg:orer-1">
              <h1 className="text-5xl mb-8">Guhn Kim</h1>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus nisi mollitia illum reiciendis debitis earum suscipit.
                Nisi, nam accusamus inventore enim dolorum esse placeat sed
                voluptatum maxime nobis! Quae, a. Lorem ipsum dolor, sit amet
                consectetur adipisicing elit. Itaque doloremque vero consectetur
                blanditiis fuga beatae hic saepe, earum tenetur rem quidem
                impedit esse molestias odit eum repellat sint asperiores
                architecto. Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Mollitia provident nobis rem, temporibus omnis cum facilis
                vero quibusdam maiores. Saepe in nulla voluptatibus officia!
                Labore iure animi sapiente sint consequatur!
              </p>
            </div>

            <div className="relative w-full xs:w-120 lg:w-auto basis-1/2 lg:basis-8/12 lg:ml-24 order-1 lg:order-2 mb-8 lg:mb-0">
              <Image
                src="/images/guhn-kim-cropped.jpg"
                alt=""
                layout="intrinsic"
                width={600}
                height={800}
              />
            </div>
          </div>
        </ContentContainerStyled>
      </section>
    </ContentContainerWithHeroImage>
  )
}

export default AboutUsPage
