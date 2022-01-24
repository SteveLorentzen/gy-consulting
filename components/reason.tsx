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
    <div className="flex flex-col w-60 mx-8 mb-14 md:mb-4">
      <h3 className="flex items-center justify-center text-3xl font-semibold text-green-900 mb-4 ">
        <span className="mr-2">{children}</span>
        {title}
      </h3>
      <div className="">
        <p>{description}</p>
      </div>
    </div>
  )
}
