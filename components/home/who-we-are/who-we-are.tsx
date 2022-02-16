import { BiTrophy } from '@react-icons/all-files/bi/BiTrophy'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BiSupport } from '@react-icons/all-files/bi/BiSupport'
import { Button } from 'components/common/button'
import { ReactNode } from 'react'

type ServiceCardProps = {
  title: string
  description: string
  buttonText: string
  buttonAction: () => void
  children: React.ReactNode
}

function ServiceCard({
  title,
  description,
  children,
  buttonText,
  buttonAction,
}: ServiceCardProps) {
  return (
    <div className="flex flex-col justify-between items-center md:w-1/3 h-112 xs:h-96  md:h-96 lg:h-88 max-w-sm px-7 py-4 my-12 text-cyan-700 text-2xl md:text-xl">
      <div className="text-9xl md:text-8xl">{children}</div>

      <div className="flex flex-col justify-between text-gray-800 w-104 xxs:w-112 xs:w-136 md:w-full max-w-3xl h-3/5">
        <h3 className="text-4xl md:text-3xl font-bold mb-4">{title}</h3>
        <h3 className="h-2/3">{description}</h3>
      </div>

      <Button buttonAction={buttonAction} buttonText={buttonText} />
    </div>
  )
}

function Services() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full  mx-auto mt-4 mb-16  px-16">
      <ServiceCard
        title="Consulting"
        description="We work closely with both parents and students to reach your college admissions goals."
        buttonText="Learn More"
        buttonAction={() => alert('the button works!')}
      >
        <BiTrophy />
      </ServiceCard>

      <ServiceCard
        title="Homestays"
        description="Knowing your child is being looked after is a great source of peace of mind."
        buttonText="Apply Now"
        buttonAction={() => alert('the button works!')}
      >
        <BsHouse />
      </ServiceCard>

      <ServiceCard
        title="Support"
        description="Our support is second to none.  Available 24 hours a day, 7 days a week."
        buttonText="Reach Out"
        buttonAction={() => alert('the button works!')}
      >
        <BiSupport />
      </ServiceCard>
    </div>
  )
}

export function WhoWeAre() {
  return (
    <div className="w-full max-w-screen-3xl mx-auto">
      <div className="flex flex-col items-center  px-10  my-16 sm:my-12">
        <h2 className="text-6xl sm:text-7xl lg:text-7xl text-cyan-800 ">
          Global Youth Consulting
        </h2>
        <h3 className="text-4xl mt-6 tracking-wider">
          Every step of the way, your child is in good hands
        </h3>
      </div>
      <hr className="w-10/12 mx-auto " />
      <Services />
    </div>
  )
}
