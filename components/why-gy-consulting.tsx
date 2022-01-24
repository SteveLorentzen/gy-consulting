import { Reason } from 'components/reason'
import { FaMedal } from '@react-icons/all-files/fa/FaMedal'
import { AiOutlineDollar } from '@react-icons/all-files/ai/AiOutlineDollar'
import { GoBook } from '@react-icons/all-files/go/GoBook'

export const WhyGYConsulting: React.FC = () => {
  return (
    <div
      id="why-gy-consulting"
      className="relative bg-green-100 justify-around items-center py-10 lg:scroll-m-20"
    >
      <div className="max-w-screen-2xl mx-auto">
        <h3 className="text-5xl font-light pb-12">Why GY Consulting?</h3>
        <div className="flex w-full flex-wrap justify-around">
          <Reason
            title="Knowledge"
            description={
              'Each member of our team has more than 10 years of experience working with counseling students about college admissions.'
            }
          >
            <GoBook className="text-4xl" />
          </Reason>
          <Reason
            title="Value"
            description={
              'We work hard at making sure the services we offer are available at a price that works for anyone.'
            }
          >
            <AiOutlineDollar className="text-4xl" />
          </Reason>
          <Reason
            title="Excellence"
            description={
              'The members of GY Consulting have helped more than 100 students gain admission to their school of choice.'
            }
          >
            <FaMedal />
          </Reason>
        </div>
      </div>
    </div>
  )
}
