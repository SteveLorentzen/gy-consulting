import Link from 'next/link'

export function CallToActionBottom({
  isBlueBackground,
}: {
  isBlueBackground?: boolean
}) {
  return (
    <div className="mx-auto max-w-screen-2xl flex flex-col items-center justify-center mt-6 px-12">
      <h3
        className={`${
          isBlueBackground ? 'text-white' : 'text-cyan-800'
        } font-bold text-center`}
      >
        When you&apos;re ready, get your free consultation.
      </h3>
      <Link href="/">
        <a className="mt-6 py-4 px-8 bg-orange-400 hover:bg-orange-500 text-white rounded-md font-bold">
          Get a Free Consultation
        </a>
      </Link>
    </div>
  )
}
