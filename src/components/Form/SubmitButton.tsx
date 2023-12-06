'use client'

import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'

type Props = {
  children?: React.ReactNode
}

export function SubmitButton({ children }: Props = { children: 'Submit' }) {
  const { pending } = useFormStatus()

  return (
    <>
      <motion.button
        variants={variants}
        whileHover='hover'
        whileTap='tap'
        className='hidden w-full rounded-xl border bg-black px-4 py-3 text-white md:block'
        type='submit'
        aria-disabled={pending}
      >
        {pending ? <span className='loading loading-spinner w-4' /> : children}
      </motion.button>
      <motion.button
        // variants={variants}
        // whileHover='hover'
        // whileTap='tap'
        className='fixed bottom-6 left-1/2 mx-auto block w-full max-w-[92vw] -translate-x-1/2 rounded-xl border bg-black py-3 text-white md:hidden'
        type='submit'
      >
        {pending ? <span className='loading loading-spinner w-4' /> : children}
      </motion.button>
    </>
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
