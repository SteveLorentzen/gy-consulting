import { Button } from 'components/button'
import { Input } from 'components/input'
import Image from 'next/image'
import * as React from 'react'

export function LoginPage() {
  const usernameRef = React.useRef(null)

  return (
    <div className="flex justify-center items-center w-full min-h-screen p-4">
      <div className="absolute top-0 left-0 w-full min-h-screen bg-cyan-800 opacity-80 z-10"></div>
      <div className="absolute top-0 left-0 w-full min-h-screen">
        <Image
          src="/images/occidental-college.jpeg"
          layout="fill"
          objectFit="cover"
          alt="college campus"
        />
      </div>
      <div className="flex flex-col w-120 h-144 bg-white z-20 rounded-lg p-16">
        <h1 className="text-cyan-900 text-4xl text-center">GY Consulting</h1>

        <div className=" mx-auto pt-8 pb-6">
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
