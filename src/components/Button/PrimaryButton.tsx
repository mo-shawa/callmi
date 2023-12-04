'use client'

import { cn } from '@/utils/utils'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  className?: string
  children?: React.ReactNode
  href?: string
  onClick?: () => void
}

export function PrimaryButton({ className, children, href, onClick }: Props) {
  const Wrapper = ({ children }: Props) =>
    href ? <Link href={href}>{children}</Link> : <>{children}</>

  return (
    <Wrapper>
      <motion.button
        variants={variants}
        whileHover='hover'
        whileTap='tap'
        className={cn(
          'w-full max-w-sm rounded-3xl border bg-primary py-4 text-white',
          className
        )}
        type='button'
        {...(onClick ? { onClick: onClick } : {})}>
        {children}
      </motion.button>
    </Wrapper>
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
