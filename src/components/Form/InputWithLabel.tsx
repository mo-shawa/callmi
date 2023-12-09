import { Input } from '../ui/input'
import { Label } from '../ui/label'

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
    <div className='relative flex w-full flex-col gap-1'>
      <Label htmlFor={name}>{label}</Label>
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
