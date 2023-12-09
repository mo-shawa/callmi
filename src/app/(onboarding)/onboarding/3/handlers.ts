type HandleSubmitProps = {
  costPerHour: number
  bio: string
  userId: string
  setLoading: React.Dispatch<React.SetStateAction<boolean>>
  push: (path: string) => void
}

export const handleSubmit = async ({
  costPerHour,
  bio,
  userId,
  setLoading,
  push,
}: HandleSubmitProps) => {
  setLoading(true)

  const res = await fetch(`/api/onboarding/${userId}/3`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      costPerHour,
      bio,
    }),
  })

  if (!res.ok) {
    console.error(res)
    setLoading(false)
    return
  }
  push('/onboarding/4')
}
