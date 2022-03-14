import Link from 'next/link'

export function CallToActionHero({
  text,
  isHomePage,
}: {
  text: string
  isHomePage?: boolean
}) {
  return (
    <>
      <h2
        className={`${
          isHomePage ? 'hidden' : 'flex'
        } xs:flex items-center text-center text-xl xs:text-2xl sm:text-3xl md:text-4xl max-w-xs xs:max-w-sm sm:max-w-md mx-4 md:max-w-lg lg:w-full`}
      >
        {text}
      </h2>
      <Link href="/">
        <a className="flex items-center  py-4 px-8 bg-orange-400 hover:bg-orange-500 text-white rounded-md font-bold whitespace-nowrap">
          Free Consultation{' '}
        </a>
      </Link>
    </>
  )
}
