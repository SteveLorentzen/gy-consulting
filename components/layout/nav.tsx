import { navContent } from 'my-constants'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavDropdown } from './nav-dropdown'

export const Nav: React.FC = () => {
  const router = useRouter()

  return (
    <div className="hidden sm:flex sm:w-104 md:w-120 lg:w-152 justify-between space-between items-center tracking-wider text-md md:text-lg lg:text-xl">
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
              className={` hover:text-green-500  ${
                router.pathname === navLink.destination ? 'text-green-500' : ''
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
