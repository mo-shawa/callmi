'use client'
type InputProps = {
  name: string
  label: string
  type: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  required?: boolean
}

export default function Input({
  name,
  label,
  type,
  placeholder,
  value,
  onChange,
  disabled,
  required,
}: InputProps) {
  return (
    <div className="form-control w-full max-w-xs">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className="input input-bordered"
        defaultValue={value}
        disabled={disabled}
        required={required}
      />
    </div>
  )
}
