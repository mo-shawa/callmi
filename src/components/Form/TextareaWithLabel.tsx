import { Label } from '../ui/label'
import { Textarea } from '../ui/textarea'

type Props = React.TextareaHTMLAttributes<'string'> & {
  label: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  labelAlt?: string
}

export default function TextareaWithLabel({
  name,
  label,
  placeholder,
  defaultValue,
  onChange,
  disabled,
  required,
  labelAlt,
}: Props) {
  return (
    <div className='relative flex w-full flex-col gap-1'>
      <Label htmlFor={name}>{label}</Label>
      <Textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className='textarea textarea-bordered min-h-[15rem] resize-none rounded-xl'
        minLength={20}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
      />
      <label
        className='label'
        htmlFor={name}
      >
        <span className='label-text font-light text-gray-500'>{labelAlt}</span>
      </label>
    </div>
  )
}
