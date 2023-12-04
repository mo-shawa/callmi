import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Input from '@/components/Form/Input'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'
import prisma from '@/utils/prisma'

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
    <main className='grid w-full flex-1 grid-cols-1 bg-stone-50 pt-28 sm:grid-cols-2  sm:pt-20 '>
      <div
        id='left'
        className='col-span-1 p-16'>
        <small className='tracking-wider text-gray-500'>Step 1/4</small>
        <h1>Let&apos;s get you set up</h1>
        <form
          action={formAction}
          className='mt-8 flex flex-col justify-center gap-8'>
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
      <div
        id='right'
        className='relative col-span-1 hidden max-h-screen bg-primary sm:block'>
        <Image
          src='/onboarding/1.jpg'
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
