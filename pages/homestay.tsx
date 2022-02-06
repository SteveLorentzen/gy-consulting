import * as React from 'react'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'

type HomestayDetailProps = {
  title: string
  description: string
  src: string
  imageSide: 'left' | 'right'
}

function HomestayDetail({
  title,
  description,
  src,
  imageSide,
}: HomestayDetailProps) {
  return (
    <div className="flex flex-col lg:flex-row w-full lg:h-144 text-2xl text-white">
      <div
        className={`relative w-full h-120 lg:h-full lg:w-1/2 ${
          imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <Image src={src} layout="fill" objectFit="cover" alt="" />
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

const homestayDetails: HomestayDetailProps[] = [
  {
    title: 'Academic Progress',
    description:
      "Our in-house mentor will encourage students to follow a productive schedule, provide academic help when needed, and offer counseling to help your child stay on track.  Check your child's progress on our online dashboard.",
    src: '/images/students-studying.jpeg',
    imageSide: 'left',
  },
  {
    title: 'Meal Menus',
    description:
      'Delicious and nutritious meals will be the source of energy for optimal school life. Photos and menu charts will be updated weekly.',
    src: '/images/vegetables.jpeg',
    imageSide: 'right',
  },
  {
    title: 'Weekly Activities',
    description:
      'GY homestay students have regular activities that boost physical and mental health.',
    src: '/images/hiking.jpeg',
    imageSide: 'left',
  },
  {
    title: 'In-house College Consulting',
    description:
      'Our mentors and consultants will guide your child to do the right thing, at the right time to become competitive candidates for admission to top universities. ',
    src: '/images/tutor.jpeg',
    imageSide: 'right',
  },
]

export function HomestayPage() {
  return (
    <ContentContainerWithHeroImage
      src="/images/homework-floor.jpeg"
      src2="/images/bunkbed-room.jpeg"
      yScrollValueForSecondaryBackground={600}
      mainHeading="Academic Homestay"
      subHeading=""
    >
      <div className="flex flex-col items-center py-20 bg-white w-full">
        <SectionHeading color="blue">
          Your Child Is In Good Hands
        </SectionHeading>
        <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center w-full lg:px-8">
          <div className="relative w-full h-120 mb-12 lg:pb-0 lg:w-136 lg:h-96 xl:w-160 xl:h-112">
            <Image
              src="/images/smiling-woman.jpeg"
              alt="friendly woman in living room"
              layout="fill"
              objectFit="cover"
              objectPosition="right"
            />
          </div>

          <div className=" lg:pl-16 px-16 w-full lg:w-160 xl:h-112">
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
      </div>
      <div className="relative h-88 w-full">
        <div className="absolute w-full h-full bg-cyan-900 opacity-50"></div>
      </div>
      <section className="flex flex-col items-center w-full bg-white">
        <div className="flex flex-col items-center w-full py-24 text-cyan-900">
          <h2 className="relative text-6xl mb-8 lg:mb-4 text-center">
            Receive Weekly Updates
          </h2>
          <h2 className="relative text-4xl px-12 text-center">
            Easily access the latest information about your child&apos;s
            experience
          </h2>
        </div>

        <div className="w-full bg-cyan-800">
          {homestayDetails.map(homestayDetail => {
            return (
              <HomestayDetail
                key={homestayDetail.title}
                src={homestayDetail.src}
                imageSide={homestayDetail.imageSide}
                description={homestayDetail.description}
                title={homestayDetail.title}
              />
            )
          })}
        </div>
      </section>
    </ContentContainerWithHeroImage>
  )
}

export default HomestayPage
