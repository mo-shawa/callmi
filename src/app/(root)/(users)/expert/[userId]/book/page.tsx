'use client'

import BookingForm from '@/components/UserPage/BookingForm'
import { profile } from '@/data/general'
import { useState } from 'react'

export default function Book() {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date())

  return (
    <main className='min-h-screen px-4 pb-20 pt-28 md:px-12 2xl:pb-4'>
      <div className='mx-auto max-w-md'>
        <BookingForm
          profile={profile}
          selectedDate={selectedDate}
          setSelectedDate={setSelectedDate}
        />
      </div>
    </main>
  )
}
