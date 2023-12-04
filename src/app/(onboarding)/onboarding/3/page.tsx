import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { SubmitButton } from '@/components/Form/SubmitButton'
import Image from 'next/image'
import Textarea from '@/components/Form/Textarea'
import { PrimaryButton } from '@/components/Button/PrimaryButton'
import prisma from '@/utils/prisma'
async function formAction(data: FormData) {
  'use server'
  // Validate data
  const bio = data.get('bio')
  const id = data.get('userId')

  if (!bio || !id) return redirect('/onboarding/3')

  const session = await getServerSession(options)
  // Update user
  if (bio !== session?.user?.bio) {
    await prisma.user.update({
      where: { id: id.toString() },
      data: { bio: bio.toString() },
    })
  }

  // Redirect to next step
  redirect('/onboarding/4')
}

export default async function OnboardingStep3() {
  const session = await getServerSession(options)
  if (!session) return redirect('/api/auth/signin')
  return (
    <main className="grid w-full flex-1 grid-cols-1 bg-stone-50 pt-28 sm:grid-cols-2 sm:pt-20 ">
      <div id="left" className="col-span-1 p-16">
        <small className="tracking-wider text-gray-500">Step 3/5</small>
        <h1>Almost there..</h1>
        <form
          action={formAction}
          className="mt-8 flex flex-col justify-center gap-8"
        >
          <Textarea
            label="Bio"
            name="bio"
            placeholder="I am a software engineer with 10+ years of experience, currently working at Google. I am an expert in React and TypeScript."
            required
            defaultValue={session?.user?.bio!}
          />
          <input type="hidden" name="userId" value={session.user.id} />
          <div className="grid grid-cols-2 gap-4">
            <PrimaryButton href="/onboarding/2">Previous</PrimaryButton>
            <SubmitButton>Next</SubmitButton>
          </div>
        </form>
      </div>
      <div
        id="right"
        className="relative col-span-1 hidden bg-primary sm:block"
      >
        <Image
          src="/onboarding/3.jpg"
          alt="Onboarding image 1"
          className="sticky left-0 top-20 h-full max-h-screen w-full object-cover"
          width="1024"
          height="1024"
          priority
        />
      </div>
    </main>
  )
}
