import * as React from 'react'

import Link from 'next/link'
import Image from 'next/image'

import { DialogOverlay, DialogContent } from '@reach/dialog'

import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'

import { navContent } from 'constants/_app/layout/constants-layout'
import { useRouter } from 'next/router'

export function NavMobile() {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  const router = useRouter()

  function navigateToLogin() {
    router.push('/login')
    setShowDialog(false)
  }

  return (
    <>
      <div
        className="relative md:hidden active:text-cyan-500 mr-4"
        onClick={() => (showDialog ? close() : open())}
      >
        <BiMenu className="text-6xl text-white" />
      </div>

      <DialogOverlay
        className="flex md:hidden justify-center bg-cyan-800 min-h-screen w-full fixed top-0 left-0 z-50 animate-slidein "
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
          aria-label="Navigation Menu"
          className="relative flex flex-col py-12 justify-start items-start  min-w-full min-h-full px-16 tracking-wide text-3xl"
        >
          <Link href="/">
            <a
              className="absolute top-3 left-4  text-white text-5xl font-semibold tracking-wider"
              onClick={() => setShowDialog(false)}
            >
              <Image
                src="/images/gy-logo.png"
                width={55}
                height={40}
                alt="GY consulting logo"
              />
            </a>
          </Link>
          <div
            className="absolute top-4 right-4 text-5xl text-white"
            onClick={() => setShowDialog(false)}
          >
            <AiOutlineClose />
          </div>

          <button
            onClick={navigateToLogin}
            className="mx-auto my-12 bg-white px-24 py-3 rounded-md text-cyan-900 active:text-cyan-700 font-bold "
          >
            Login
          </button>
          <hr className="bg-white w-full mb-4"></hr>
          <div className="flex flex-col justify-start w-full">
            {navContent.navLinks.map(navLink => {
              return (
                <Link key={navLink.linkText} href={navLink.destination}>
                  <a
                    className="mb-4 my-6 text-white text-6xl active:text-cyan-200"
                    onClick={close}
                  >
                    {navLink.linkText}
                  </a>
                </Link>
              )
            })}
            <hr className="bg-white w-full my-10"></hr>
            <div className="flex justify-center w-full ">
              <button
                onClick={() => {
                  alert('get a free consultation!')
                }}
                className=" bg-orange-400 hover:bg-orange-500 text-white py-4 px-6 rounded-lg  whitespace-nowrap font-bold tracking-wide"
              >
                Free Consultation
              </button>
            </div>
          </div>
        </DialogContent>
      </DialogOverlay>
    </>
  )
}
