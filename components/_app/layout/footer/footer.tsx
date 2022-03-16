import { Button } from 'components/common/button'
import { Input } from 'components/common/input'
import * as React from 'react'

export function Footer() {
  const newsletterInputRef = React.useRef<HTMLInputElement>(null)

  return (
    <div className="relative w-full bg-gray-200 z-10 text-xl py-16">
      <div className="flex flex-col flex-wrap w-full justify-center items-center max-w-screen-3xl mx-auto px-4 sm:px-16 ">
        <div className="flex flex-wrap justify-between mx-auto lg:justify-evenly  w-full lg:px-24 max-w-md md:max-w-none md:px-4">
          <div className="flex flex-col md:w-1/2 mb-12 md:mb-0 max-w-md">
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

          <div className="flex flex-col justify-between self-start w-full md:w-1/3 50 mb-12 md:mb-0 max-w-md">
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
        </div>
      </div>
    </div>
  )
}
