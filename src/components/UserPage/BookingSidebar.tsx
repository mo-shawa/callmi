import { formatCurrency } from '@/utils/utils'
import { Calendar } from '../ui/calendar'
import InputWithLabel from '../Form/InputWithLabel'
import SelectWithLabel from '../Form/SelectWithLabel'
import { Button } from '../ui/button'
import { ArrowRight } from 'lucide-react'

type Props = {
  profile: User
  selectedDate: Date | undefined
  setSelectedDate: (date: Date | undefined) => void
}

export default function BookingSidebar({
  profile,
  selectedDate,
  setSelectedDate,
}: Props) {
  return (
    <aside className='col-span-3 row-span-3 hidden sm:block xl:col-span-1 '>
      <div className='left-0 top-24  rounded-3xl  border bg-white p-10 shadow-2xl'>
        <div className='flex w-full flex-col gap-6'>
          <div className='flex justify-between'>
            <h1 className='text-2xl '>
              Book a call with{' '}
              <span className='whitespace-nowrap'>
                {profile.name.split(' ')[0]}
              </span>
            </h1>
            <h2 className='text-2xl font-semibold'>
              {formatCurrency(profile.costPerHour)}
              <span className='text-sm font-medium text-gray-600'>/60min</span>
            </h2>
          </div>
          <small className='text-gray-600'>
            Book a live 1:1 session and get personalized advice
          </small>
          <InputWithLabel
            label='Email'
            placeholder='Please enter your email here'
            type='email'
            required
            pattern='[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
          />
          <SelectWithLabel
            label='Call duration'
            name='duration'
            options={[
              `30 minutes - $${profile.costPerHour / 2}`,
              `60 minutes - $${profile.costPerHour}`,
              `90 minutes - $${profile.costPerHour * 1.5}`,
              `120 minutes - $${profile.costPerHour * 2}`,
            ]}
            required
            value={`30 minutes - $${profile.costPerHour / 2}`}
          />

          <Calendar
            disabled={{ before: new Date() }}
            mode='single'
            selected={selectedDate}
            onSelect={setSelectedDate}
          />

          <SelectWithLabel
            label='Meeting time'
            name='time'
            options={['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM', '5:00 PM']}
            required
            placeholder='Select a time'
          />
          <Button
            className='relative flex w-full items-center justify-center gap-2 bg-brand'
            onClick={() => alert('This feature is not implemented yet')}
          >
            Proceed to checkout ({formatCurrency(profile.costPerHour)})
            <ArrowRight className='absolute right-4 hidden xl:block' />
          </Button>
        </div>
      </div>
    </aside>
  )
}
