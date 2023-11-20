'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  href?: string
}

export function PrimaryButton({ children, href }: Props) {
  const Wrapper = ({ children }: Props) =>
    href ? <Link href={href}>{children}</Link> : <>{children}</>

  return (
    <Wrapper>
      <motion.button
        variants={variants}
        whileHover="hover"
        whileTap="tap"
        className="w-full max-w-sm rounded-3xl border bg-primary py-4 text-white"
        type="submit"
      >
        {children}
      </motion.button>
    </Wrapper>
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
