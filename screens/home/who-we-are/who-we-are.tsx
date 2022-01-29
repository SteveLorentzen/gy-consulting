import { BiTrophy } from '@react-icons/all-files/bi/BiTrophy'
import { BsHouse } from '@react-icons/all-files/bs/BsHouse'
import { BiSupport } from '@react-icons/all-files/bi/BiSupport'

type ServiceCardProps = {
  title: string
  description: string
  buttonText: string
  buttonAction: () => void
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  children,
  buttonText,
  buttonAction,
}) => {
  return (
    <div className="flex flex-col justify-between items-center md:w-1/3 h-112 md:h-96 lg:h-88 max-w-sm px-7 py-6 my-6 text-cyan-700 text-2xl md:text-xl">
      <div className="text-9xl md:text-8xl">{children}</div>

      <div className="flex flex-col justify-between text-gray-800 w-104 xs:w-136 md:w-full max-w-3xl h-3/5">
        <h3 className="text-4xl md:text-3xl font-bold">{title}</h3>
        <h3 className="h-2/3">{description}</h3>
      </div>

      <button
        className="text-3xl md:text-2xl active:text-green-800 border border-cyan-700 px-6 py-2 rounded hover:bg-cyan-50"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    </div>
  )
}

const Services: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full xl:w-11/12 2xl:w-10/12 mx-auto mt-4 mb-16">
      <ServiceCard
        title="Consulting"
        description="We work closely with both parents and students to make sure every requirement is being met."
        buttonText="Learn More"
        buttonAction={() => alert('the button works!')}
      >
        <BiTrophy />
      </ServiceCard>

      <ServiceCard
        title="Homestays"
        description="Knowing your son or daughter is being looked after properly is a great source of peace of mind."
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

export const WhoWeAre: React.FC = () => {
  return (
    <div
      className="w-full min-h-max scroll-mt-11 md:scroll-m-14 lg:scroll-mt-20"
      id="who-we-are"
    >
      <div className="flex flex-col justify-center items-center  mx-auto py-6 md:py-8 lg:py-12 text-4xl xxs:text-5xl xs:text-6xl sm:text-5xl lg:text-6xl px-10 sm:whitespace-nowrap">
        <h2>
          At <span className="text-cyan-700 ">GY</span> Consulting, We Put
          Students First
        </h2>{' '}
        <h5 className="text-3xl mt-6  ">
          You can trust that your loved ones are in good hands.
        </h5>
      </div>
      <hr className="w-10/12 mx-auto " />
      <Services />
    </div>
  )
}
