type Props = {
  children?: React.ReactNode
}

const ExpertisePill = ({ children }: Props) => {
  return (
    <label className="inline-flex cursor-pointer items-center rounded-full bg-gray-200 p-4">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-gray-600" />
      <span className="ml-2 font-medium text-gray-700">{children}</span>
    </label>
  )
}

export default ExpertisePill
