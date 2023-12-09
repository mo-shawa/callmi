'use server'

import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'

export default async function formAction(data: FormData) {
  const id = data.get('userId')
  const charityName = data.get('charityName')
  const charityUrl = data.get('charityUrl')

  console.log({ id, charityName, charityUrl })

  // Validate data
  if (!id || !charityName || !charityUrl) return redirect('/onboarding/5')

  // Update user
  await prisma.user.update({
    where: { id: id.toString() },
    data: {
      charityName: charityName.toString(),
      charityUrl: charityUrl.toString(),
    },
  })

  // go to dashboard
  redirect('/')
}
