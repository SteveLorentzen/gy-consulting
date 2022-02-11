import * as React from 'react'

import Link from 'next/link'

import { DialogOverlay, DialogContent } from '@reach/dialog'

import { BiMenu } from '@react-icons/all-files/bi/BiMenu'

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
        className="relative sm:hidden active:text-cyan-500"
        onClick={() => (showDialog ? close() : open())}
      >
        <BiMenu className="text-6xl text-white" />
      </div>

      <DialogOverlay
        className="flex sm:hidden justify-center pt-14 bg-cyan-800 min-h-screen w-full fixed top-0 left-0 z-40 animate-slidein "
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
          aria-label="Navigation Menu"
          className="relative flex flex-col justify-start items-start  min-w-full min-h-full px-16 tracking-wide text-3xl"
        >
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
          </div>
        </DialogContent>
      </DialogOverlay>
    </>
  )
}
