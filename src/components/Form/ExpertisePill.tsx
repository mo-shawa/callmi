type Props = {
  children: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>, data: any) => void
  data: any
  isSelected: boolean
} // I give up on this one

const SelectPill = ({ children, onChange, data, isSelected }: Props) => {
  return (
    <label
      className={`select-pill inline-flex cursor-pointer select-none items-center rounded-full  border p-4 ${
        isSelected
          ? 'border-green-500 bg-green-200 text-green-800'
          : 'bg-gray-200'
      }`}
    >
      <input onChange={(e) => onChange(e, data)} type="checkbox" />
      <span className="font-medium">{children}</span>
    </label>
  )
}

export default SelectPill
