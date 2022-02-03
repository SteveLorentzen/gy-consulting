import { FaMedal } from '@react-icons/all-files/fa/FaMedal'
import { AiOutlineDollar } from '@react-icons/all-files/ai/AiOutlineDollar'
import { GoBook } from '@react-icons/all-files/go/GoBook'
import { SectionHeading } from 'components/section-heading'

export const reasons = [
  {
    title: 'Knowledge',
    description:
      'Each member of our team has more than 10 years of experience working with counseling students about college admissions.',
    icon: <GoBook />,
  },

  {
    title: 'Value',
    description:
      'We work hard at making sure the services we offer are available at a price that works for anyone.',
    icon: <AiOutlineDollar />,
  },
  {
    title: 'Excellence',
    description:
      'The members of GY Consulting have helped more than 100 students gain admission to their school of choice.',
    icon: <FaMedal />,
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
      <div className="mr-2 mb-2 text-cyan-200 text-7xl md:text-5xl">
        {children}
      </div>

      <h3 className="font-bold mb-6 md:mb-4 text-4xl">{title}</h3>

      <div className="text-2xl md:text-xl">
        <p>{description}</p>
      </div>
    </div>
  )
}

export function WhyGYConsulting() {
  return (
    <div
      id="why-gy-consulting"
      className="relative bg-cyan-900 justify-between items-center py-10 lg:scroll-m-20 px-12"
    >
      <div className="w-full xl:w-11/12 2xl:w-10/12 mx-auto py-12 md:py-18">
        <SectionHeading color="white" headingText="Why GY Consulting" />

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
    </div>
  )
}
