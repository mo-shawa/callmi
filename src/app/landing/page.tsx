'use client'
import HeroButton from '@/components/Button/HeroButton'
import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

const categoryData = [
  'DevOps',
  'UX Design',
  'Backend Development',
  'Fundraising',
  'Blockchain',

  'Brand',
  'SEO',
  'Financial Analysis',
  'Email Marketing',
  'Performance Marketing',
]

export default function LandingPage() {
  const timeoutRef = useRef<any>(null)

  const [categories, setCategories] = useState<string[]>(categoryData)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      shuffleCategories()
    }, 2000)
    return () => {
      clearTimeout(timeoutRef.current)
    }
  })

  const shuffleCategories = () => {
    setCategories((categories) => {
      const newCategories = [...categories]
      for (let i = newCategories.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newCategories[i], newCategories[j]] = [
          newCategories[j],
          newCategories[i],
        ]
      }
      return newCategories
    })

    timeoutRef.current = setTimeout(() => {
      shuffleCategories()
    }, 2000)
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
        <h1 className="max-w-2xl text-6xl font-bold">
          Schedule and bill your 1:1 calls in a blink 🔗
        </h1>

        <p className="mt-3 max-w-2xl text-2xl">
          Your time is valuable. Callmi gives you the platform to get paid for
          your expertise.
        </p>

        <HeroButton />
        <div className="mt-8 flex max-w-5xl flex-wrap items-center justify-around gap-4 sm:w-full">
          <motion.div
            layoutRoot
            className="flex flex-wrap items-center justify-center gap-8"
          >
            {categories.map((category) => (
              <CategoryPill
                shuffleCategories={shuffleCategories}
                category={category}
              />
            ))}
          </motion.div>
        </div>
      </main>
    </div>
  )
}

type CategoryPillProps = {
  category: string
  shuffleCategories: () => void
}

function CategoryPill({ category, shuffleCategories }: CategoryPillProps) {
  return (
    <motion.div
      layout
      layoutId={category}
      transition={{ type: 'spring', stiffness: 500, damping: 30, duration: 2 }}
      key={category}
      className="flex h-12 select-none items-center justify-center rounded-3xl border-2 border-black bg-white px-4"
    >
      <div className="whitespace-nowrap text-lg font-semibold">{category}</div>
    </motion.div>
  )
}
