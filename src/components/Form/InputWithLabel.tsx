import { Input } from '../ui/input'

type Props = {
  name: string
  label: string
  type: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
}

export default function InputWithLabel({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
}: Props) {
  return (
    <div className='form-control w-full'>
      <label
        className='label'
        htmlFor={name}
      >
        <span className='label-text'>{label}</span>
      </label>
      <Input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={value}
        disabled={disabled}
        required={required}
      />
    </div>
  )
}
