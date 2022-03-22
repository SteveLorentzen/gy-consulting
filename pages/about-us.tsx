import { CallToActionBottom } from 'components/common/call-to-action-bottom'
import { ContentContainerStyled } from 'components/common/content-container-styled'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { PictureWithHeadingAndText } from 'components/common/picture-with-heading-and-text'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'
import Head from 'next/head'

const guhnQualifications = [
  'M. A. in English Literature, Busan National University, Busan, South Korea',
  'B. A. in Music & CIS(Arts for Social Change), St. Olaf College, Minnesota, USA',
  '2021 Founded Global Youth Consulting',
  '2016 Founded Happy Boarding House (now Global Youth Consulting), Jeju, South Korea',
  '2007~2016 Director of Duke Academy, Busan, South Korea',
  '2010~2013 Assistant Professor of English, English Department, Republic of Korea Naval Academy, Jinhae, South Korea',
]

const teamMembers = [
  // {
  //   name: 'Guhn',
  //   src: '/images/team/',
  //   role: 'Founder',
  //   degrees: [
  //     'M.A. in English Literature, Busan National University, S. Korea',
  //     'B.A. St. Olaf College, US',
  //   ],
  // },
  {
    name: 'Sarah',
    src: '/images/team/sarah.jpg',
    role: 'Consultant',
    degrees: [
      'M.B.A. Harvard Business School, US',
      'B.A. Dartmouth College, US',
    ],
  },
  {
    name: 'Brandon',
    src: '/images/team/brandon.jpg',
    role: 'Consultant',
    degrees: ['Lambda School, US', 'B.A. Metropolitan State University, US'],
  },
  {
    name: 'Yujin',
    src: '/images/team/yujin.jpg',
    role: 'Mentor',
    degrees: [
      'M.F.A. in Visual Art, Columbia University, US',
      'B.F.A. in Fine Art, Cornell University, US',
    ],
  },
  {
    name: 'Ji Eun',
    src: '/images/team/ji-eun.jpg',
    role: 'Mentor',
    degrees: [
      'M.A. in Art Therapy Education, Ehwa Womans University, S. Korea',
      'B.F.A. in Fine Art, Cornell University, US',
    ],
  },
  {
    name: 'Seung Woong',
    src: '/images/team/seung-woong.jpg',
    role: 'Mentor',
    degrees: ['B.A. in Economics, Dong-Seo University, S. Korea'],
  },
]

function TeamMember({
  name,
  src,
  role,
  degrees,
}: {
  name: string
  src: string
  role: string
  degrees: string[]
}) {
  return (
    <div className="flex flex-col xs:flex-row justify-between max-w-md xs:max-w-screen-md basis-full xl:w-5/12 bg-gray-100 border-gray-200 mx-8 px-8 xs:px-12 py-8 mb-16 rounded-lg">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about the talented and experienced GY Consulting Team"
        />
      </Head>
      <div className="flex flex-col justify-between items-stretch basis-full order-2 xs:order-1">
        <div className="my-4 xs:my-0">
          <h3 className="text-4xl mb-3">{name}</h3>
          <h4 className="text-cyan-800 font-bold opacity-80 uppercase text-xl">
            {role}
          </h4>
        </div>
        <div>
          {degrees.map(degree => {
            return (
              <p key={degree} className="mt-4 xs:mt-2">
                {degree}
              </p>
            )
          })}
        </div>
      </div>
      <div className="flex flex-col justify-between basis-72 xs:basis-96 order-1 xs:order-2 ">
        <div className="relative basis-full xs:basis-1/3 xs:ml-12  ">
          <Image
            src={src}
            layout="responsive"
            width={250}
            height={350}
            alt="To be added"
          />
        </div>
      </div>
    </div>
  )
}

