import * as React from 'react'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'
import { ContentContainerStyled } from 'components/common/content-container-styled'
import Head from 'next/head'
import { TextWithPicture } from '../components/common/text-with-picture'
import { TextWithPictureProps } from 'interfaces-and-types/common/interfaces-and-types-common'
import { PictureWithHeadingAndText } from 'components/common/picture-with-heading-and-text'
import { CallToActionBottom } from 'components/common/call-to-action-bottom'

type ProgramDetailProps = {
  title: string
  altText: string
  description: string
  src: string
}

function ProgramDetail({
  src,
  altText,
  title,
  description,
}: ProgramDetailProps) {
  return (
    <div className="flex flex-col lg:flex-row basis-full max-w-2xl lg:max-w-none bg-gray-100 rounded-md overflow-hidden mx-4 xs:mx-8 xxs:mx-8 my-12">
      <div className="relative w-full h-96 lg:h-136 xl:h-120  lg:basis-full">
        <Image src={src} layout="fill" objectFit="cover" alt={altText} />
      </div>
      <div className="lg:basis-full">
        <h3 className="flex items-center justify-center w-full h-36 text-center text-cyan-900 font-bold text-3xl px-12">
          {title}
        </h3>
        <p className="px-8 xs:px-12 lg:px-16 pb-12">{description}</p>
      </div>
    </div>
  )
}

function SmallerPictureWithHeadingAndText({
  heading,
  children,
  src,
  altText,
  isBlueBackground,
}: {
  heading: string
  children: React.ReactNode
  src: string
  altText: string
  isBlueBackground?: boolean
}) {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-3xl lg:max-w-screen-xl mb-12 mt-6 px-4 xxs:px-8 xs:px-12 lg:px-0">
      <div className="flex flex-col w-full lg:w-2/5 order-2 lg:order-1">
        <h3
          className={`${
            isBlueBackground ? 'text-white' : 'text-cyan-900'
          } text-5xl tracking-wide font-light mb-6 lg:mb-8  `}
        >
          {heading}
        </h3>
        <p className={`${isBlueBackground ? 'text-white' : ''}`}>{children}</p>
      </div>

      <div className="relative w-full lg:w-5/12 lg:ml-12 xl:ml-16 2xl:ml-24 mb-12 lg:mb-0 order-1 lg:order-2">
        <Image
          src={src}
          alt={altText}
          layout="responsive"
          width={300}
          height={200}
          className=""
        />
      </div>
    </section>
  )
}

const homestayDetails: TextWithPictureProps[] = [
  {
    title: 'Academic Progress',
    altText: 'Two female students examine a text book together in a library',
    children:
      "Our in-house mentor will encourage students to follow a productive schedule, provide academic help when needed, and offer counseling to help your child stay on track.  Check your child's progress on our online dashboard.",
    src: '/images/study-friends.jpg',
    imageSide: 'left',
    objectPosition: 'center',
    theme: 'blue',
  },
  {
    title: 'Meal Menus',
    altText: 'A healthy, tasty looking korean meal with many dishes',
    children:
      'Delicious and nutritious meals will be the source of energy for optimal school life. Photos and menu charts will be updated weekly.',
    src: '/images/korean-meal.jpg',
    imageSide: 'right',
    objectPosition: 'center',
    theme: 'blue',
  },
  {
    title: 'Weekly Activities',
    altText:
      'Two young women doing upward facing dog yoga pose in a pretty park with yoga mats on the grass',
    children:
      'GY homestay students have regular activities that boost physical and mental health.',
    src: '/images/yoga-park.jpg',
    imageSide: 'left',
    objectPosition: 'center bottom',
    theme: 'blue',
  },
  {
    title: 'In-house College Consulting',
    altText:
      'A mentor and a client examine a tablet together with smiles on their faces',
    children:
      'Our mentors and consultants will guide your child to do the right thing, at the right time to become competitive candidates for admission to top universities. ',
    src: '/images/consultant-meeting-smiling.jpg',
    imageSide: 'right',
    objectPosition: 'center',
    theme: 'blue',
  },
]

