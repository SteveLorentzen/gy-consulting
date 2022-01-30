import * as React from 'react'

type InputProps = {
  type: string
  placeholder: string
  inputRef: React.RefObject<HTMLInputElement>
}

export function Input({ type, placeholder, inputRef }: InputProps) {
  return (
    <input
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      className="w-full p-2 rounded border border-cyan-900 focus:border-cyan-700 my-4"
    ></input>
  )
}
