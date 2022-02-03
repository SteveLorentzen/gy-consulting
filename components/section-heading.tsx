type SectionHeadingProps = {
  color: 'white' | 'blue'
  headingText: string
}

export function SectionHeading({ color, headingText }: SectionHeadingProps) {
  return (
    <h3
      className={`text-6xl font-light ${
        color === 'blue' ? 'text-cyan-900' : 'text-white'
      } pb-24 md:pb-16 px-4`}
    >
      {headingText}
    </h3>
  )
}
