import * as React from 'react'
import { useAccordionContext } from '@reach/accordion'
import { AiOutlineCaretDown } from '@react-icons/all-files/ai/AiOutlineCaretDown'
import { AiOutlineCaretUp } from '@react-icons/all-files/ai/AiOutlineCaretup'

import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import Link from 'next/link'
import { IDropdown } from 'interfaces-and-types'

type NavDropdownProps = {
  dropdownContent: IDropdown
  index: number
  close: () => void
}

export const NavDropdownMobile: React.FC<NavDropdownProps> = ({
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
              <AiOutlineCaretUp className="inline ml-2 text-2xl fill-white " />
            ) : (
              <AiOutlineCaretDown className="inline ml-2 text-2xl fill-white" />
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
