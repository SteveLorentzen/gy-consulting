import * as React from 'react'

type InputProps = {
  type: string
  placeholder: string
  inputRef: React.RefObject<HTMLInputElement>
}

export const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  inputRef,
}) => {
  return (
    <input
      type={type}
      ref={inputRef}
      placeholder={placeholder}
      className="w-full p-2 rounded border border-cyan-900 focus:border-cyan-700 my-4"
    ></input>
  )
}
