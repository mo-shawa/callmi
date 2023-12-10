import { ease } from '@/utils/framer'
import { motion } from 'framer-motion'

type Props = {
  category: string
}

export default function CategoryPill({ category }: Props) {
  return (
    <motion.div
      layout
      layoutId={category}
      transition={{
        layout: { ease, duration: 1 },
      }}
      className='flex h-12 select-none items-center justify-center rounded-3xl border-2 border-black bg-white px-4'>
      <div className='whitespace-nowrap text-lg font-semibold'>{category}</div>
    </motion.div>
  )
}
