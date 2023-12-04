'use client'
import Avatar from '@/components/General/Avatar'
import BookingSidebar from '@/components/UserPage/BookingSidebar'
import { useSession } from 'next-auth/react'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function UserPage() {
  const { userId } = useParams()
  const { data: session } = useSession()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())
  const [profile, setProfile] = useState<User>()

  useEffect(() => {
    async function fetchUser() {
      const res = await fetch(`/api/users/${userId}`)
      const data = await res.json()
      console.log({ data })
      setProfile(data)
    }

    fetchUser()
  }, [userId])

  if (!profile) {
    return <div>Loading...</div>
  }

  return (
    <main className=' min-h-screen bg-stone-50 px-4 pb-4 pt-24'>
      <div className='mx-auto grid w-full max-w-7xl flex-1 grid-cols-3 grid-rows-3 gap-4'>
        <div className='col-span-3 row-span-3 flex flex-col gap-4 lg:col-span-2'>
          <div
            id='top'
            className='flex h-min flex-1 flex-col gap-4 rounded-3xl border bg-white p-10'>
            <div className='flex items-center gap-4'>
              <Avatar
                size='lg'
                src={session?.user?.image}
                name={session?.user?.name}
              />
              <div className='flex flex-col gap-2'>
                <h1 className='text-3xl font-bold'>{profile.name}</h1>
                <h2 className='text-xl text-stone-500'>
                  {profile.title} at {profile.company}
                </h2>
              </div>
            </div>
            <div className='divider -mt-2' />
            <p className='flex-1 text-lg'>{profile.bio}</p>
            {/* <div className="divider" /> */}
            <div className='grid grid-cols-2 gap-2 '>
              <div className='border-r-2'>
                <h1 className='text-xl font-bold'>Expertise</h1>
                <div className='flex flex-wrap gap-2 '>
                  {profile.expertise.map(expertise => (
                    <span
                      className='font-light'
                      key={expertise}>
                      • {expertise}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h1 className='text-xl font-bold'>Industry</h1>
                <div className='flex flex-wrap gap-2 '>
                  {profile.industry.map(industry => (
                    <span
                      className='font-light'
                      key={industry}>
                      • {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div
            id='how-it-works'
            className='grid grid-cols-1 grid-rows-1 items-start gap-10 rounded-3xl border bg-white p-10 md:grid-cols-3'>
            <HowItWorksCard
              step={1}
              title='Select a call time'
              description={`Select a date and time from ${profile.name}'s available time slots.`}
            />
            <HowItWorksCard
              step={2}
              title='Receive a calendar invite'
              description='After selecting a time, you will receive a calendar invite with a Google Meet link.'
            />
            <HowItWorksCard
              step={3}
              title='Hop on the call'
              description={`At the scheduled time, hop on the call with ${profile.name} and get your questions answered!`}
            />
          </div>
        </div>
        <BookingSidebar
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
          user={profile}
        />
      </div>
    </main>
  )
}

type HowItWorksCardProps = {
  step: number
  title: string
  description: string
}

function HowItWorksCard({ step, title, description }: HowItWorksCardProps) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='flex h-16 w-16 items-center justify-center  rounded-full bg-stone-100 text-center text-2xl'>
        {step}
      </span>
      <h2 className='font-semibold'>{title}</h2>
      <small className='text-center'>{description}</small>
    </div>
  )
}

const user: User = {
  name: 'Michael Candor',
  username: 'johndoe',
  email: 'john@doe.co',
  timezone: 'America/New_York',
  expertise: ['Product & Engineering', 'Coaching'],
  industry: ['Artificial Intelligence', 'B2B Software'],
  bio: `I am a software engineer with 10+ years of experience, currently working at Google. 
  I have a passion for helping others and have been mentoring students for the past 5 years, many of whom have gone on to work at Google, Facebook, and other top tech companies.
  Ask me anything about software engineering, career advice, and more!`,
  title: 'Software Engineer',
  company: 'Google',
  costPerHour: 100,
  // time zones !!
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
