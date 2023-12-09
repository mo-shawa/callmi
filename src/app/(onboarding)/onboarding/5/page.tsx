// 'use client'

import BackButton from '@/components/Form/BackButton'
import OnboardingSkeleton from '../../OnboardingSkeleton'
import { SubmitButton } from '@/components/Form/SubmitButton'
import InputWithLabel from '@/components/Form/InputWithLabel'
import formAction from './action'
import { getServerSession } from 'next-auth'
import options from '@/app/api/auth/[...nextauth]/options'

export default async function OnboardingStep5() {
  const session = await getServerSession(options)
  return (
    <OnboardingSkeleton step={5}>
      <BackButton href='/onboarding/4'>Back</BackButton>
      <p className='onboarding-step'>Step 5/5</p>
      <h1 className='onboarding'>Donating to a charity? (Optional)</h1>
      <p className='text-base font-light text-gray-400'>
        Want to donate a part of your earnings to a cause? Let your clients
        know! <br /> P.S.: Callmi does not facilitate charitable transactions.
        You are responsible for forwarding the funds to the charity you have
        chosen.
      </p>
      <form
        action={formAction}
        className='flex flex-col justify-center gap-8'
      >
        <InputWithLabel
          label='Charity Name'
          name='charityName'
          type='text'
          placeholder='Enter the charity name here please'
        />

        <InputWithLabel
          label='Charity Website'
          name='charityUrl'
          type='url'
          placeholder="Enter the URL of the charity's website"
        />
        <input
          type='hidden'
          name='userId'
          value={session?.user.id}
        />
        <SubmitButton
          hasSkip
          skipHref='/expert/123'
        >
          Finish
        </SubmitButton>
      </form>
    </OnboardingSkeleton>
  )
}
