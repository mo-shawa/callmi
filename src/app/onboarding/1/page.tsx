import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import Input from '@/components/Form/Input'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'

async function formAction(data: FormData) {
  'use server'
  const email = data.get('email')
  const name = data.get('name')
  console.log({ email, name })
  // Validate data
  if (!email || !name) return redirect('/onboarding/1')

  // Update user

  // Redirect to next step
  redirect('/onboarding/2')
}

export default async function OnboardingStep1() {
  const session = await getServerSession(options)
  if (!session) return redirect('/api/auth/signin')
  return (
    <main className="grid w-full flex-1 grid-cols-2  bg-stone-50 ">
      <div id="left" className="col-span-1 p-16">
        <small className="tracking-wider text-gray-500">Step 1/4</small>
        <h1>Let's get you set up</h1>
        <form
          action={formAction}
          className="mt-8 flex flex-col justify-center gap-8"
        >
          <Input
            label="Name"
            name="name"
            type="text"
            value={session?.user?.name!}
            required
          />
          <Input
            label="Email"
            name="email-visible"
            type="email"
            value={session?.user?.email!}
            disabled
            required
          />
          <input type="hidden" name="email" value={session.user?.email!} />
          <SubmitButton>Next</SubmitButton>
        </form>
      </div>
      <div id="right" className="col-span-1 bg-primary">
        {/* <Image
          src="/images/onboarding/1.svg"
          alt="Onboarding image 1"
          width={512}
          height={512}
        /> */}
      </div>
    </main>
  )
}
