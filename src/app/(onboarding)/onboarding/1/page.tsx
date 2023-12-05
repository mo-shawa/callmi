import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Input from '@/components/Form/InputWithLabel'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'
import { timeZones } from '@/data/general'
import Select from '@/components/Form/Select'
import ImageRight from '../ImageRight'

export default async function OnboardingStep1() {
  const session = await getServerSession(options)
  if (!session) return redirect('/api/auth/signin')
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
          <div className='absolute bottom-0 left-0 h-1 w-1/5 rounded-r bg-primary'></div>
        </div>
        <div className='mx-auto flex w-full max-w-xl flex-col gap-8 px-4 pt-12'>
          <small className='tracking-wider text-gray-600'>Step 1/4</small>
          <h1 className='font-medium'>Welcome To Callmi</h1>
          <form
            action={formAction}
            className='flex flex-col gap-8'
          >
            <Input
              label='Name'
              name='name'
              type='text'
              value={session?.user?.name!}
              required
            />
            <Input
              label='Email'
              name='email-visible'
              type='email'
              value={session?.user?.email!}
              disabled
              required
            />
            <Input
              label='Company'
              name='company'
              type='string'
              placeholder='Enter your company name'
            />
            <Input
              label='Position'
              name='position'
              type='string'
              placeholder='Enter your position at the company'
              required
            />
            <Select
              name='timezone'
              label='Time Zone'
              options={timeZones}
              required
            />
            <input
              type='hidden'
              name='email'
              value={session.user.email!}
            />
            <input
              type='hidden'
              name='original-name'
              value={session.user.name!}
            />
            <input
              type='hidden'
              name='user-id'
              value={session.user.id}
            />
            <SubmitButton>Continue</SubmitButton>
          </form>
        </div>
      </div>
      <ImageRight />
    </main>
  )
}
