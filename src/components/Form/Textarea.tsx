type Props = {
  name: string
  label: string
  placeholder?: string
  defaultValue?: string
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  disabled?: boolean
  required?: boolean
}

export default function Textarea({
  name,
  label,
  placeholder,
  defaultValue,
  onChange,
  disabled,
  required,
}: Props) {
  return (
    <div className="form-control w-full">
      <label className="label" htmlFor={name}>
        <span className="label-text">{label}</span>
      </label>
      <textarea
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        className="textarea textarea-bordered min-h-[25rem]"
        minLength={20}
        defaultValue={defaultValue}
        disabled={disabled}
        required={required}
      />
    </div>
  )
}
