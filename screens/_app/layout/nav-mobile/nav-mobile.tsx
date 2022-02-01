import * as React from 'react'

import Link from 'next/link'

import { DialogOverlay, DialogContent } from '@reach/dialog'
import { Accordion, useAccordionContext } from '@reach/accordion'
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'

import { BiMenu } from '@react-icons/all-files/bi/BiMenu'
import { AiFillCaretDown } from '@react-icons/all-files/ai/AiFillCaretDown'
import { AiFillCaretUp } from '@react-icons/all-files/ai/AiFillCaretUp'

import { IDropdown } from 'interfaces-and-types'

import { navContent } from 'screens/_app/layout/constants/constants-layout'
import { useRouter } from 'next/router'

type NavDropdownMobileProps = {
  dropdownContent: IDropdown
  index: number
  close: () => void
}

function NavDropdownMobile({
  dropdownContent: { dropdownOptions, dropdownTitle },
  index,
  close,
}: NavDropdownMobileProps) {
  const [openPanelIndex, setOpenPanelIndex] = React.useState(-1)
  const context = useAccordionContext()

  React.useEffect(() => {
    if (context.openPanels.length) {
      setOpenPanelIndex(context.openPanels[0])
    } else {
      setOpenPanelIndex(-1)
    }
  }, [context.openPanels])

  console.log('accordion=', context, openPanelIndex, index)

  return (
    <AccordionItem key={dropdownTitle} className="mx-auto mb-4 my-8">
      <h3>
        <AccordionButton
          className={`flex items-center min-w-max text-white text-6xl`}
        >
          {dropdownTitle}
          <span aria-hidden>
            {openPanelIndex === index ? (
              <AiFillCaretUp className="inline ml-2 text-2xl" />
            ) : (
              <AiFillCaretDown className="inline ml-2 text-2xl" />
            )}
          </span>
        </AccordionButton>
      </h3>
      <AccordionPanel className="mx-auto min-w-full animate-descendmenu ml-8">
        <div className="flex flex-col">
          {dropdownOptions.map(option => {
            return (
              <Link key={option.linkText} href={option.destination}>
                <a className="text-4xl text-white" onClick={close}>
                  {option.linkText}
                </a>
              </Link>
            )
          })}
        </div>
      </AccordionPanel>
    </AccordionItem>
  )
}

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
          <div className="flex flex-col justify-start w-full">
            <Accordion collapsible className="w-full">
              {navContent.dropdowns.map((dropdown, index) => {
                return (
                  <NavDropdownMobile
                    key={dropdown.dropdownTitle}
                    dropdownContent={dropdown}
                    index={index}
                    close={close}
                  />
                )
              })}
            </Accordion>
            {navContent.navLinks.map(navLink => {
              return (
                <Link key={navLink.linkText} href={navLink.destination}>
                  <a className="mb-4 my-4 text-white text-6xl" onClick={close}>
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
