import React, { useState } from 'react'
import Image from 'next/image'
export default function EmailForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
    setSubmitted(true)
  }

  if (submitted)
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <Image src="/logo.svg" alt="logo" height={96} width={96} />
        <p className="text-lg font-light">Thanks for signing up!</p>
      </div>
    )

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        className="border-dark rounded-3xl border p-4"
        type="email"
        placeholder="your@email.com"
        required
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button
        className="bg-primary text-light rounded-3xl border py-4"
        type="submit"
      >
        Submit
      </button>
    </form>
  )
}
