'use client'
import { Label } from '../ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '../ui/select'

type Props = {
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (value: string) => void
  disabled?: boolean
  required?: boolean
  options?: string[]
}

export default function SelectWithLabel({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  required,
  options,
}: Props) {
  return (
    <div className='relative flex w-full flex-col gap-1'>
      <Label htmlFor={name}>{label}</Label>
      <Select
        onValueChange={onChange}
        required={required}
        disabled={disabled}
        defaultValue={value}
        name={name}
      >
        <SelectTrigger>
          <SelectValue
            placeholder={placeholder}
            className='w-full'
          />
        </SelectTrigger>
        <SelectContent>
          {options?.map(option => (
            <SelectItem
              className='text-gray-500'
              key={option}
              value={option}
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
