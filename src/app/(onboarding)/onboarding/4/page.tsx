import { PrimaryButton } from '@/components/Button/PrimaryButton'
import Availability from '@/components/Form/Availability'
import { SubmitButton } from '@/components/Form/SubmitButton'
import { daysOfWeek } from '@/data/general'
import Image from 'next/image'
import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'
import { getServerSession } from 'next-auth'

const formAction = async (data: FormData) => {
  'use server'
  // Validate data
  const id = data.get('user-id')
  const availability = data.get('availability')

  if (!id || !availability) return redirect('/onboarding/4')

  const session = await getServerSession()

  const availabilityObj: Record<string, boolean> = {}
  // Update user
  if (availability !== session?.user?.availability) {
    // construct availability object
    // await prisma.user.update({
    //   where: { id: id.toString() },
    //   data: { availability },
    // })
  }

  // Redirect to next step
  redirect('/onboarding/5')
}

export default function Step4() {
  return (
    <main className="grid w-full flex-1 grid-cols-1 bg-stone-50 pt-28 sm:grid-cols-2 sm:pt-20 ">
      <div id="left" className="col-span-1 p-16">
        <small className="tracking-wider text-gray-500">Step 4/5</small>
        <h1>When are you available?</h1>
        <form
          action={formAction}
          className="mt-8 flex flex-col justify-center gap-8"
        >
          <small className="-mt-6 text-gray-500">1+ days per week</small>
          <div className="flex flex-col gap-4">
            {daysOfWeek.map((day) => (
              <Availability key={day} dayOfWeek={day} />
            ))}
          </div>
          <div className="grid grid-cols-2 gap-4">
            <PrimaryButton href="/onboarding/3">Previous</PrimaryButton>
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
