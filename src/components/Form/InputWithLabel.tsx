import { Input } from '../ui/input'

type Props = React.InputHTMLAttributes<'number' | 'string'> & {
  label: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  isCurrency?: boolean
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
  isCurrency,
  min,
}: Props) {
  return (
    <div className='form-control relative w-full'>
      <label
        className='label'
        htmlFor={name}
      >
        <span className='label-text font-medium'>{label}</span>
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
        isCurrency={isCurrency}
        min={min}
      />
    </div>
  )
}
