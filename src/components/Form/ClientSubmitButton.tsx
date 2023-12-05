'use client'

import { motion } from 'framer-motion'

type Props = {
  children?: React.ReactNode
  onClick?: () => void
  loading?: boolean
}

export function ClientSubmitButton({ children, onClick, loading }: Props) {
  return (
    <motion.button
      variants={variants}
      whileHover='hover'
      whileTap='tap'
      className='w-full rounded-xl border bg-black px-4 py-3 text-white'
      type='button'
      onClick={onClick}
    >
      {loading ? <span className='loading loading-spinner' /> : children}
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
