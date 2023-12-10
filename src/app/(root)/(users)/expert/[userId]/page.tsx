'use client'
import BookingSidebar from '@/components/UserPage/BookingSidebar'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Top from './Top'
import HowItWorks from './HowItWorks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { profile } from '@/data/general'

export default function UserPage() {
  const { userId } = useParams()
  // const { data: session } = useSession()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  // const [profile, setProfile] = useState<User>()

  // useEffect(() => {
  //   async function fetchUser() {
  //     const res = await fetch(`/api/users/${userId}`)
  //     const data = await res.json()
  //     console.log({ data })
  //     setProfile(data)
  //   }

  //   fetchUser()
  // }, [userId])

  // if (!profile) {
  //   return <div>Loading...</div>
  // }

  return (
    <main className='min-h-screen px-4 pb-20 pt-28 md:px-12 2xl:pb-4'>
      <div className='mx-auto grid w-full flex-1 grid-cols-3 grid-rows-3 gap-8'>
        <div className='col-span-3 row-span-3 flex flex-col gap-4 xl:col-span-2'>
          <Top {...profile} />
          <HowItWorks {...profile} />
        </div>
        <BookingSidebar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          profile={profile}
        />
      </div>
      <BookButton userId={userId as string}>Book</BookButton>
    </main>
  )
}

type BookButtonProps = {
  children?: React.ReactNode
  userId?: string
}

function BookButton({ children, userId }: BookButtonProps) {
  return (
    <Link
      className='fixed bottom-6 left-1/2 flex w-full max-w-[92vw] -translate-x-1/2 justify-center sm:hidden'
      href={`/expert/${userId}/book`}
    >
      <Button
        className='w-full max-w-xl rounded-xl bg-brand '
        type='button'
      >
        {children}
      </Button>
    </Link>
  )
}
