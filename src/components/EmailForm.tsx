'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { AnimationProps, motion } from 'framer-motion'
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
      <div>
        <motion.div
          variants={logoVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center gap-4"
        >
          <Image src="/logo.svg" alt="logo" height={96} width={96} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg font-light"
        >
          Thanks for signing up!
        </motion.p>
      </div>
    )

  return (
    <motion.form
      variants={formVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
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
    </motion.form>
  )
}

const formVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1, transition: { ease: 'easeInOut' } },
}

const logoVariants: AnimationProps['variants'] = {
  hidden: { opacity: 0, scale: 0.8, y: -100 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: 'spring', bounce: 0.55 },
  },
}
