import { Button } from 'components/common/button'
import { Input } from 'components/common/input'
import Image from 'next/image'
import * as React from 'react'

export function LoginPage() {
  const usernameRef = React.useRef(null)

  return (
    <div className="flex justify-center items-center w-full min-h-screen px-4 py-36">
      <div className="absolute top-0 left-0 w-full min-h-screen bg-cyan-800 opacity-60 z-10"></div>
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <div className="relative w-full h-screen">
          <Image
            src="/images/college-building-reflection-crop.jpg"
            layout="fill"
            objectFit="cover"
            alt="college campus"
            className=""
          />
        </div>
      </div>
      <div className="flex flex-col items-center justify-center w-120 h-144 mt-16  z-20 rounded-lg overflow-hidden p-16 -translate-y-12">
        <div className="absolute h-full w-full bg-gray-100 opacity-80 -z-10" />
        <h1 className="text-cyan-900 text-5xl sm:text-4xl text-center">
          GY Consulting
        </h1>

        <div className=" mx-auto pt-8 pb-6 text-2xl sm:text-xl">
          <Input
            inputRef={usernameRef}
            type="email"
            placeholder="email"
            name="Email Address"
          />
          <Input
            inputRef={usernameRef}
            type="password"
            placeholder="password"
            name="Password"
          />
        </div>

        <Button
          buttonAction={() => alert('signin')}
          buttonText="Sign In"
          fill
        />
      </div>
    </div>
  )
}

export default LoginPage
