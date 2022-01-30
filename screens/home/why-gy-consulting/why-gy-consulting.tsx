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
    <div className="flex flex-col items-center w-104 md:w-60 mx-8 mb-16 md:mb-4 text-white ">
      <div className="mr-2 mb-2 text-cyan-200 text-7xl md:text-5xl">
        {children}
      </div>

      <h3 className="font-bold mb-4 text-4xl">{title}</h3>

      <div className="">
        <p>{description}</p>
      </div>
    </div>
  )
}

export function WhyGYConsulting() {
  return (
    <div
      id="why-gy-consulting"
      className="relative bg-cyan-900 justify-around items-center py-10 lg:scroll-m-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        <SectionHeading color="white" headingText="Why GY Consulting" />

        <div className="flex flex-col md:flex-row items-center md:items-start w-full flex-wrap justify-around">
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
