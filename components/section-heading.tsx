export const SectionHeading: React.FC<{
  color: 'white' | 'blue'
  headingText: string
}> = ({ color, headingText }) => {
  return (
    <h3
      className={`text-6xl font-light ${
        color === 'blue' ? 'text-cyan-900' : 'text-white'
      } pb-12 px-4`}
    >
      {headingText}
    </h3>
  )
}
