import { NextRequest } from 'next/server'
import { getServerSession } from 'next-auth'
import prisma from '@/utils/prisma'
import options from '../../auth/[...nextauth]/options'
export async function GET(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log('In GET /api/users/[userId]/route.ts')
  // add get by username later, for now just get by id

  const session = await getServerSession(options)

  console.log({ session })

  const { userId } = params
  if (!userId) {
    return Response.json({ message: 'no user id' })
  }

  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  console.log({ result })

  if (!result) {
    return Response.json({ message: 'no user found' })
  }
  // res.json(result)
  return Response.json(result)
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { userId: string } }
) {
  console.log('In PUT /api/users/[userId]/route.ts')
  // add get by username later, for now just get by id

  const { userId } = params
  if (!userId) {
    return Response.json({ message: 'no user id' })
  }

  const result = await prisma.user.findUnique({
    where: {
      id: userId,
    },
  })
  console.log({ result })

  if (!result) {
    return Response.json({ message: 'no user found' })
  }
  // res.json(result)
  return Response.json(result)
}
