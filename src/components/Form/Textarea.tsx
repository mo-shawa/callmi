type InputProps = {
  name: string
  label: string
  placeholder?: string
  value?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  required?: boolean
}

export default function Textarea({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  required,
}: InputProps) {
  return (
    <div className="form-control w-full max-w-sm">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className="textarea textarea-bordered w-full"
        minLength={20}
        defaultValue={value}
        disabled={disabled}
        required={required}
      />
    </div>
  )
}
