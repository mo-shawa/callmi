'use client'

import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'
import { useFormStatus } from 'react-dom'

type Props = {
  children?: React.ReactNode
}

export function WaitlistSubmitButton({ children }: Props) {
  const { pending } = useFormStatus()

  return (
    <motion.button
      variants={variants}
      whileHover='hover'
      whileTap='tap'
      className='rounded-3xl border bg-brand py-4 text-white'
      type='submit'
      aria-disabled={pending}
    >
      {pending ? (
        <Loader2 className='mx-auto h-6 w-6 animate-spin text-white' />
      ) : (
        children
      )}
    </motion.button>
  )
}

const variants = {
  hover: {
    scale: 1.05,
  },
  tap: {
    scale: 1,
  },
}
