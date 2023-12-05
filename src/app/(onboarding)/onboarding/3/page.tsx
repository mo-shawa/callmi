import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import OnboardingSkeleton from '../../OnboardingSkeleton'
import BackButton from '@/components/Form/BackButton'
import InputWithLabel from '@/components/Form/InputWithLabel'
import TextareaWithLabel from '@/components/Form/Textarea'
import formAction from './action'

export default async function OnboardingStep3() {
  const session = await getServerSession(options)
  if (!session) return redirect('/api/auth/signin')
  return (
    <OnboardingSkeleton step={3}>
      <BackButton href='/onboarding/2'>Back</BackButton>
      <p className='onboarding-step'>Step 3/5</p>
      <h1 className='onboarding'>Next up...</h1>
      <form
        action={formAction}
        className='flex flex-col justify-center gap-8'
      >
        <InputWithLabel
          label='What are your fees per hour?'
          name='costPerHour'
          type='number'
          placeholder='Enter your rate here'
          required
          value={session?.user?.costPerHour!}
          isCurrency={true}
          min={1}
          step={1}
          pattern='[0-9]+'
        />
        <TextareaWithLabel
          label='Customize your bio'
          name='bio'
          placeholder='e.g.: Founded three B2B SaaS businesses, hit 20% MoM growth, and exited at series C.'
          required
          defaultValue={session?.user?.bio!}
          labelAlt='Add a personal touch by talking about your skills. Feel free to show off!'
        />
        <input
          type='hidden'
          name='userId'
          value={session.user.id}
        />
        <SubmitButton>Continue</SubmitButton>
      </form>
    </OnboardingSkeleton>
  )
}
