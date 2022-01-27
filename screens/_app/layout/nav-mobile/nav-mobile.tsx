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

type NavDropdownMobileProps = {
  dropdownContent: IDropdown
  index: number
  close: () => void
}

const NavDropdownMobile: React.FC<NavDropdownMobileProps> = ({
  dropdownContent: { dropdownOptions, dropdownTitle },
  index,
  close,
}) => {
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
    <AccordionItem key={dropdownTitle} className="mx-auto mb-4">
      <h3>
        <AccordionButton className={`flex items-center  min-w-max text-white`}>
          {dropdownTitle}
          <span aria-hidden>
            {openPanelIndex === index ? (
              <AiFillCaretUp className="inline ml-2 text-2xl fill-white " />
            ) : (
              <AiFillCaretDown className="inline ml-2 text-2xl fill-white" />
            )}
          </span>
        </AccordionButton>
      </h3>
      <AccordionPanel className="mx-auto min-w-full animate-descendmenu">
        <div className="flex flex-col">
          {dropdownOptions.map(option => {
            return (
              <Link key={option.linkText} href={option.destination}>
                <a className="text-xl text-white ml-2" onClick={close}>
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

export const NavMobile: React.FC = () => {
  const [showDialog, setShowDialog] = React.useState(false)
  const open = () => setShowDialog(true)
  const close = () => setShowDialog(false)

  return (
    <>
      <div
        className="relative sm:hidden active:text-cyan-500"
        onClick={() => (showDialog ? close() : open())}
      >
        <BiMenu className="text-4xl text-white" />
      </div>

      <DialogOverlay
        className="flex sm:hidden justify-center pt-14 bg-cyan-800 min-h-screen w-full fixed top-0 left-0 z-40 animate-slidein "
        isOpen={showDialog}
        onDismiss={close}
      >
        <DialogContent
          aria-label="Navigation Menu"
          className="relative flex flex-col justify-start items-start  min-w-full min-h-full pl-14 tracking-wide text-3xl"
        >
          <div className="flex flex-col justify-start ">
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
                  <a className="mb-4 text-white" onClick={close}>
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
