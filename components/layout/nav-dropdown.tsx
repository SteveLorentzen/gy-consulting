import { Menu, MenuList, MenuButton, MenuItem } from '@reach/menu-button'
import { IDropdown } from 'interfaces-and-types'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const NavDropdown: React.FC<IDropdown> = ({
  dropdownTitle,
  dropdownOptions,
  mainDestination,
}) => {
  const router = useRouter()

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            id={mainDestination.slice(1)}
            className={`hover:text-green-600 tracking-wider  ${
              isOpen ? 'text-green-600' : ''
            } ${router.pathname === mainDestination ? 'text-green-600' : ''}`}
          >
            {dropdownTitle} <span aria-hidden>▾</span>
          </MenuButton>
          <MenuList className="flex flex-col z-50 relative bg-white rounded shadow-md animate-descend">
            {dropdownOptions.map(navLink => {
              return (
                <MenuItem
                  key={navLink.linkText}
                  // requires onSelect prop but it isn't needed
                  onSelect={() => {
                    return
                  }}
                  className="flex items-stretch h-9 hover:cursor-pointer hover:bg-slate-50 px-3"
                >
                  <Link href={navLink.destination}>
                    <a className="flex items-center w-full">
                      {navLink.linkText}
                    </a>
                  </Link>
                </MenuItem>
              )
            })}
          </MenuList>
        </>
      )}
    </Menu>
  )
}
