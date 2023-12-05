import { redirect } from 'next/navigation'

export default function handleSelect<T extends Expertise | Industry>(
  e: React.ChangeEvent<HTMLInputElement>,
  data: T,
  selected: T[],
  setSelected: React.Dispatch<React.SetStateAction<T[]>>,
  max: number
) {
  if (selected.includes(data)) {
    setSelected(selected.filter(e => e !== data))
  } else {
    if (selected.length === max) {
      e.preventDefault()
      return
    }
    setSelected([...selected, data])
  }

  console.log({ selected })
}

type HandleSubmitProps = {
  selectedExpertises: Expertise[]
  selectedIndustries: Industry[]
  showToast: () => void
  userId: string
}

export const handleSubmit = async ({
  selectedExpertises,
  selectedIndustries,
  showToast,
  userId,
}: HandleSubmitProps) => {
  if (selectedExpertises.length === 0 || selectedIndustries.length === 0) {
    return showToast()
  }
  console.log({ selectedExpertises, selectedIndustries })

  const res = await fetch(`/api/onboarding/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      expertise: selectedExpertises,
      industry: selectedIndustries,
    }),
  })

  if (!res.ok) {
    console.error(res)
    return
  }

  redirect('/onboarding/3')
}
