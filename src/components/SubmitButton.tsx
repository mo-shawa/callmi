'use client'

import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'

export function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <motion.button
      variants={variants}
      whileHover="hover"
      whileTap="tap"
      className="rounded-3xl border bg-primary py-4 text-white"
      type="submit"
      aria-disabled={pending}
    >
      {pending ? 'One sec...' : 'Submit'}
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
