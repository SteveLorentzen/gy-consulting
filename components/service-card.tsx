type ServiceCardProps = {
  title: string
  description: string
  buttonText: string
  buttonAction: () => void
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  children,
  buttonText,
  buttonAction,
}) => {
  return (
    <div className="flex flex-col justify-between items-center h-80 max-w-sm  px-5 py-6 text-cyan-700">
      {children}
      <div className="flex flex-col justify-between text-gray-800  h-3/5">
        <h3 className="text-2xl font-bold h-1/3 ">{title}</h3>
        <h3 className="h-2/3">{description}</h3>
      </div>

      <button
        className="text-xl  active:text-green-800 border-4 border-cyan-700 px-6 py-2 rounded hover:bg-cyan-50"
        onClick={buttonAction}
      >
        {buttonText}
      </button>
    </div>
  )
}
