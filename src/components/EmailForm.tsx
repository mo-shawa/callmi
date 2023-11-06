import React, { useState } from 'react'

export default function EmailForm() {
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(email)
  }

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input
        className="border-dark rounded-3xl border p-4"
        type="email"
        placeholder="your@email.com"
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
