import { ServiceCard } from 'components/service-card'
import { BiTrophy } from '@react-icons/all-files/bi/BiTrophy'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BiSupport } from '@react-icons/all-files/bi/BiSupport'

export const Services: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-around w-10/12 mx-auto mt-4 mb-16">
      <ServiceCard
        title="Consulting"
        description="We work clsoely with both parents and students to make sure every requirement is being met.  "
        buttonText="Learn More"
        buttonAction={() => alert('the button works!')}
      >
        <BiTrophy className="text-5xl sm:text-6xl  lg:text-7xl" />
      </ServiceCard>

      <ServiceCard
        title="Homestays"
        description="Knowing your son or daughter is being looked after properly is a great source of peace of mind."
        buttonText="Apply Now"
        buttonAction={() => alert('the button works!')}
      >
        <BsHouse className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl" />
      </ServiceCard>

      <ServiceCard
        title="Support"
        description="Our support is second to none.  Available 24 hours a day, 7 days a week."
        buttonText="Reach Out"
        buttonAction={() => alert('the button works!')}
      >
        <BiSupport className="text-5xl sm:text-5xl md:text-6xl lg:text-7xl" />
      </ServiceCard>
    </div>
  )
}
