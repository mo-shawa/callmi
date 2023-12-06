'use client'
import HeroButton from '@/components/Button/HeroButton'
// import { motion } from 'framer-motion'
import Image from 'next/image'
// import useShuffleCategories from '@/hooks/useShuffleCategories'
import CategoryPill from '@/components/Landing/CategoryPill'
import FeatureCard from '@/components/Landing/FeatureCard'
import PricingCard from '@/components/Landing/Pricing/PricingCard'
import { categoryData, featuresData, faqData } from '@/data/landing'
import FaqItem from '@/components/Landing/FAQ'

export default function LandingPage() {
  // const { categories } = useShuffleCategories(categoryData)
  const categories = categoryData

  return (
    <main className='flex flex-col items-center justify-center bg-white pt-28 sm:pt-20'>
      <section
        id='hero'
        className='flex min-h-screen flex-col items-center justify-center px-4 pb-40 text-center'
      >
        <div className='flex flex-col items-center justify-center gap-4'>
          <h1 className='max-w-2xl text-6xl font-bold'>
            Schedule and bill your 1:1 calls in a blink 🔗
          </h1>
          <p className='mt-3 max-w-2xl text-2xl'>
            Your time is valuable. Callmi gives you the platform to get paid for
            your expertise.
          </p>
          <HeroButton />
        </div>
        <div className='mt-8 flex max-w-5xl flex-wrap items-center justify-around gap-4 sm:w-full'>
          <div className='flex  flex-wrap items-center justify-center gap-8'>
            {categories.map(category => (
              <CategoryPill
                key={category}
                category={category}
              />
            ))}
          </div>
        </div>
      </section>
      <section className='w-full rounded bg-stone-100 px-4 pt-12'>
        <div className='mx-auto -mt-40 grid w-full max-w-7xl grid-cols-1 gap-8 rounded-t-3xl border-t bg-white px-8 py-16 shadow-xl md:grid-cols-2'>
          <Image
            src='/landing/booking.png'
            alt='booking UI'
            width={360}
            height={522}
            className='mx-auto rounded-3xl border-t shadow-xl'
          />
          <div
            id='features'
            className='grid grid-cols-1 grid-rows-6 gap-4 md:grid-cols-2 md:grid-rows-3'
          >
            {featuresData.map(({ text, soon }, idx) => (
              <FeatureCard
                soon={soon}
                key={idx}
              >
                {text}
              </FeatureCard>
            ))}
          </div>
        </div>
        <div
          id='pricing'
          className='mx-auto flex w-full max-w-7xl flex-col flex-wrap items-center justify-start gap-8 bg-white p-8 shadow-xl'
        >
          <h1 className='text-center font-semibold'>Zero up front costs</h1>
          <div className='grid grid-cols-1 grid-rows-1 gap-8 sm:grid-cols-2'>
            <div className='col-span-1 flex gap-4'>
              <Image
                src='/svg/check.svg'
                alt='check'
                width={24}
                height={24}
              />
              <p>No credit card required.</p>
            </div>
            <div className='col-span-1 flex gap-4'>
              <Image
                src='/svg/check.svg'
                alt='check'
                width={24}
                height={24}
              />
              <p>No hidden costs.</p>
            </div>
          </div>
          <p className='w-full max-w-4xl text-center text-gray-500'>
            We want to make money when you make money. Enjoy all that Callmi has
            to offer, including scheduling and payments for free, forever.
          </p>
          <div
            id='pricing-cards'
            className='flex w-full max-w-3xl flex-wrap justify-evenly gap-8 md:flex-nowrap'
          >
            <PricingCard
              planName='Starter'
              cost='Free, forever'
              subtitle='For individuals getting started'
              features={[
                {
                  text: 'We take 20% service free per call',
                  isReady: true,
                },
                {
                  text: 'Dedicated human support',
                  isReady: true,
                },
                {
                  text: 'Donate your fees to a cause',
                  isReady: true,
                },
                { text: 'Calendar sync', isReady: false },
              ]}
            />
            <PricingCard
              planName='Professional'
              cost='15 USD / month'
              subtitle='For power users and growing teams'
              features={[
                {
                  text: 'Only credit card and withdrawal fees',
                  isReady: true,
                },
                {
                  text: 'Dedicated human support',
                  isReady: true,
                },
                {
                  text: 'Donate your fees to a cause',
                  isReady: true,
                },
                { text: 'Calendar sync', isReady: false },
                { text: 'Paid courses', isReady: false },
                { text: 'Digital products', isReady: false },
              ]}
            />
          </div>
        </div>
        <div
          id='faq'
          className='mx-auto flex w-full max-w-7xl flex-col flex-wrap items-center justify-start gap-8 bg-white p-8 shadow-xl'
        >
          <h1 className='text-center font-semibold'>
            Frequently Asked Questions
          </h1>
          {faqData.map(({ question, answer }, idx) => (
            <FaqItem
              key={idx}
              question={question}
              answer={answer}
              isLast={idx === faqData.length - 1}
            />
          ))}
        </div>
      </section>
    </main>
  )
}
