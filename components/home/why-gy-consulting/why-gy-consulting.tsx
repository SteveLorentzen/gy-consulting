import { FaMedal } from '@react-icons/all-files/fa/FaMedal'
import { AiOutlineDollar } from '@react-icons/all-files/ai/AiOutlineDollar'
import { GoBook } from '@react-icons/all-files/go/GoBook'
import { SectionHeading } from 'components/common/section-heading'
import { ContentContainerStyled } from 'components/common/content-container-styled'

const iconSize = 90

export const reasons = [
  {
    title: 'Knowledge',
    description:
      'Each member of our team has more than 10 years of experience working with counseling students about college admissions.',
    icon: <GoBook size={iconSize} />,
  },

  {
    title: 'Value',
    description:
      'We work hard at making sure the services we offer are available at a price that works for anyone.',
    icon: <AiOutlineDollar size={iconSize} />,
  },
  {
    title: 'Excellence',
    description:
      'The members of GY Consulting have helped more than 100 students gain admission to their school of choice.',
    icon: <FaMedal size={iconSize} />,
  },
]

type ReasonProps = {
  title: string
  description: string
  children: React.ReactNode
}

function Reason({ title, description, children }: ReasonProps) {
  return (
    <div className="flex flex-col items-center w-full xs:w-136 md:w-72 mx-8 mb-24 md:mb-0 text-white">
      <div className="mr-2 mb-4 text-cyan-200 md:text-5xl">{children}</div>

      <h3 className="tracking-wide mb-6 md:mb-4 text-3xl uppercase">{title}</h3>

      <div className="text-2xl md:text-xl px-12 sm:px-0">
        <p>{description}</p>
      </div>
    </div>
  )
}

export function WhyGYConsulting() {
  return (
    <ContentContainerStyled bgColor="blue" padding="lg">
      <div className="w-full max-w-screen-3xl  mx-auto md:py-18 px-16">
        <SectionHeading color="white" marginBottom="large">
          Why GY Consulting
        </SectionHeading>

        <div className="flex flex-col md:flex-row items-center md:items-start w-full justify-between">
          {reasons.map(reason => {
            return (
              <Reason
                key={reason.title}
                title={reason.title}
                description={reason.description}
              >
                {reason.icon}
              </Reason>
            )
          })}
        </div>
      </div>
    </ContentContainerStyled>
  )
}
