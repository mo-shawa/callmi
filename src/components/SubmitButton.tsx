'use client'

import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <button
      className="rounded-3xl border bg-primary py-4 text-white"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? 'One sec...' : 'Submit'}
    </button>
  )
}
