'use client'
import { useSession } from 'next-auth/react'
import SelectPill from '@/components/Form/SelectPill'
import { useState } from 'react'
import { expertiseData, industryData } from '@/data/general'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import useToast from '@/hooks/useToast'
import { useRouter } from 'next/navigation'
import { convertEnumToText } from '@/utils/prisma'
import BackButton from '@/components/Form/BackButton'
import { handleSubmit } from './handlers'
import { ClientSubmitButton } from '@/components/Form/ClientSubmitButton'
import OnboardingSkeleton from '../../OnboardingSkeleton'

export default function OnboardingStep2() {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const { element: toast, show: showToast } = useToast({
    icon: <ExclamationTriangleIcon className='h-6 w-6 text-yellow-900' />,
    message: 'Please select at least one of each',
    className: 'bg-yellow-100 border-yellow-500 text-yellow-800',
  })

  const [selectedExpertises, setSelectedExpertises] = useState<Expertise[]>(
    (session?.user.expertise.map(el => convertEnumToText(el)) as Expertise[]) ||
      []
  )

  const [selectedIndustries, setSelectedIndustries] = useState<Industry[]>(
    (session?.user.industry.map(el => convertEnumToText(el)) as Industry[]) ||
      []
  )

  const [loading, setLoading] = useState(false)

  if (status === 'unauthenticated') return push('/api/auth/signin')
  return (
    <OnboardingSkeleton step={2}>
      <BackButton href='/onboarding/1'>Back</BackButton>
      <p className='onboarding-step'>Step 2/5</p>
      <h1 className='onboarding'>Expertise (up to 3):</h1>

      <form
        // onSubmit={handleSubmit}
        className='flex flex-col justify-center gap-8'
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
        <h1 className='onboarding'>Industry (up to 2):</h1>

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

        <ClientSubmitButton
          loading={loading}
          onClick={() =>
            handleSubmit({
              selectedExpertises,
              selectedIndustries,
              userId: session?.user.id!,
              showToast,
              setLoading,
              push,
            })
          }
        >
          Continue
        </ClientSubmitButton>
      </form>

      {toast}
    </OnboardingSkeleton>
  )
}
