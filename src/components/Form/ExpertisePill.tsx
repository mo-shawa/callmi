import handleSelect from '@/app/onboarding/2/handlers'

type Props<T extends Expertise | Industry> = {
  children: React.ReactNode
  data: T
  isSelected: boolean
  selected: T[]
  setSelected: React.Dispatch<React.SetStateAction<T[]>>
}

const SelectPill = <T extends Expertise | Industry>({
  children,
  data,
  isSelected,
  selected,
  setSelected,
}: Props<T>) => {
  return (
    <label
      className={`select-pill inline-flex cursor-pointer select-none items-center rounded-full  border p-4 ${
        isSelected
          ? 'border-green-500 bg-green-200 text-green-800'
          : 'bg-gray-200'
      }`}
    >
      <input
        onChange={(e) => handleSelect<T>(e, data, selected, setSelected)}
        type="checkbox"
      />
      <span className="font-medium">{children}</span>
    </label>
  )
}

export default SelectPill
