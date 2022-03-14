import { Button } from 'components/common/button'
import { Input } from 'components/common/input'
import * as React from 'react'

export function Footer() {
  const newsletterInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="relative w-full bg-gray-200 z-10 text-xl py-16">
      <div className="flex flex-col flex-wrap w-full justify-around items-center max-w-screen-3xl mx-auto px-16 ">
        <div className="flex flex-wrap justify-between w-11/12 xxs:w-96 md:w-full">
          <div className="flex flex-col md:w-3/12 order-1 mb-12 md:mb-0">
            <h4 className="text-3xl">Contact Us</h4>
            <a href="tel:+ 82-10-2888-2464" className="py-2">
              + 82-10-2888-2464
            </a>
            <a
              href="mailto: questions@GYConsulting.com"
              className="font-bold mb-2"
            >
              questions@GYconsulting.com
            </a>
            <h6 className="font-bold">Address:</h6>
            <p>148, Edu city ro, Samjeong G Edu, 119-404,</p>
            <p>Daejeong-eup, Seogwipo-si, Jeju-do, Korea</p>
          </div>

          <div className="flex flex-col justify-between w-full md:w-3/12 order-2 md:order-3 50 mb-12 md:mb-0">
            <h4 className="text-3xl ">Sign Up for GY&apos;s newsletter</h4>

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
          <div className="flex flex-col w-full md:w-3/12 items-center order-3 md:order-2 ">
            <div className="flex flex-col mb-12 md:mb-0">
              <h5>
                Some sort of legal statement about all rights being reserved and
                trademarks and such{' '}
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
