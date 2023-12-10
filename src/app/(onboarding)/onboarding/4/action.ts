'use server'

import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export const formAction = async (data: FormData) => {
  'use server'
  // Validate data
  const id = data.get('user-id')
  const availability = data.get('availability')

  // if (!id || !availability) return redirect('/onboarding/4')

  const session = await getServerSession()

  // TODO
  const availabilityObj: Record<string, boolean> = {}
  // Update user

  // Redirect to next step
  redirect('/onboarding/5')
}
