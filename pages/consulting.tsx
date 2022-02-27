import { ContentContainerStyled } from 'components/common/content-container-styled'
import { ContentContainerWithHeroImage } from 'components/common/content-container-with-hero-image'
import { SectionHeading } from 'components/common/section-heading'
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown'
import { AiFillCaretUp } from '@react-icons/all-files/ai/AiFillCaretUp'
import { TextWithPictureProps } from '../interfaces-and-types/common/interfaces-and-types-common'
import { PictureWithHeadingAndText } from 'components/common/picture-with-heading-and-text'

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
import { TextWithPicture } from 'components/common/text-with-picture'

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
      <h3 className="mb-4 text-4xl whitespace-nowrap ">
        <AccordionButton className="flex items-end xs:tracking-wide sm:tracking-wider">
          {title}{' '}
          <span className="text-3xl ml-2 -translate-y-1">
            {itemContext.isExpanded ? <AiFillCaretUp /> : <AiFillCaretDown />}
          </span>
        </AccordionButton>
      </h3>
      <AccordionPanel className="mb-12 animate-ascend">
        {description}
      </AccordionPanel>
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

const services: TextWithPictureProps[] = [
  {
    title: 'GY Academic Homestay Consulting',
    description:
      'GY Consulting is the only educational consulting company in South Korea where mentors live with students in homestay settings to offer personalized, 24/7, premium consultation. If your child is attending an international school in the Seoul-Incheon area and interested in our Academic Homestay, click here and find out more about our excellent homestay consulting.',
    src: '/images/friends-studying.jpeg',
    imageSide: 'right',
    objectPosition: 'center',
    theme: 'blue',
  },
  {
    title: 'GY University Admissions Consulting',
    description:
      'Students who are planning to apply to universities in the US gain incredible strategies and insights on preparing for college admissions. Our expert team guides you throughout your high school years so that you can be confident about your academic and college admissions goals.',
    src: '/images/consultant-discussion.jpeg',
    imageSide: 'left',
    objectPosition: 'center',
    theme: 'blue',
  },
]

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
      <ContentContainerStyled bgColor="white" padding="lg">
        <section className="max-w-screen-2xl p-4 xxs:p-12">
          <SectionHeading color="blue" marginBottom="small">
            The Global Youth Initiative
          </SectionHeading>
          <PictureWithHeadingAndText
            src="/images/happy-student.jpeg"
            style="side"
            body="Young students are the world’s most valuable assets that can
                make positive changes for a better world. GY Consulting offers
                students and parents in South Korea and around the world with
                unsurpassed admissions consulting services so that our students
                may, in fact, become “global youths”. Our mentors and
                consultants not only help students achieve their greatest
                potentials during high school, we also meticulously curate each
                student’s achievements and experiences to showcase their best
                selves."
            heading="Cultivating Leadership"
            subHeading="Building hope for our future"
            objectPosition="right"
          />
        </section>
      </ContentContainerStyled>

      <ContentContainerStyled bgColor="blue" padding="lg">
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
      <div className="w-full h-88"></div>

      <ContentContainerStyled bgColor="white" padding="lg">
        <div className="flex w-full h-full justify-center items-center">
          <SectionHeading color="blue">Our Consulting Services</SectionHeading>
        </div>
      </ContentContainerStyled>

      <ContentContainerStyled padding="none" bgColor="blue">
        {services.map(service => {
          return (
            <TextWithPicture
              key={service.title}
              src={service.src}
              theme={service.theme}
              title={service.title}
              description={service.description}
              objectPosition={service.objectPosition}
              imageSide={service.imageSide}
            />
          )
        })}
      </ContentContainerStyled>
      <ContentContainerStyled padding="lg" bgColor="white">
        <section className="w-full">
          <SectionHeading color="blue" marginBottom="small">
            First Steps
          </SectionHeading>
          <div className="flex flex-col xl:flex-row items-center xl:items-start justify-evenly">
            <div className="flex flex-col mb-12 max-w-screen-md p-4 xxs:p-12">
              <PictureWithHeadingAndText
                src="/images/shaking-hands.jpeg"
                body="The GY Initial consultation is a detailed profile review that includes a 30-minute meeting with your expert counselor to get started on a personalized, strategic action plan to help your student achieve their academic and college admissions goals. Families learn in more detail our consulting products, and ask any questions you may have about our services. This crucial first step is for both the Academic Homestay Consulting and the University Admissions Consulting. After you complete our initial consultation form, we will email you our fees and ask you to respond with some dates and times that are convenient for you for our free consultation. Based upon the 30-minute consultation, we will recommend to you how we can proceed."
                heading="Getting To Know You"
                subHeading="Free 30-Minute Initial Consultation"
                objectPosition="right"
                style="top"
              />
            </div>

            <div className="flex flex-col max-w-screen-md p-4 xxs:p-12">
              <PictureWithHeadingAndText
                src="/images/meeting.jpeg"
                body="After your Initial Consultation, we request the student’s transcript, any completed test results, a list of extracurriculars, etc. During this strategy session, we come up with a plan to maximize the student's academic potential, provide essential tips to supplement possible gaps for improvement, and take courses outside of school (if necessary). If the student is in the eleventh grade, we will start on an appropriate list of colleges. In the process, we would also develop an academic and extracurricular strategy that will make your child as competitive as possible to the colleges to which he or she will eventually apply. Whether you proceed with our assistance with the college application process or not, you will come away from this one-hour strategy session with invaluable insight into the process. "
                heading="Creating a Game Plan"
                subHeading="1-Hour Strategy Session"
                objectPosition="right"
                style="top"
              />
            </div>
          </div>
        </section>
      </ContentContainerStyled>
    </ContentContainerWithHeroImage>
  )
}

export default ConsultingPage
