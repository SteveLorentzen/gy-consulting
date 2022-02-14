import * as React from 'react'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'
import { ContentContainerStyled } from 'components/common/content-container-styled'

type HomestayDetailProps = {
  title: string
  imageFocus:
    | 'left'
    | 'center'
    | 'left top'
    | 'right'
    | 'right top'
    | 'center top'
    | 'center bottom'
    | 'left bottom'
    | 'right bottom'
  description: string
  src: string
  imageSide: 'left' | 'right'
}

type ProgramDetailProps = {
  title: string
  description: string
  src: string
}

function HomestayDetail({
  title,
  description,
  src,
  imageSide,
  imageFocus,
}: HomestayDetailProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-144 text-2xl text-white">
      <div
        className={`relative w-full h-120 lg:h-full lg:w-1/2 ${
          imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt={title}
          objectPosition={imageFocus}
        />
      </div>
      <div
        className={`flex flex-col justify-center items-center px-12 ${
          imageSide === 'right' ? 'lg:items-end' : 'lg:items-start'
        } w-full py-24 lg:w-1/2 ${
          imageSide === 'left' ? 'lg:pl-24' : 'lg:pr-24'
        } ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="w-11/12 lg:w-104">
          <h3 className="text-4xl font-bold tracking-wider mb-8 lg:mb-4">
            {title}
          </h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}

function ProgramDetail({ src, title, description }: ProgramDetailProps) {
  return (
    <div className="flex flex-col w-full xs:w-144 md:w-152 xl:w-136 3xl:w-104  bg-gray-100 rounded-md overflow-hidden mx-4 xxs:mx-8 xs:mx-12 md:mx-12 3xl:mx-8 my-12">
      <div className="relative w-full h-88">
        <Image src={src} layout="fill" objectFit="cover" alt="" />
      </div>
      <h1 className="flex items-center justify-center w-full h-36 text-center text-cyan-900 font-bold text-3xl px-8">
        {title}
      </h1>
      <p className="px-8 pb-12">{description}</p>
    </div>
  )
}

const homestayDetails: HomestayDetailProps[] = [
  {
    title: 'Academic Progress',
    description:
      "Our in-house mentor will encourage students to follow a productive schedule, provide academic help when needed, and offer counseling to help your child stay on track.  Check your child's progress on our online dashboard.",
    src: '/images/students-studying.jpeg',
    imageSide: 'left',
    imageFocus: 'center',
  },
  {
    title: 'Meal Menus',
    description:
      'Delicious and nutritious meals will be the source of energy for optimal school life. Photos and menu charts will be updated weekly.',
    src: '/images/korean-meal.jpeg',
    imageSide: 'right',
    imageFocus: 'center',
  },
  {
    title: 'Weekly Activities',
    description:
      'GY homestay students have regular activities that boost physical and mental health.',
    src: '/images/yoga.jpeg',
    imageSide: 'left',
    imageFocus: 'center bottom',
  },
  {
    title: 'In-house College Consulting',
    description:
      'Our mentors and consultants will guide your child to do the right thing, at the right time to become competitive candidates for admission to top universities. ',
    src: '/images/tutor.jpeg',
    imageSide: 'right',
    imageFocus: 'center',
  },
]

const programDetails: ProgramDetailProps[] = [
  {
    title: 'Mentor Meetings',
    description:
      'We will get to know your child in a way no other consulting firms have. Constant interaction between the mentor and student is the key to cultivating a unique student identity with positive character, experience, and life goals that top universities desire in their applicants.',
    src: '/images/mentor-meeting.jpeg',
  },
  {
    title: 'Consultant Meetings',
    description:
      'Regular online and offline meetings between your child and consultant provides continuous help throughout their high school years. Each student is provided with all the necessary information to achieve their university admissions goals. ',
    src: '/images/consultant-discussion.jpeg',
  },
  {
    title: 'Diagnostics',
    description:
      'GY homestay mentors work with consultants to accurately evaluate your child. From academic performance to emotional and mental health, extensive diagnostics will be the groundwork for formulating optimal timelines/guidelines for your child to follow through with in order to thrive in school.',
    src: '/images/survey.jpeg',
  },
  {
    title: 'Recommended Classes/Activities',
    description:
      'Each student will be offered guidance according to their individual needs. Your child may take enrichment classes offered by GY teaching staff, or from other partner teachers that will be recommended by GY consultants. GY Homestay recommends after school and summer activities designed to shape your child’s strengths. Enjoy the numerous weekend activities led by the GY team.',
    src: '/images/high-school-tutor.jpeg',
  },
]

export function HomestayPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/homework-floor.jpeg"
      src2="/images/bunkbed-room.jpeg"
      yScrollValueForSecondaryBackground={700}
      mainHeading="Academic Homestay"
      subHeading=""
    >
      <ContentContainerStyled bgColor="white">
        <SectionHeading color="blue" marginBottom="large">
          Your Child Is In Good Hands
        </SectionHeading>
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center w-full lg:px-8">
          <div className="relative w-full h-120 mb-12 lg:pb-0 lg:w-136 lg:h-96 xl:w-160 xl:h-112">
            <Image
              src="/images/smiling-woman.jpeg"
              alt="friendly woman in living room"
              layout="fill"
              objectFit="cover"
              objectPosition="top right"
            />
          </div>

          <div className=" lg:pl-16 xl:pl-24 xxl:pl-32 px-16 w-full lg:w-160 xl:h-112">
            <h1 className="text-5xl mb-6 font-light">
              Stay with one of our Mentors
            </h1>
            <h2 className="text-3xl font-bold text-cyan-900 mb-6 tracking-widest">
              Leave your troubles behind
            </h2>
            <p className="">
              GY academic homestay combines exceptional consulting expertise
              with great home living. From homework guidance to weekend
              activities, rest assured that your child is having the best
              homestyle experience. Experienced mentors will live with them
              24/7, providing students with the academic, emotional, mental
              support and guidance that help students reach their full
              potential.
            </p>
          </div>
        </div>
      </ContentContainerStyled>
      <div className="relative h-88 w-full">
        <div className="absolute w-full h-full bg-cyan-900 opacity-50"></div>
      </div>
      <div className="flex flex-col items-center bg-white w-full">
        <ContentContainerStyled bgColor="white">
          <SectionHeading color="blue" marginBottom="small">
            Receive Weekly Updates
          </SectionHeading>
          <h2 className="relative text-4xl px-12 text-center">
            Easily access the latest information about your child&apos;s
            experience
          </h2>
        </ContentContainerStyled>

        <div className="w-full bg-cyan-800">
          {homestayDetails.map(homestayDetail => {
            return (
              <HomestayDetail
                key={homestayDetail.title}
                src={homestayDetail.src}
                imageSide={homestayDetail.imageSide}
                imageFocus={homestayDetail.imageFocus}
                description={homestayDetail.description}
                title={homestayDetail.title}
              />
            )
          })}
        </div>
      </div>
      <ContentContainerStyled bgColor="white">
        <SectionHeading color="blue" marginBottom="large">
          Academic Homestay Program
        </SectionHeading>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-3xl lg:max-w-screen-xl mb-12 mt-6 px-12 lg:px-0">
          <div className="flex flex-col w-full lg:w-2/5 order-2 lg:order-1">
            <h2 className="text-cyan-900 text-5xl tracking-wide font-light mb-6 lg:mb-8 lg:whitespace-nowrap ">
              Get a head start
            </h2>
            <p className="">
              Colleges consider all four years of high school grades, courses,
              activities, summer plans, and awards when reviewing student
              applications, so it is never too early to prepare. Start at GY
              Homestay and get a head start.
            </p>
          </div>

          <div className="relative w-full lg:w-5/12 lg:ml-12 xl:ml-16 2xl:ml-24 mb-12 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/images/college-lawn.jpeg"
              alt="friendly woman in living room"
              layout="responsive"
              width={300}
              height={200}
              className=""
            />
          </div>
        </div>

        <hr className="w-full max-w-screen-2xl mt-12 mb-4 h-2"></hr>

        <div className="flex flex-col lg:flex-row w-full max-w-3xl justify-center items-center lg:max-w-screen-xl py-8 px-12 lg:px-0">
          <div className=" flex flex-col w-full lg:w-2/5 order-2 lg:order-1 px-8 lg:px-0">
            <h2 className="text-cyan-900 text-5xl mb-6 lg:mb-8 tracking-wide font-light">
              Constant Communication
            </h2>
            <p className="w-full lg:w-136">
              At GY homestay, we emphasize communication between in-house
              mentors, academic consultants, and parents. We want to know our
              students’ personalities, interests, aspirations, and “all the
              little quirks” to best guide them during their most important high
              school years.
            </p>
          </div>
          <div className="relative w-full lg:w-5/12 h-full lg:ml-12 xl:ml-16 2xl:ml-24 mb-12 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/images/gy-consulting-diagram.png"
              alt="friendly woman in living room"
              layout="responsive"
              width={230}
              height={200}
              className=""
            />
          </div>
        </div>
      </ContentContainerStyled>

      {/* <div className="w-full bg-cyan-800">
        {programDetails.map(programDetail => {
          return (
            <HomestayDetail
              key={programDetail.title}
              src={programDetail.src}
              imageSide={programDetail.imageSide}
              description={programDetail.description}
              title={programDetail.title}
            />
          )
        })}
      </div> */}
      <ContentContainerStyled bgColor="blue">
        <SectionHeading color="white" marginBottom="medium">
          Our Process
        </SectionHeading>
        <div className="flex justify-evenly w-full flex-wrap md:px-12 3xl:px-8">
          {programDetails.map(programDetail => {
            return (
              <ProgramDetail
                key={programDetail.title}
                src={programDetail.src}
                title={programDetail.title}
                description={programDetail.description}
              />
            )
          })}
        </div>
      </ContentContainerStyled>
    </ContentContainerWithHeroImage>
  )
}

export default HomestayPage
