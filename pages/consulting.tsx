import { ContentContainerStyled } from 'components/common/content-container-styled'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown'
import { AiFillCaretUp } from '@react-icons/all-files/ai/AiFillCaretUp'

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  useAccordionContext,
  useAccordionItemContext,
} from '@reach/accordion'
import '@reach/accordion/styles.css'
import React from 'react'

function ItemContent({
  title,
  description,
}: {
  title: string
  description: string
}) {
  const itemContext = useAccordionItemContext()
  return (
    <>
      <h3 className="mb-4 text-4xl whitespace-nowrap hover:text-cyan-100">
        <AccordionButton className="flex items-end xs:tracking-wide sm:tracking-wider">
          {title}{' '}
          <span className="text-3xl ml-2 -translate-y-1">
            {itemContext.isExpanded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </AccordionButton>
      </h3>
      <AccordionPanel className="mb-12">{description}</AccordionPanel>
    </>
  )
}

function Strength({
  title,
  description,
}: {
  title: string
  description: string
}) {
  return (
    <AccordionItem
      key={title}
      className="flex flex-col items-start text-white border-b-1 mt-2"
    >
      <ItemContent title={title} description={description} />
    </AccordionItem>
  )
}

const strengths = [
  {
    title: 'Expertise and Experience',
    description:
      'Our consultants have over 50 years of collective experience in admissions consulting. We’ve helped students get admissions from the most selective universities like Harvard, Cornell, Columbia, NYU, U Penn, Carnegie Mellon, and more. ',
  },
  {
    title: 'Passion and Attention',
    description:
      'Our consultants only take on a select number of students every year. This allows us to get to know our students in depth and provide the personalized guidance they deserve. The passion that motivates our team comes from the hope of changing the world by helping our students become the best. We take pride in being there every step of the way to mentor, nurture, instill confidence, and ease the admissions process for our students.',
  },
  {
    title: 'Unique Process',
    description:
      'The Global Youth Initiative moves beyond helping students get good grades and test scores. Our process motivates students to find their identity and strengths through various community-building activities and service work, and instills a “compass” that compels them to make positive changes in the world. The holistic approach separates us from other admissions consulting firms, carefully considering the whole student and their goals.',
  },

  {
    title: 'Team Based Consulting',
    description:
      'Consultants and mentors work closely together to offer help in various angles. Group meetings are regularly held to review the progress of each student so that the student may benefit from the entire team. Mock admissions process will be conducted to realistically diagnose our applicants, and provide effective help and guidelines.',
  },
  {
    title: 'Accessibility',
    description:
      'We are available in-person, by phone, on Zoom, or on our website to offer seamless communication between parents, students, and our team so that we are on the same page throughout the entire admissions process.',
  },
]

export function ConsultingPage() {
  const context = useAccordionContext()

  console.log(context)

  return (
    <ContentContainerWithHeroImage
      src="/images/consulting.jpeg"
      mainHeading="Get Expert Preparation"
      subHeading=""
      src2="/images/college-building.jpeg"
      yScrollValueForSecondaryBackground={700}
    >
      {/* <h1 className="text-7xl w-full text-center my-152">Some Page Content!</h1> */}
      <ContentContainerStyled bgColor="white">
        <section className="max-w-screen-2xl">
          <SectionHeading color="blue" marginBottom="small">
            The Global Youth Initiative
          </SectionHeading>
          <div className="flex flex-col lg:flex-row p-4 xxs:p-12">
            <div className="relative lg:basis-full h-88 xxs:h-104 xs:h-120 sm:h-128 bg-gray-500 lg:h-120 xl:h-104 mb-12 lg:mb-0">
              <Image
                src="/images/happy-student.jpeg"
                layout="fill"
                objectFit="cover"
                objectPosition="right"
                alt="hands in"
              ></Image>
            </div>
            <div className="basis-full lg:ml-12">
              <h2 className="text-5xl mb-4">Cultivating Leadership</h2>
              <h3 className="text-3xl text-cyan-900 mb-8">
                Building hope for our future
              </h3>
              <p>
                Young students are the world’s most valuable assets that can
                make positive changes for a better world. GY Consulting offers
                students and parents in South Korea and around the world with
                unsurpassed admissions consulting services so that our students
                may, in fact, become “global youths”. Our mentors and
                consultants not only help students achieve their greatest
                potentials during high school, we also meticulously curate each
                student’s achievements and experiences to showcase their best
                selves.{' '}
              </p>
            </div>
          </div>
        </section>
      </ContentContainerStyled>

      <ContentContainerStyled bgColor="blue">
        <SectionHeading color="white" marginBottom="large">
          What separates GY from the competition?
        </SectionHeading>
        <Accordion className="px-4 xxs:px-12 max-w-screen-2xl w-full h-200 xxs: xs:h-168 sm:h-160 md:h-152 lg:h-144 xl:h-136 2xl:h-128">
          {strengths.map(strength => {
            return (
              <Strength
                key={strength.title}
                title={strength.title}
                description={strength.description}
              />
            )
          })}
        </Accordion>
      </ContentContainerStyled>
      <div className="w-full h-88 bg-transparent"></div>
      <ContentContainerStyled bgColor="white">
        <section></section>
      </ContentContainerStyled>
    </ContentContainerWithHeroImage>
  )
}

export default ConsultingPage
