import { BiCopyright } from '@react-icons/all-files/bi/BiCopyright'
import { Button } from 'components/button'
import { Input } from 'components/input'
import * as React from 'react'

export function Footer() {
  const newsletterInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="relative w-full bg-gray-200 z-10 text-xl">
      <div className="flex flex-col flex-wrap w-full justify-around items-center max-w-screen-2xl mx-auto p-10 ">
        <div className="flex flex-wrap justify-between w-96 md:w-full mb-14 ">
          <div className="flex flex-col h-32 justify-between md:w-3/12 order-1">
            <h5 className="text-3xl">Contact Us</h5>
            <h6>(123)456-7890 ext 2364</h6>
            <h6 className="font-bold">questions@GYconsulting.com</h6>
          </div>

          <div className="flex flex-col justify-between w-full md:w-3/12 h-40 order-2 md:order-3 50 my-12 md:my-0 ">
            <h5 className="text-3xl ">Sign Up for GY&apos;s newsletter</h5>

            <Input
              inputRef={newsletterInputRef}
              placeholder="email"
              type="email"
            />

            <Button
              fill
              buttonAction={() => alert('yay!')}
              buttonText="Submit"
            />
          </div>
          <div className="flex flex-col w-full md:w-3/12 items-center order-3 md:order-2 font-bold ">
            <div className="flex flex-col">
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
      </div>
    </div>
  )
}