export function AboutUsPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/living-room.jpg"
      mainHeading="Global Youth Consulting"
      subHeading=""
      className="about-us-hero"
    >
      <section className="flex flex-col items-center bg-white w-full">
        <ContentContainerStyled bgColor="white" padding="md">
          <div>
            <p className="pb-12 border-b-1 text-3xl mx-6 sm:mx-8 md:mx-12 lg:mx-16 text-center">
              GY Consulting is S. Korea’s leading Homestay-focused Educational
              Consulting Company
            </p>
          </div>
          <div className="max-w-screen-lg mx-8 xxs:mx-12 sm:mx-16">
            <SectionHeading
              color="blue"
              marginBottom="large"
              marginTop="medium"
            >
              Our Mission
            </SectionHeading>
            <div className="mb-8">
              <PictureWithHeadingAndText
                heading="Instilling integrity"
                objectPosition="right"
                src="/images/compass.jpg"
                style="top"
                subHeading="Creating compassion through competence"
              >
                <div className=""></div>
                <p className="mb-6">
                  Since 2016, GY Consulting, formerly known as Happy Boarding
                  House, has been providing homestay service where mentors live
                  with students who attend the four international schools in
                  Jeju (St. Johnsbury Academy Jeju, Branksome Hall Asia, North
                  London Collegiate School Jeju, Korea International School
                  Jeju). Our mentors and consultants guide and support students
                  through their academic and daily grind of school and provide
                  further assistance in the college admissions process. The
                  co-living environment allows the mentors to provide hands-on
                  care for each of our students. GY Consulting aims to create an
                  atmosphere where students can fully focus on reaching their
                  academic goals.
                </p>

                <p className="mb-6">
                  Furthermore, GY Consulting believes in the importance of
                  integrity (through sharing life experiences and ethical
                  compass), passion (for the joys of living each day to the
                  fullest), and a sense of vocation (of what one must do in
                  order to contribute to the greater global community). With our
                  guidance, the students will gain the skills and knowledge they
                  need to be successful during and after high school.
                </p>

                <p className="">
                  The GY team has assisted numerous students to gain admissions
                  into prestigious universities such as Cornell, Duke, NYU,
                  UCLA, University of Pennsylvania, Carnegie Mellon, UNC-Chapel
                  Hill, Amherst College, Carleton College, Haverford College and
                  more.
                </p>
              </PictureWithHeadingAndText>
            </div>
          </div>
        </ContentContainerStyled>
        <ContentContainerStyled bgColor="blue" padding="lg">
          <SectionHeading color="white" marginBottom="large">
            Our Founder
          </SectionHeading>
          <div className="flex flex-col max-w-screen-lg mx-8 xxs:mx-12 xs:mx-12 sm:mx-16 md:mx-32 lg:mx-16">
            <div className="flex flex-col lg:flex-row  items-center lg:items-start">
              <div className="basis-full text-white order-2 lg:orer-1">
                <h1 className="text-5xl mb-8">Guhn Kim</h1>
                {guhnQualifications.map(qualification => {
                  return (
                    <p className="mb-6" key={qualification}>
                      {qualification}
                    </p>
                  )
                })}
              </div>

              <div className="relative w-full xs:w-120 lg:w-auto basis-1/2 lg:basis-11/12 lg:ml-24 order-1 lg:order-2 mb-8 lg:mb-0">
                <Image
                  src="/images/guhn-kim-cropped.jpg"
                  alt=""
                  layout="intrinsic"
                  width={600}
                  height={800}
                />
              </div>
            </div>
            <div className="text-white pt-6 lg:pt-4">
              <h2 className="mb-12 text-5xl">Lived experience</h2>
              <p className="pb-8">
                Guhn Kim knows first-hand how much of an impact homestay has on
                a student’s life. When he attended middle school in the United
                States, he stayed with a homestay family. The care and support
                he received from the homestay environment completely changed his
                life. His guardian, who was an educator herself, not only
                mentored Guhn on his social skills but also with his academics.
                Fueled by his own experience with homestay, he strives to be a
                mentor who fosters students’ goals that focus on helping others.{' '}
              </p>
              <p>
                As a co-founder of Duke Academy in Busan, he led a team of
                passionate teachers in educating elementary to high school
                students. He implemented project based learning approaches as
                the primary method of English instruction. Guhn also composed
                more than 50 children’s songs to engage students in learning
                English in creative ways. As an Assistant Professor in the
                English department at the prestigious ROK Naval Academy, he
                taught English as a Foreign Language and English Literature at
                university level. His wide-ranging experience working with
                students from elementary to university level is the foundation
                of his 15-year career as a teacher and a mentor.{' '}
              </p>
            </div>
          </div>
        </ContentContainerStyled>
        <ContentContainerStyled bgColor="white" padding="lg">
          <SectionHeading color="blue" marginBottom="large">
            The GY Team
          </SectionHeading>
          <div className="flex w-full flex-wrap justify-center xl:justify-around items-center xl:items-stretch max-w-screen-3xl ">
            {teamMembers.map(teamMember => {
              return (
                <TeamMember
                  key={teamMember.name}
                  degrees={teamMember.degrees}
                  name={teamMember.name}
                  role={teamMember.role}
                  src={teamMember.src}
                />
              )
            })}
          </div>
        </ContentContainerStyled>
        <ContentContainerStyled bgColor="blue" padding="lg">
          <CallToActionBottom isBlueBackground />
        </ContentContainerStyled>
      </section>
    </ContentContainerWithHeroImage>
  )
}

export default AboutUsPage
