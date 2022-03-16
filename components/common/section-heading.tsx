type SectionHeadingProps = {
  color: 'white' | 'blue'
  marginBottom?: 'small' | 'medium' | 'large'
  marginTop?: 'small' | 'medium' | 'large'
  children: string
}

export function SectionHeading({
  color,
  children,
  marginBottom,
  marginTop,
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
      } ${
        marginTop === 'small'
          ? 'pt-8 md:pt-6'
          : marginTop === 'medium'
          ? 'pt-16 md:pt-12'
          : marginTop === 'large'
          ? 'pt-24 md:pt-16'
          : ''
      } px-8 animate-ascendslow`}
    >
      {children}
    </h2>
  )
}