const programDetails: ProgramDetailProps[] = [
  {
    title: 'Mentor Meetings',
    altText:
      "Two young, happy women discuss a student's progress while sitting on a couch drinking coffee",
    description:
      'We will get to know your child in a way no other consulting firms have. Constant interaction between the mentor and student is the key to cultivating a unique student identity with positive character, experience, and life goals that top universities desire in their applicants.',
    src: '/images/couch-discussion.jpg',
  },
  {
    title: 'Consultant Meetings',
    altText: 'A consultant and client examine a document together on a tablet',
    description:
      'Regular online and offline meetings between your child and consultant provides continuous help throughout their high school years. Each student is provided with all the necessary information to achieve their university admissions goals. ',
    src: '/images/consultant-meetings.jpg',
  },
  {
    title: 'Diagnostics',
    altText: 'A closeup of a survey being filled out',
    description:
      'GY homestay mentors work with consultants to accurately evaluate your child. From academic performance to emotional and mental health, extensive diagnostics will be the groundwork for formulating optimal timelines/guidelines for your child to follow through with in order to thrive in school.',
    src: '/images/survey.jpg',
  },
  {
    title: 'Study Hall',
    altText: 'Two teenage boys study together at a table in a library',
    description:
      'Mentors not only provide students help with everyday homework, they also teach students “how to study”. Academic tools such as time management, note taking, organizing information, and maintaining focus are key skills that in-house mentors foster in our homestay students. At GY homestay, your child will become independent, motivated scholars with abilities for lifelong success.',
    src: '/images/study-hall.jpg',
  },
  {
    title: 'Recommended Classes/Activities',
    altText:
      'A mentor shows a smiling student how to solve a homework problem at a kitchen table',
    description:
      'Each student will be offered additional guidance according to their individual needs. Your child may take enrichment classes offered by GY teaching staff, or from other partner teachers that will be recommended by GY consultants. GY Homestay recommends after school and summer activities designed to shape your child’s strengths. Enjoy the numerous weekend activities led by the GY team.',
    src: '/images/recommended-activities.jpg',
  },
]

