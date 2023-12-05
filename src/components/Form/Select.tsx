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
        <span className='label-text'>{label}</span>
      </label>
      <select
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className='select select-bordered rounded-xl'
        defaultValue={value}
        disabled={disabled}
        required={required}
      >
        {placeholder && (
          <option
            disabled
            selected
            hidden
            className='opacity-50'
          >
            {placeholder}
          </option>
        )}
        {options?.map(option => <option value={option}>{option}</option>)}
      </select>
    </div>
  )
}
