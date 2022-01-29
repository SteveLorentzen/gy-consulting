import { BiCopyright } from '@react-icons/all-files/bi/BiCopyright'

export const Footer: React.FC = () => {
  return (
    <div className="relative w-full bg-gray-200 z-10">
      <div className="flex flex-col  flex-wrap justify-around items-center max-w-screen-2xl mx-auto p-10">
        <div className="flex flex-wrap justify-around w-full mb-14">
          <section className="flex flex-col items-center h-32 justify-between m-8 order-1">
            <h5 className="text-3xl">Contact Us</h5>
            <h6>(123)456-7890 ext 2364</h6>
            <h6 className="font-bold">questions@GYconsulting.com</h6>
          </section>

          <section className="flex flex-col justify-between w-full lg:w-1/3 h-40 order-2 lg:order-3 50 my-12 lg:my-0 px-16">
            <h5 className="text-3xl ">Sign Up for GY&apos;s newsletter</h5>
            <input
              type="email"
              className="w-full p-2"
              placeholder="YourEmail@YourProvider.com"
            />
            <button className="border-2 border-cyan-900 text-cyan-900 py-2 rounded mt-2 hover:bg-green-50 active:text-green-700 active:border-green-50">
              Submit
            </button>
          </section>
          <section className="flex flex-col w-full lg:w-1/3 text-center items-center order-3 lg:order-2 font-bold  px-16">
            <h6>
              Some sort of legal statement about all rights being reserved and
              trademarks and such{' '}
            </h6>
            <div className="flex justify-center items-center font-bold">
              <BiCopyright /> 2022
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
