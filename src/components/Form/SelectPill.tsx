import handleSelect from '@/app/(onboarding)/onboarding/2/handlers'
import { cn } from '@/utils/utils'

type Props<T extends Expertise | Industry> = {
  children: React.ReactNode
  data: T
  isSelected: boolean
  selected: T[]
  setSelected: React.Dispatch<React.SetStateAction<T[]>>
  max: number
}

const SelectPill = <T extends Expertise | Industry>({
  children,
  data,
  isSelected,
  selected,
  setSelected,
  max,
}: Props<T>) => {
  return (
    <label
      className={cn(
        'select-pill inline-flex cursor-pointer select-none items-center rounded-full border border-gray-300 px-3 py-1.5',
        isSelected
          ? 'border-brand bg-red-100 text-gray-800'
          : 'bg-white text-gray-700'
      )}
    >
      <input
        onChange={e => handleSelect<T>(e, data, selected, setSelected, max)}
        type='checkbox'
      />
      <span>{children}</span>
    </label>
  )
}

export default SelectPill
