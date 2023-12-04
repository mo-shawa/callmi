import { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma, { convertTextToEnum } from '@/utils/prisma'
import options from '../../auth/[...nextauth]/options'
export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  const session = await getServerSession(options)

  const { userId } = params
  if (!userId) {
    return Response.json({ message: 'no user id' })
  }

  if (session?.user.id !== userId) {
    return Response.json({ message: 'not authorized' })
  }
  const body = await req.json()

  const expertise = body.expertise.map((expertise: Expertise) =>
    convertTextToEnum(expertise)
  )
  const industry = body.industry.map((industry: Industry) =>
    convertTextToEnum(industry)
  )

  const result = await prisma.user.update({
    where: {
      id: userId,
    },
    data: {
      expertise,
      industry,
    },
  })
  console.log({ result })

  if (!result) {
    return Response.json({ message: 'update failed' })
  }
  // res.json(result)
  return Response.json(result)
}
