'use client'
import HeroButton from '@/components/Button/HeroButton'
import { motion } from 'framer-motion'
import Image from 'next/image'
import useShuffleCategories from '@/hooks/useShuffleCategories'
import CategoryPill from '@/components/Landing/CategoryPill'
import FeatureCard from '@/components/Landing/FeatureCard'

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

const features = [
  { text: 'Integrated payments', soon: false },
  { text: 'Timezone support', soon: true },
  { text: 'Flexible availability', soon: false },
  { text: 'Calendar sync', soon: true },
  { text: 'Integrated payments', soon: false },
  { text: 'Automatic rescheduling', soon: true },
]

export default function LandingPage() {
  // const { categories } = useShuffleCategories(categoryData)
  const categories = categoryData

  return (
    <main className="mt-20 flex flex-col items-center justify-center bg-white px-4 sm:mt-0">
      <section
        id="hero"
        className="flex min-h-screen flex-col items-center justify-center pb-40  text-center"
      >
        <motion.div
          layout
          className="flex flex-col items-center justify-center gap-4"
        >
          <h1 className="max-w-2xl text-6xl font-bold">
            Schedule and bill your 1:1 calls in a blink 🔗
          </h1>
          <p className="mt-3 max-w-2xl text-2xl">
            Your time is valuable. Callmi gives you the platform to get paid for
            your expertise.
          </p>
          <HeroButton />
        </motion.div>
        <div className="mt-8 flex max-w-5xl flex-wrap items-center justify-around gap-4 sm:w-full">
          <motion.div className="flex  flex-wrap items-center justify-center gap-8">
            {categories.map((category) => (
              <CategoryPill key={category} category={category} />
            ))}
          </motion.div>
        </div>
      </section>
      <section className="w-full rounded bg-slate-100 pt-12">
        <div className="mx-auto -mt-40 grid w-full max-w-7xl grid-cols-1 gap-8 rounded-t-3xl border-t bg-white px-8 pt-16 shadow md:grid-cols-2">
          <Image
            src="/landing/booking.png"
            alt="booking UI"
            width={360}
            height={522}
            className="mx-auto rounded-3xl border-t shadow-xl"
          />
          <div
            id="features"
            className="grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3"
          >
            {features.map(({ text, soon }, idx) => (
              <FeatureCard soon={soon} key={idx}>
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
