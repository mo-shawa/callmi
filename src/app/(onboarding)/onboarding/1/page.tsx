import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Input from '@/components/Form/Input'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'
import prisma from '@/utils/prisma'
import Select from '@/components/Form/Select'

async function formAction(data: FormData) {
  'use server'
  const id = data.get('user-id')
  const name = data.get('name')
  const originalName = data.get('original-name')
  // Validate data
  if (!id || !name || !originalName) return redirect('/onboarding/1')

  // Update user
  if (name !== originalName) {
    await prisma.user.update({
      where: { id: id.toString() },
      data: { name: name.toString() },
    })
  }

  // Redirect to next step
  redirect('/onboarding/2')
}

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
              label='Time Zone'
              name='timezone'
              type='select'
              required
              placeholder='Select your time zone'
              options={[
                'UTC-12:00',
                'UTC-11:00',
                'UTC-10:00',
                'UTC-09:00',
                'UTC-08:00',
                'UTC-07:00',
                'UTC-06:00',
                'UTC-05:00',
                'UTC-04:00',
                'UTC-03:00',
                'UTC-02:00',
                'UTC-01:00',
                'UTC+00:00',
                'UTC+01:00',
                'UTC+02:00',
                'UTC+03:00',
                'UTC+04:00',
                'UTC+05:00',
                'UTC+06:00',
                'UTC+07:00',
                'UTC+08:00',
                'UTC+09:00',
                'UTC+10:00',
                'UTC+11:00',
                'UTC+12:00',
                'UTC+13:00',
                'UTC+14:00',
              ]}
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
            <SubmitButton>Next</SubmitButton>
          </form>
        </div>
      </div>
      <div
        id='right'
        className='relative col-span-1 hidden max-h-screen bg-primary md:block'
      >
        <Image
          src='/onboarding/onboarding.jpg'
          alt='Onboarding image 1'
          className='sticky left-0 top-0 h-full max-h-screen w-full object-cover'
          width='1024'
          height='1024'
          priority
        />
      </div>
    </main>
  )
}
