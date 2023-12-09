'use client'
import BookingSidebar from '@/components/UserPage/BookingSidebar'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { useState } from 'react'
import Top from './Top'
import HowItWorks from './HowItWorks'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

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

/** remove once you're fetching data */
const profile: User = {
  name: 'Michael Candor',
  username: 'johndoe',
  email: 'john@doe.co',
  timezone: 'Canada/EST',
  image: 'https://i.pravatar.cc/240',
  onboarded: true,
  expertise: ['Product & Engineering', 'Coaching'],
  industry: ['Artificial Intelligence', 'B2B Software'],
  bio: `I am a software engineer with 10+ years of experience, currently working at Google. 
  I have a passion for helping others and have been mentoring students for the past 5 years, many of whom have gone on to work at Google, Facebook, and other top tech companies.
  Ask me anything about software engineering, career advice, and more!
  
  I am a software engineer with 10+ years of experience, currently working at Google. 
  I have a passion for helping others and have been mentoring students for the past 5 years, many of whom have gone on to work at Google, Facebook, and other top tech companies.
  Ask me anything about software engineering, career advice, and more!`,
  position: 'Software Engineer',
  company: 'Google',
  charityName: 'Charity',
  charityUrl: 'https://www.charity.com',
  id: '123',
  costPerHour: 100,
  // time zones ??
  // https://github.com/calcom/cal.com/blob/main/packages/types/Calendar.d.ts
  availability: {
    monday: {
      available: true,
      start: '9:00',
      end: '17:00',
    },
    tuesday: {
      start: '9:00',
      end: '17:00',
    },
    wednesday: {
      start: '9:00',
      end: '17:00',
    },
    thursday: {
      start: '9:00',
      end: '17:00',
    },
    friday: {
      start: '9:00',
      end: '17:00',
    },
    saturday: {
      start: '9:00',
      end: '17:00',
    },
    sunday: {
      start: '9:00',
      end: '17:00',
    },
  },
}
