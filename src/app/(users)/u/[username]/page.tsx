'use client'
import BookingSidebar from '@/components/UserPage/BookingSidebar'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

export default function UserPage({ params }: { params: { username: string } }) {
  console.log({ params })
  const { data: session } = useSession()
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <main className="mx-auto grid w-full max-w-7xl flex-1 grid-cols-3 grid-rows-3 gap-4  px-4 pb-4 pt-24">
      <div className="col-span-3 row-span-3 flex flex-col gap-4 sm:col-span-2">
        <div
          id="top"
          className="flex h-min flex-1 flex-col gap-4 rounded-3xl border bg-white p-10"
        >
          <div className="flex items-center gap-4">
            <Avatar src={session?.user?.image} name={session?.user?.name} />
            <div className="flex flex-col gap-2">
              <h1 className="text-3xl font-bold">{user.name}</h1>
              <h2 className="text-xl text-gray-500">
                {user.title} at {user.company}
              </h2>
            </div>
          </div>
          <div className="divider -mt-2" />
          <p className="flex-1 text-lg">{user.bio}</p>
          {/* <div className="divider" /> */}
          <div className="grid grid-cols-2 gap-2 ">
            <div className="border-r-2">
              <h1 className="text-xl font-bold">Expertise</h1>
              <div className="flex flex-wrap gap-2 ">
                {user.expertise.map((expertise) => (
                  <span className="font-light" key={expertise}>
                    ¬ {expertise}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h1 className="text-xl font-bold">Industry</h1>
              <div className="flex flex-wrap gap-2 ">
                {user.industry.map((industry) => (
                  <span className="font-light" key={industry}>
                    ¬ {industry}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          id="how-it-works"
          className="grid grid-cols-3 grid-rows-1 items-start gap-10 rounded-3xl border p-10"
        >
          <HowItWorksCard
            step={1}
            title="Select a call time"
            description={`Select a date and time from ${user.name}'s available time slots.`}
          />
          <HowItWorksCard
            step={2}
            title="Receive a calendar invite"
            description="After selecting a time, you will receive a calendar invite with a Google Meet link."
          />
          <HowItWorksCard
            step={3}
            title="Hop on the call"
            description={`At the scheduled time, hop on the call with ${user.name} and get your questions answered!`}
          />
        </div>
      </div>
      <BookingSidebar
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
        user={user}
      />
    </main>
  )
}

type AvatarProps = {
  src: string | null | undefined
  name: string | null | undefined
}

function Avatar({ src, name }: AvatarProps) {
  return (
    <div className="w-24">
      {src ? (
        <Image
          src={src}
          alt="profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
      ) : (
        <div className="avatar placeholder online">
          <div className="w-24 rounded-full bg-neutral text-neutral-content">
            <span className="text-2xl">{name?.at(0)?.toUpperCase()}</span>
          </div>
        </div>
      )}
    </div>
  )
}

type HowItWorksCardProps = {
  step: number
  title: string
  description: string
}

function HowItWorksCard({ step, title, description }: HowItWorksCardProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      <span className="flex h-16 w-16 items-center justify-center  rounded-full bg-stone-100 text-center text-2xl">
        {step}
      </span>
      <h2 className="font-semibold">{title}</h2>
      <small className="text-center">{description}</small>
    </div>
  )
}

type User = {
  id?: string
  name: string
  email: string
  timezone: string

  username?: string
  expertise: Expertise[]
  industry: Industry[]
  bio: string
  title: string
  company: string
  availability: {
    monday: {
      available: boolean
      start: string
      end: string
    }
    tuesday: {
      start: string
      end: string
    }
    wednesday: {
      start: string
      end: string
    }
    thursday: {
      start: string
      end: string
    }
    friday: {
      start: string
      end: string
    }
    saturday: {
      start: string
      end: string
    }
    sunday: {
      start: string
      end: string
    }
  }
}

const user: User = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'john@doe.co',
  timezone: 'America/New_York',
  expertise: ['B2B Sales', 'B2C Sales', 'Bootstrapping'],
  industry: ['Artificial Intelligence', 'Career Expert'],
  bio: 'I am a software engineer with 10+ years of experience, currently working at Google. I am an expert in React and TypeScript.I am a software engineer with 10+ years of experience, currently working at Google. I am an expert in React and TypeScript.',
  title: 'Software Engineer',
  company: 'Google',
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
