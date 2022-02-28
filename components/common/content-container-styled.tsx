import { ReactNode } from 'react'

export function ContentContainerStyled({
  children,
  bgColor,
  padding,
}: {
  children: ReactNode
  bgColor: 'blue' | 'white'
  padding?: 'lg'
}) {
  return (
    <div
      className={`flex flex-col items-center ${
        padding === 'lg' ? 'py-24' : 'none'
      } ${bgColor === 'white' ? 'bg-white' : 'bg-cyan-800'} w-full`}
    >
      {children}
    </div>
  )
}
