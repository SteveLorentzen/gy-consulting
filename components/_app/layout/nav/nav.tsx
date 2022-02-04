import { useRouter } from 'next/router'
import Link from 'next/link'

import { navContent } from 'constants/_app/layout/constants-layout'

import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'

import { IDropdown } from 'interfaces-and-types/_app/layout/interfaces-and-types'

function NavDropdown({
  dropdownTitle,
  dropdownOptions,
  mainDestination,
}: IDropdown) {
  const router = useRouter()

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            id={mainDestination.slice(1)}
            className={`text-white hover:text-cyan-200 tracking-wider whitespace-nowrap ml-4 md:ml-8 lg:ml-12 xl:ml-16 ${
              isOpen ? 'text-white' : ''
            } ${router.pathname === mainDestination ? 'text-cyan-200' : ''}`}
          >
            {dropdownTitle} <span aria-hidden>▾</span>
          </MenuButton>
          <div className="flex flex-col bg-cyan-200">
            <MenuList className="flex flex-col z-50 relative border border-white p-2 bg-cyan-900 rounded shadow-md translate-y-4 animate-descend">
              {dropdownOptions.map(navLink => {
                return (
                  <MenuItem
                    key={navLink.linkText}
                    // requires onSelect prop but it isn't needed
                    onSelect={() => {
                      return
                    }}
                    className="flex items-stretch h-9 hover:cursor-pointer px-3 text-white hover:text-cyan-200 transition-all ease-in duration-150"
                  >
                    <Link href={navLink.destination}>
                      <a className="flex items-center w-full ">
                        {navLink.linkText}
                      </a>
                    </Link>
                  </MenuItem>
                )
              })}
            </MenuList>
          </div>
        </>
      )}
    </Menu>
  )
}

export function Nav() {
  const router = useRouter()

  return (
    <div className="hidden sm:flex w-152 sm:w-232 justify-end space-between items-center tracking-wider text-xl z-20">
      {navContent.dropdowns.map(dropdown => {
        return (
          <NavDropdown
            key={dropdown.dropdownTitle}
            dropdownTitle={dropdown.dropdownTitle}
            dropdownOptions={dropdown.dropdownOptions}
            mainDestination={dropdown.mainDestination}
          />
        )
      })}
      {navContent.navLinks.map(navLink => {
        return (
          <Link key={navLink.linkText} href={navLink.destination}>
            <a
              className={` text-white hover:text-cyan-200 whitespace-nowrap ml-4 md:ml-8 lg:ml-12 xl:ml-16 ${
                router.pathname === navLink.destination ? 'text-cyan-200' : ''
              }  `}
            >
              {navLink.linkText}
            </a>
          </Link>
        )
      })}
    </div>
  )
}
