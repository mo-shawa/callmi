import { AlertCircleIcon, Check } from 'lucide-react'
import { profile } from '@/data/general'
export default function BookingSuccess() {
  return (
    <main className='min-h-screen px-4 pb-20 pt-28 md:px-12 2xl:pb-4'>
      <div className='mx-auto max-w-md'>
        <div className='flex flex-col items-center gap-8'>
          <div className='flex items-center gap-2 rounded-2xl border border-red-700 bg-red-100 px-4 py-3 text-sm text-red-900'>
            <AlertCircleIcon /> <span className='font-bold'>Important</span> -
            please bookmark this page
          </div>
          <Check className='h-16 w-16 rounded-full bg-brand stroke-[4px] p-2 text-white' />
          <h1 className='text-center text-2xl font-bold'>
            Your meeting has been scheduled with {profile.name}!
          </h1>
          <p className='text-gray-500'>
            We've sent you an email with the details of your booking.
          </p>
        </div>
      </div>
    </main>
  )
}
