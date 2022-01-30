export const Button: React.FC<{
  buttonAction: () => void
  buttonText: string
  fill?: boolean
}> = ({ buttonAction, buttonText, fill }) => {
  let myButton = (
    <button
      className="text-3xl md:text-2xl active:text-cyan-600 border text-cyan-800 border-cyan-800 px-6 py-2 rounded hover:bg-cyan-50"
      onClick={buttonAction}
    >
      {buttonText}
    </button>
  )

  if (fill) {
    myButton = (
      <button
        className="text-3xl md:text-2xl active:text-cyan-100 border bg-cyan-900 text-white px-6 py-2 rounded hover:bg-cyan-800"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    )
  }
  return myButton
}
