'use server'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'

export const formAction = async (data: FormData) => {
  'use server'
  // Validate data
  const id = data.get('user-id')
  const availability = data.get('availability')

  if (!id || !availability) return redirect('/onboarding/4')

  const session = await getServerSession()

  // TODO
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
