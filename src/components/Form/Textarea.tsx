import { Textarea } from '../ui/textarea'

type Props = {
  name: string
  label: string
  placeholder?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  required?: boolean
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
    <div className='form-control w-full'>
      <label
        className='label'
        htmlFor={name}
      >
        <span className='label-text font-medium'>{label}</span>
      </label>
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
