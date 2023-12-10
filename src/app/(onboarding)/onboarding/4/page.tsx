import Availability from '@/components/Form/Availability'
import { SubmitButton } from '@/components/Form/SubmitButton'
import { daysOfWeek } from '@/data/general'
import { formAction } from './action'
import OnboardingSkeleton from '../../OnboardingSkeleton'
import BackButton from '@/components/Form/BackButton'

export default function OnboardingStep4() {
  return (
    <OnboardingSkeleton step={4}>
      <BackButton href='/onboarding/3'>Back</BackButton>
      <p className='onboarding-step'>Step 4/5</p>
      <h1 className='onboarding'>When are you available?</h1>
      <form
        action={formAction}
        className='flex flex-col justify-center gap-8'
      >
        <div className='flex flex-col gap-6'>
          {daysOfWeek.map(day => (
            <Availability
              key={day}
              dayOfWeek={day}
            />
          ))}
        </div>
        <SubmitButton>Continue</SubmitButton>
      </form>
    </OnboardingSkeleton>
  )
}
