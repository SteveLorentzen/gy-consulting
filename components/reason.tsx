type ReasonProps = {
  title: string
  description: string
}

export const Reason: React.FC<ReasonProps> = ({
  title,
  description,
  children,
}) => {
  return (
    <div className="flex flex-col w-60 mx-8 mb-14 md:mb-4 text-white">
      <div className="flex flex-col items-center text-cyan-200 mb-4 text-4xl ">
        <div className="mr-2 mb-2">{children}</div>
        <h3 className="flex items-center justify-center font-bold  ">
          {title}
        </h3>
      </div>

      <div className="">
        <p>{description}</p>
      </div>
    </div>
  )
}
