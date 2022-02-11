import { useRouter } from 'next/router'
import Link from 'next/link'

import { navContent } from 'constants/_app/layout/constants-layout'

export function Nav() {
  const router = useRouter()

  return (
    <div className="hidden sm:flex w-152 sm:w-232 justify-end space-between items-center tracking-wider text-xl z-20">
      {navContent.navLinks.map(navLink => {
        return (
          <Link key={navLink.linkText} href={navLink.destination}>
            <a
              className={` text-white hover:text-cyan-200 whitespace-nowrap ml-8 lg:ml-16 ${
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
