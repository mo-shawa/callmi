export default function handleSelect<T extends Expertise | Industry>(
  e: React.ChangeEvent<HTMLInputElement>,
  data: T,
  selected: T[],
  setSelected: React.Dispatch<React.SetStateAction<T[]>>
) {
  if (selected.includes(data)) {
    setSelected(selected.filter((e) => e !== data))
  } else {
    if (selected.length === 2) {
      e.preventDefault()
      return
    }
    setSelected([...selected, data])
  }
}
