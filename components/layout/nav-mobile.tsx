import * as React from 'react'
import { navContent } from 'my-constants'
import Link from 'next/link'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Accordion } from '@reach/accordion'
import { NavDropdownMobile } from 'components/layout/nav-dropdown-mobile'
import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { AiOutlineClose } from '@react-icons/all-files/ai/AiOutlineClose'

export const NavMobile: React.FC = () => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)
  return (
    <>
      <div className="sm:hidden active:text-green-500" onClick={open}>
        <BiMenu className="text-4xl" />
      </div>

      <DialogOverlay
        className="flex sm:hidden justify-center pt-14 bg-green-400 min-h-screen w-full fixed top-0 left-0 z-30 animate-slide"
        isOpen={showDialog}
        onDismiss={close}
      >
        <p className="absolute top-3 right-5 text-4xl" onClick={close}>
          <AiOutlineClose className="text-5xl" />
        </p>
        <DialogContent
          aria-label="Navigation Menu"
          className="relative flex flex-col justify-start items-start  min-w-full min-h-full pl-14 tracking-wide text-4xl"
        >
          <div className="flex flex-col justify-start ">
            <Accordion collapsible className="w-full">
              {navContent.dropdowns.map(dropdown => {
                return (
                  <NavDropdownMobile
                    key={dropdown.dropdownTitle}
                    dropdownContent={dropdown}
                    close={close}
                  />
                )
              })}
            </Accordion>
            {navContent.navLinks.map(navLink => {
              return (
                <Link key={navLink.linkText} href={navLink.destination}>
                  <a className="mb-4" onClick={close}>
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
