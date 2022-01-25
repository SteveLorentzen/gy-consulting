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
    </div>
  )
}
