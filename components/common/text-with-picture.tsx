import Image from 'next/image'
import { TextWithPictureProps } from 'interfaces-and-types/common/interfaces-and-types-common'

export function TextWithPicture({
  title,
  src,
  imageSide,
  theme,
  objectPosition,
  children,
}: TextWithPictureProps) {
  return (
    <div
      className={` flex flex-col lg:flex-row w-full lg:h-144 text-2xl ${
        theme === 'blue' ? 'text-white' : ''
      }`}
    >
      <div
        className={`relative w-full h-120 lg:h-full lg:basis-1/2 ${
          imageSide === 'left' ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <Image
          src={src}
          layout="fill"
          objectFit="cover"
          alt={title}
          objectPosition={objectPosition}
        />
      </div>
      <div
        className={`flex flex-col lg:justify-center items-center px-4 xxs:px-12 ${
          imageSide === 'right' ? 'lg:items-end' : 'lg:items-start'
        } w-full lg:py-24 pt-8 pb-32 sm:pb-24 lg:basis-1/2 ${
          imageSide === 'left' ? 'lg:pl-24' : 'lg:pr-24'
        } ${imageSide === 'left' ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <div className="w-full lg:w-104">
          <h2
            className={`text-4xl font-bold tracking-wider mb-8 lg:mb-4 ${
              theme === 'white' ? 'text-cyan-900' : ''
            }`}
          >
            {title}
          </h2>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}
