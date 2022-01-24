import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from '@reach/accordion'
import Link from 'next/link'
import { IDropdown } from 'interfaces-and-types'

type NavDropdownProps = {
  dropdownContent: IDropdown
  close: () => void
}

export const NavDropdownMobile: React.FC<NavDropdownProps> = ({
  dropdownContent: { dropdownOptions, dropdownTitle },
  close,
}) => {
  return (
    <AccordionItem key={dropdownTitle} className="mx-auto mb-4">
      <h3>
        <AccordionButton className={`min-w-max `}>
          {dropdownTitle} <span aria-hidden>▾</span>
        </AccordionButton>
      </h3>
      <AccordionPanel className="mx-auto min-w-full animate-descend">
        <div className="flex flex-col">
          {dropdownOptions.map(option => {
            return (
              <Link key={option.linkText} href={option.destination}>
                <a className="text-2xl" onClick={close}>
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
