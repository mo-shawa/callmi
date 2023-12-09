'use client'

import { cn } from '@/utils/utils'
import { motion } from 'framer-motion'
import { Wrapper } from '../Form/WrapIfHref'

type Props = React.ComponentPropsWithoutRef<'button'> & {
  href?: string
}

export function PrimaryButton({ className, children, href, onClick }: Props) {
  return (
    <Wrapper href={href}>
      <motion.button
        variants={variants}
        whileHover='hover'
        whileTap='tap'
        className={cn(
          'bg-brand w-full max-w-sm rounded-3xl border py-4 text-white',
          className
        )}
        type='button'
        {...(onClick ? { onClick: onClick } : {})}
      >
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
