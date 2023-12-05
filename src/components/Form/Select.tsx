type Props = {
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
  disabled?: boolean
  required?: boolean
  options?: string[]
}

export default function Select({
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
    <div className='form-control w-full rounded-xl'>
      <label
        className='label'
        htmlFor={name}
      >
        <span className='label-text font-medium'>{label}</span>
      </label>
      <select
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className='select select-bordered rounded-xl'
        disabled={disabled}
        required={required}
      >
        {placeholder && !value && (
          <option
            disabled
            selected
            hidden
            className='text-gray-400'
          >
            {placeholder}
          </option>
        )}
        {options?.map(option => (
          <option
            selected={value === option}
            value={option}
          >
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
