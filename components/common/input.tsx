import * as React from 'react'

type InputProps = {
  name?: string
  type: string
  placeholder: string
  inputRef?: React.RefObject<HTMLInputElement>
  onChange?: (e: React.SyntheticEvent) => void
}

export function Input({
  type,
  placeholder,
  inputRef,
  name,
  onChange,
}: InputProps) {
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
        ref={inputRef ? inputRef : undefined}
        placeholder={placeholder}
        className="w-full p-2 rounded border border-cyan-900 focus:border-cyan-700 my-4"
        onChange={onChange ? onChange : undefined}
      ></input>
    </>
  )
}
