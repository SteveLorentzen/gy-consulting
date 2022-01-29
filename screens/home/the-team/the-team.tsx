import Image from 'next/image'

export const TheTeam: React.FC = () => {
  return (
    <div
      className="flex flex-col w-full scroll-mt-11 lg:scroll-mt-20 text-4xl p-14"
      id="the-team"
    >
      <h3 className="text-3xl sm:text-6xl text-cyan-900 font-semibold font-light pb-12">
        Meet Our Team
      </h3>
      <div className="flex flex-col items-center lg:items-start lg:flex-row justify-center">
        <div className="w-104 max-w-lg mb-10 lg:mr-10 bg-black">
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
          <h3 className="font-bold text-3xl text-cyan-700 mb-4">World Class</h3>
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
