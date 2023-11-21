'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { subscribe } from '@/actions'
import { SubmitButton } from '@/components/Form/SubmitButton'
import { logoVariants, formVariants, getFadeInProps } from '@/utils/framer'

export default function EmailForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')
  const clientAction = async (data: FormData) => {
    const res = await subscribe(data)

    if (res.status === 200) {
      setSubmitted(true)
    }

    if (res.status === 400) {
      setError(res.body.error!)
    }
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
          <Image src="/svg/logo.svg" alt="logo" height={96} width={96} />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center text-lg font-light"
        >
          Thanks for signing up!
        </motion.p>
      </div>
    )

  return (
    <motion.div layout className="max-w-min">
      <motion.form
        layout
        variants={formVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col justify-center gap-2"
        action={clientAction}
      >
        <label htmlFor="email">Email</label>
        <input
          className="rounded-3xl border border-dark p-4"
          type="email"
          name="email"
          placeholder="your@email.com"
          required
        />
        <SubmitButton>Sign up</SubmitButton>
      </motion.form>
      {error && (
        <motion.small {...getFadeInProps()} className=" text-red-500">
          {error}
        </motion.small>
      )}
    </motion.div>
  )
}
