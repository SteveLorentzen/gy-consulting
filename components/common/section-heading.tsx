type SectionHeadingProps = {
  color: 'white' | 'blue'
  children: string
}

export function SectionHeading({ color, children }: SectionHeadingProps) {
  return (
    <h3
      className={`text-6xl text-center font-light z-10 ${
        color === 'blue' ? 'text-cyan-900' : 'text-white'
      } pb-24 md:pb-16 px-8`}
    >
      {children}
    </h3>
  )
}
