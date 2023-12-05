'use server'
import { redirect } from 'next/navigation'

export default async function formAction(data: FormData) {
  const id = data.get('user-id')
  const name = data.get('name')
  const originalName = data.get('original-name')
  const company = data.get('company')
  const position = data.get('position')
  const timezone = data.get('timezone')

  console.log({ id, name, originalName, company, position, timezone })
  // Validate data
  if (!id || !name || !originalName) return redirect('/onboarding/1')

  // Update user
  await prisma.user.update({
    where: { id: id.toString() },
    data: {
      name: name.toString(),
      company: company?.toString(),
      position: position?.toString(),
      timezone: timezone?.toString(),
    },
  })

  // Redirect to next step
  redirect('/onboarding/2')
}
