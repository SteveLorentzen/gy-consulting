import { ReactNode } from 'react'

export function ContentContainerStyled({
  children,
  bgColor,
}: {
  children: ReactNode
  bgColor: 'blue' | 'white'
}) {
  return (
    <div
      className={`flex flex-col items-center py-24 ${
        bgColor === 'white' ? 'bg-white' : 'bg-cyan-800'
      } w-full`}
    >
      {children}
    </div>
  )
}
