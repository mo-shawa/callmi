'use client'

import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'

type Props = {
  children?: React.ReactNode
}

export function SubmitButton({ children }: Props = { children: 'Submit' }) {
  const { pending } = useFormStatus()

  return (
    <motion.button
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      className="w-full max-w-sm rounded-3xl border bg-primary py-4 text-white"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? <span className="loading loading-spinner" /> : children}
    </motion.button>
  )
}

const variants = {
  hover: {
    scale: 1.1,
  },
  tap: {
    scale: 0.9,
  },
}
