import { useRouter } from 'next/router'
import Link from 'next/link'

import { navContent } from 'constants/_app/layout/constants-layout'
import { useEffect, useState } from 'react'

export function Nav({ yPosition }: { yPosition: number }) {
  const [scheduleButtonIsVisible, setScheduleButtonIsVisible] = useState(false)
  const [buttonWidth, setButtonWidth] = useState('')

  const router = useRouter()

  useEffect(() => {
    if (yPosition > 500 && !scheduleButtonIsVisible) {
      setButtonWidth(`100%`)
      setScheduleButtonIsVisible(true)
    } else if (yPosition <= 500) {
      setButtonWidth(`${(yPosition / 500) * 100}%`)
      setScheduleButtonIsVisible(false)
    }
  }, [yPosition, scheduleButtonIsVisible])

  return (
    <div className="hidden md:flex justify-end space-between items-center tracking-wider text-xl z-20">
      <div className="md:mr-4 lg:mr-6 xl:mr-8">
        {navContent.navLinks.map(navLink => {
          return (
            <Link key={navLink.linkText} href={navLink.destination}>
              <a
                className={` text-white hover:text-cyan-200 whitespace-nowrap ml-6 sm:ml-4 md:ml-6 lg:ml-12 xl:ml-16 ${
                  router.pathname === navLink.destination ? 'text-cyan-200' : ''
                }  `}
              >
                {navLink.linkText}
              </a>
            </Link>
          )
        })}
      </div>

      <div style={{ width: buttonWidth }} className="overflow-hidden ">
        <button
          onClick={() => {
            alert('get a free consultation!')
          }}
          className=" bg-orange-400 hover:bg-orange-500 text-white  py-2 px-6 rounded-lg  whitespace-nowrap font-bold tracking-wide mr-6 sm:ml-4 lg:ml-6 xl:ml-10"
        >
          Free Consultation
        </button>
      </div>
    </div>
  )
}
