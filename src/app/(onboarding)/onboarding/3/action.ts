'use server'
import options from '@/app/api/auth/[...nextauth]/options'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import prisma from '@/utils/prisma'

export default async function formAction(data: FormData) {
  // Validate data
  const bio = data.get('bio')
  const id = data.get('userId')
  const costPerHour = data.get('costPerHour')

  if (!bio || !id || !costPerHour) return redirect('/onboarding/3')

  const session = await getServerSession(options)
  // Update user
  if (bio !== session?.user?.bio) {
    await prisma.user.update({
      where: { id: id.toString() },
      data: { bio: bio.toString(), costPerHour: +costPerHour },
    })
  }

  // Redirect to next step
  redirect('/onboarding/4')
}
