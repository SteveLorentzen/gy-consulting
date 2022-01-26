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
            className={`text-white hover:text-cyan-200 tracking-wider  ${
              isOpen ? 'text-white' : ''
            } ${router.pathname === mainDestination ? 'text-cyan-200' : ''}`}
          >
            {dropdownTitle} <span aria-hidden>▾</span>
          </MenuButton>
          <div className="flex flex-col bg-green-200">
            <MenuList className="flex flex-col z-50 relative border-2 border-white p-2 bg-cyan-900 rounded shadow-md translate-y-4 animate-descend">
              {dropdownOptions.map(navLink => {
                return (
                  <MenuItem
                    key={navLink.linkText}
                    // requires onSelect prop but it isn't needed
                    onSelect={() => {
                      return
                    }}
                    className="flex items-stretch h-9 hover:cursor-pointer  px-3 text-white hover:text-cyan-200 transition-all ease-in duration-150"
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
          </div>
        </>
      )}
    </Menu>
  )
}
