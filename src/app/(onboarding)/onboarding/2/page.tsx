'use client'
import { useSession } from 'next-auth/react'
import SelectPill from '@/components/Form/SelectPill'
import { useState } from 'react'
import { expertiseData, industryData } from '@/data/general'
import { PrimaryButton } from '@/components/Button/PrimaryButton'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useToast from '@/hooks/useToast'
import { useRouter } from 'next/navigation'
import { convertEnumToText } from '@/utils/prisma'
import Image from 'next/image'
import ImageRight from '../../ImageRight'
import BackButton from '@/components/Form/BackButton'
import { handleSubmit } from './handlers'

export default function OnboardingStep2() {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const { element: toast, show: showToast } = useToast({
    icon: <ExclamationTriangleIcon className='h-6 w-6 text-yellow-900' />,
    message: 'Please select at least one of each',
    className: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  })

  const [selectedExpertises, setSelectedExpertises] = useState<Expertise[]>(
    (session?.user.expertise.map(e => convertEnumToText(e)) as Expertise[]) ||
      []
  )

  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>(
    (session?.user.industry.map(e => convertEnumToText(e)) as Industry[]) || []
  )

  if (status === 'unauthenticated') return push('/api/auth/signin')
  return (
    <main className='grid w-full flex-1 grid-cols-1 bg-white md:grid-cols-2'>
      <div
        id='left'
        className='col-span-1'
      >
        <div className='relative flex items-center p-4'>
          <Image
            src='/svg/logo.svg'
            alt='Callmi logo'
            width='64'
            height='64'
          />
          <h1 className='text-3xl '>Callmi</h1>
          <div className='absolute bottom-0 left-0 h-1 w-2/5 rounded-r bg-primary'></div>
        </div>
        <div className='mx-auto flex w-full max-w-xl flex-col gap-8 px-4 pt-12'>
          <BackButton href='/onboarding/1'>Back</BackButton>
          <small className='font-medium tracking-wider text-gray-500'>
            Step 2/5
          </small>
          <h1>Expertise (up to 3):</h1>

          <form
            // onSubmit={handleSubmit}
            className='mt-8 flex flex-col justify-center gap-8'
          >
            <div className='flex flex-wrap gap-4'>
              {expertiseData.map(expertise => (
                <SelectPill
                  key={expertise}
                  isSelected={selectedExpertises.includes(expertise)}
                  selected={selectedExpertises}
                  setSelected={setSelectedExpertises}
                  data={expertise}
                  max={3}
                >
                  {expertise}
                </SelectPill>
              ))}
            </div>
            <h1>In which industries?</h1>
            <small className='-mt-6 text-gray-500'>Select up to 2</small>
            <div className='flex flex-wrap gap-4'>
              {industryData.map(industry => (
                <SelectPill
                  key={industry}
                  isSelected={selectedIndustries.includes(industry)}
                  selected={selectedIndustries}
                  setSelected={setSelectedIndustries}
                  data={industry}
                  max={2}
                >
                  {industry}
                </SelectPill>
              ))}
            </div>
            <div className='grid grid-cols-2 gap-4'>
              <PrimaryButton
                onClick={() =>
                  handleSubmit({
                    selectedExpertises,
                    selectedIndustries,
                    userId: session?.user.id!,
                    showToast,
                  })
                }
              >
                Next
              </PrimaryButton>
            </div>
          </form>

          {toast}
        </div>
      </div>
      <ImageRight />
    </main>
  )
}
