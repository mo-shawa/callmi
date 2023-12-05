import { PrimaryButton } from '@/components/Button/PrimaryButton'
import Availability from '@/components/Form/Availability'
import { SubmitButton } from '@/components/Form/SubmitButton'
import { daysOfWeek } from '@/data/general'
import Image from 'next/image'
import { formAction } from './action'
import OnboardingSkeleton from '../../OnboardingSkeleton'

export default function Step4() {
  return (
    <OnboardingSkeleton step={4}>
      <small className='tracking-wider text-gray-500'>Step 4/5</small>
      <h1>When are you available?</h1>
      <form
        action={formAction}
        className='mt-8 flex flex-col justify-center gap-8'
      >
        <small className='-mt-6 text-gray-500'>1+ days per week</small>
        <div className='flex flex-col gap-4'>
          {daysOfWeek.map(day => (
            <Availability
              key={day}
              dayOfWeek={day}
            />
          ))}
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <PrimaryButton href='/onboarding/3'>Previous</PrimaryButton>
          <SubmitButton>Next</SubmitButton>
        </div>
      </form>
    </OnboardingSkeleton>
  )
}
