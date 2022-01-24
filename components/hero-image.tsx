import Image from 'next/image'

type HeroImageProps = {
  src: string
  altText: string
  title: string
}

export const HeroImage: React.FC<HeroImageProps> = ({
  altText,
  src,
  title,
}) => {
  return (
    <div className="relative w-full max-h-128 h-min overflow-hidden">
      <Image
        src={src}
        alt={altText}
        height={300}
        width={800}
        layout="responsive"
      />

      <div className="absolute left-0 top-0 min-h-full min-w-full bg-green-">
        <div className="absolute top-3/4 justify-center items-center min-width-full bg-black opacity-80 rounded-r-lg -translate-y-1/2">
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl text-white z-10 py-1 sm:py-2 px-4 sm:px-8">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}
