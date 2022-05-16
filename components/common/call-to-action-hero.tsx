import { ButtonFreeConsultation } from './button-free-consultation'

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
      <ButtonFreeConsultation />
    </>
  )
}
