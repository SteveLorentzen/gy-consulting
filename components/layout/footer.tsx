import { BiCopyright } from '@react-icons/all-files/bi/BiCopyright'

export const Footer: React.FC = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="flex flex-col  flex-wrap justify-around items-center max-w-screen-2xl mx-auto p-10">
        <div className="flex flex-wrap justify-around w-full mb-14">
          <div className="flex flex-col items-center h-32 justify-between m-8 order-1">
            <h5 className="text-3xl">Contact Us</h5>
            <h6>(123)456-7890 ext 2364</h6>
            <h6 className="font-bold">questions@GYconsulting.com</h6>
          </div>

          <div className="flex flex-col justify-between h-32 m-6 order-2">
            <h5 className="text-2xl">Sign Up for GY&apos;s newsletter</h5>
            <input className="w-full" />
            <button className="border-2 mt-2 hover:bg-green-50 active:text-green-700 active:border-green-50">
              Submit
            </button>
          </div>
        </div>
        <div className="flex flex-col max-w-md text-center items-center order-3 mx-auto mb-10 font-bold">
          <h6>
            Some sort of legal statement about all rights being reserved and
            trademarks and such{' '}
          </h6>
          <div className="flex justify-center items-center font-bold">
            <BiCopyright /> 2022
          </div>
        </div>
      </div>
    </div>
  )
}
