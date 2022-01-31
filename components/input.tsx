import * as React from 'react'

type InputProps = {
  name?: string
  type: string
  placeholder: string
  inputRef: React.RefObject<HTMLInputElement>
}

export function Input({ type, placeholder, inputRef, name }: InputProps) {
  return (
    <>
      {name ? (
        <label className="text-cyan-900 font-bold" htmlFor={name}>
          {name}
        </label>
      ) : null}
      <input
        type={type}
        name={name ? name : type}
        ref={inputRef}
        placeholder={placeholder}
        className="w-full p-2 rounded border border-cyan-900 focus:border-cyan-700 my-4"
      ></input>
    </>
  )
}
