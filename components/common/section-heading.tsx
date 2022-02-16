type SectionHeadingProps = {
  color: 'white' | 'blue'
  marginBottom: 'none' | 'small' | 'medium' | 'large'
  children: string
}

export function SectionHeading({
  color,
  children,
  marginBottom,
}: SectionHeadingProps) {
  return (
    <h2
      className={`text-6xl text-center font-light z-10 ${
        color === 'blue' ? 'text-cyan-900' : 'text-white'
      } ${
        marginBottom === 'small'
          ? 'pb-8 md:pb-6'
          : marginBottom === 'medium'
          ? 'pb-16 md:pb-12'
          : marginBottom === 'large'
          ? 'pb-24 md:pb-16'
          : ''
      } px-8`}
    >
      {children}
    </h2>
  )
}
