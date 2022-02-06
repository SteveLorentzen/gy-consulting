import { SectionHeading } from 'components/common/section-heading'
import Image from 'next/image'

export function TheTeam() {
  return (
    <div
      className="flex flex-col w-full scroll-mt-11 lg:scroll-mt-20 text-4xl py-24 px-8"
      id="the-team"
    >
      <SectionHeading color="blue">Meet The Team</SectionHeading>
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center">
        <div className="w-104 max-w-lg mb-10 lg:mr-20 bg-black">
          <Image
            className="max-w-lg"
            src="/images/professional.jpg"
            alt="two professional women"
            layout="responsive"
            width={145}
            height={100}
          />
        </div>

        <div className="flex flex-col items-center lg:items-start max-w-md">
          <h3 className="font-bold text-3xl text-cyan-700 mb-8">World Class</h3>
          <p className="text-xl text-center lg:text-left">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet
            explicabo veniam possimus in, recusandae harum numquam maxime at
            deleniti ex, placeat laborum, culpa quas corporis. Tempore animi
            culpa commodi eius.
          </p>
        </div>
      </div>
    </div>
  )
}
