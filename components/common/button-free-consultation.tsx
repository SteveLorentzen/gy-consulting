import Link from 'next/link'

export function ButtonFreeConsultation() {
  return (
    <Link href="/">
      <a className="flex items-center py-4 px-8 bg-orange-400 hover:bg-orange-500 text-white text-2xl rounded-md font-bold whitespace-nowrap">
        Free Consultation{' '}
      </a>
    </Link>
  )
}
