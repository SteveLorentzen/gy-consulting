import { ObjectPosition } from 'interfaces-and-types/common/interfaces-and-types-common'
import Image from 'next/image'

export function PictureWithHeadingAndText({
  heading,
  subHeading,
  src,
  style,
  objectPosition,
  children,
  isBlueBackground,
}: {
  heading: string
  subHeading?: string
  src: string
  style: 'side' | 'top'
  objectPosition: ObjectPosition
  children?: React.ReactNode
  isBlueBackground?: boolean
}) {
  return (
    <div className={`flex flex-col ${style === 'side' ? 'lg:flex-row' : ''}`}>
      <div
        className={`relative ${
          style === 'side' ? 'lg:basis-full' : ''
        } h-88 xxs:h-104 xs:h-120 ${
          style === 'side' ? 'sm:h-128' : 'sm:h-136'
        } bg-gray-500 ${style === 'side' ? 'xl:h-104' : 'xl:h-120'} ${
          style === 'side' ? 'lg:h-120' : 'lg:h-128'
        } mb-12 ${style === 'side' ? 'lg:mb-0' : ''}`}
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          objectPosition={objectPosition}
          alt="hands in"
        ></Image>
      </div>
      <div
        className={`basis-full ${style === 'side' ? 'lg:ml-12' : ''} ${
          isBlueBackground ? 'text-white' : ''
        }`}
      >
        <h2 className="text-5xl mb-4">{heading}</h2>
        {subHeading ? (
          <h3
            className={`text-3xl ${
              isBlueBackground ? 'text-white' : 'text-cyan-900'
            } mb-8`}
          >
            {subHeading}
          </h3>
        ) : null}

        <p>{children}</p>
      </div>
    </div>
  )
}