export function HomestayPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/comfy-studying.jpg"
      altText="A student comfortably lying on a couch reading and relaxing"
      mainHeading="Academic Homestay"
      subHeading=""
      className="homestay-hero"
    >
      <Head>
        <title>Academic Homestay</title>
        <meta
          name="description"
          content="Set up a homestay with an experienced host and inspiring mentor."
        />
      </Head>
      <ContentContainerStyled bgColor="white" padding="lg">
        <section className="flex flex-col items-center  max-w-screen-2xl px-4 xxs:px-12 ">
          <SectionHeading color="blue" marginBottom="medium">
            Your Child Is In Good Hands
          </SectionHeading>
          <p className="w-full mb-12">
            GY homestay has over 5 years experience living and working with
            international school students in Jeju, S. Korea. We are now offering
            the same premium homestay program to international school students
            in the Seoul-Incheon area.
          </p>
          <PictureWithHeadingAndText
            heading="Stay with one of our Mentors"
            altText="A portrait of a friendly and professional looking consultant"
            subHeading="Leave your troubles behind"
            objectPosition="center top"
            src="/images/friendly-mentor.jpg"
            style="side"
          >
            GY Academic Homestay combines exceptional college admissions
            consulting expertise with great home living. From homework guidance
            to weekend activities, rest assured that your child is having the
            best homestyle experience. Experienced mentors will live with them
            24/7, providing students with the academic, emotional, mental
            support and guidance that help students reach their full potential.
          </PictureWithHeadingAndText>
        </section>
      </ContentContainerStyled>
      {/* <div className="relative h-88 w-full">
        <div className="absolute w-full h-full bg-cyan-900 opacity-50"></div>
      </div> */}
      <ContentContainerStyled bgColor="blue" padding="lg">
        <section className="max-w-screen-2xl">
          <SmallerPictureWithHeadingAndText
            heading="Premium Comfort"
            src="/images/bunk-bed-room.jpg"
            altText="A cozy homestay room"
            isBlueBackground
          >
            GY Homestay rooms are spacious, cozy, and efficient. Each room is
            shared by two students. All you need to bring are your personal
            belongings and clothes. We provide the rest.
          </SmallerPictureWithHeadingAndText>
        </section>
      </ContentContainerStyled>
      <div className="flex flex-col items-center bg-white w-full">
        <ContentContainerStyled bgColor="white" padding="lg">
          <SectionHeading color="blue" marginBottom="small">
            Receive Weekly Updates
          </SectionHeading>
          <h3 className="relative text-4xl px-12 text-center">
            Easily access the latest information about your child&apos;s
            experience
          </h3>
        </ContentContainerStyled>

        <section className="w-full bg-cyan-800">
          {homestayDetails.map(homestayDetail => {
            return (
              <TextWithPicture
                key={homestayDetail.title}
                altText={homestayDetail.altText}
                src={homestayDetail.src}
                theme="blue"
                imageSide={homestayDetail.imageSide}
                objectPosition={homestayDetail.objectPosition}
                title={homestayDetail.title}
              >
                {homestayDetail.children}
              </TextWithPicture>
            )
          })}
        </section>
      </div>
      <ContentContainerStyled bgColor="white" padding="lg">
        <SectionHeading color="blue" marginBottom="large">
          Academic Homestay Program
        </SectionHeading>
        <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start max-w-3xl lg:max-w-screen-xl mb-12 mt-6 px-12 lg:px-0">
          <div className="flex flex-col w-full lg:w-2/5 order-2 lg:order-1">
            <h3 className="text-cyan-900 text-5xl tracking-wide font-light mb-6 lg:mb-8 lg:whitespace-nowrap ">
              Get a head start
            </h3>
            <p className="">
              Colleges consider all four years of high school grades, courses,
              activities, summer plans, and awards when reviewing student
              applications, so it is never too early to prepare. Start at GY
              Homestay and get a head start.
            </p>
          </div>

          <div className="relative w-full lg:w-5/12 lg:ml-12 xl:ml-16 2xl:ml-24 mb-12 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/images/graduate-clock.jpg"
              alt="An alarm clock next to a jar with two pencils.  One pencil has a mini graduation cap with tassle on it"
              layout="responsive"
              width={300}
              height={200}
              className=""
            />
          </div>
        </section>

        <hr className="w-full max-w-screen-2xl mt-12 mb-4 h-2"></hr>

        <section className="flex flex-col lg:flex-row w-full max-w-3xl justify-center items-center lg:max-w-screen-xl py-8 px-12 lg:px-0">
          <div className=" flex flex-col w-full lg:basis-2/5 order-2 lg:order-1">
            <h3 className="text-cyan-900 text-5xl mb-6 lg:mb-8 tracking-wide font-light">
              Frequent Communication
            </h3>
            <p className="w-full lg:w-136">
              At GY homestay, we emphasize communication between in-house
              mentors, academic consultants, and parents. We want to know our
              students’ personalities, interests, aspirations, and “all the
              little quirks” to best guide them during their most important high
              school years.
            </p>
          </div>
          <div className="relative w-full lg:basis-5/12 h-full lg:ml-12 xl:ml-16 2xl:ml-24 mb-12 lg:mb-0 order-1 lg:order-2">
            <Image
              src="/images/gy-consulting-diagram.png"
              alt="A triangular diagram illustrating close communication between a parent, mentor and consultant"
              layout="responsive"
              width={230}
              height={200}
              className=""
            />
          </div>
        </section>
      </ContentContainerStyled>

      <ContentContainerStyled bgColor="blue" padding="lg">
        <SectionHeading color="white" marginBottom="medium">
          Our Process
        </SectionHeading>
        <div className="flex lg:flex-col justify-center w-full flex-wrap md:px-12 3xl:px-8 max-w-screen-2xl">
          {programDetails.map(programDetail => {
            return (
              <ProgramDetail
                key={programDetail.title}
                altText={programDetail.altText}
                src={programDetail.src}
                title={programDetail.title}
                description={programDetail.description}
              />
            )
          })}
        </div>
        <div className="mt-12">
          <CallToActionBottom isBlueBackground />
        </div>
      </ContentContainerStyled>
    </ContentContainerWithHeroImage>
  )
}

export default HomestayPage
