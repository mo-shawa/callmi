'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { cn } from '@/utils/utils'
import { Switch } from '@/components/ui/switch'

type AvailabilityProps = {
  dayOfWeek: string
}

export default function Availability({ dayOfWeek }: AvailabilityProps) {
  dayOfWeek = dayOfWeek.charAt(0).toUpperCase() + dayOfWeek.slice(1)
  const [isAvailable, setIsAvailable] = useState(false)
  const [startTime, setStartTime] = useState<Time>({
    hour: 9,
    minute: 0,
    ampm: 'am',
  })
  const [endTime, setEndTime] = useState<Time>({
    hour: 5,
    minute: 0,
    ampm: 'pm',
  })

  const handleTimeChange = (
    e: React.ChangeEvent<HTMLSelectElement>,
    setTime: Dispatch<SetStateAction<Time>>
  ) => {
    switch (e.target.name) {
      case 'hours':
        setTime(prev => ({ ...prev, hour: +e.target.value }))
        break
      case 'minutes':
        setTime(prev => ({
          ...prev,
          minute: +e.target.value as Time['minute'],
        }))
        break
      case 'ampm':
        setTime(prev => ({
          ...prev,
          ampm: e.target.value as 'am' | 'pm',
        }))
        break
    }
  }

  return (
    <div className='grid grid-cols-2 gap-4'>
      <div className='flex items-center gap-4'>
        <Switch
          // type='checkbox'
          name={`available-${dayOfWeek}`}
          className='toggle'
          // checked={isAvailable}
          // onChange={() => setIsAvailable(!isAvailable)}
        />
        <h3 className='text-2xl font-semibold'>{dayOfWeek}</h3>
      </div>
      <div className='flex items-center gap-4'>
        <TimePicker
          fromOrTo='from'
          time={startTime}
          onChange={e => handleTimeChange(e, setStartTime)}
          name={dayOfWeek}
          isAvailable={isAvailable}
        />
        <span
          className={cn(
            'h-[1px] w-2 bg-black',
            isAvailable ? 'opacity-100' : 'opacity-50'
          )}
        ></span>
        <TimePicker
          fromOrTo='to'
          time={endTime}
          onChange={e => handleTimeChange(e, setEndTime)}
          name={dayOfWeek}
          isAvailable={isAvailable}
        />
      </div>
    </div>
  )
}

type TimePickerProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  fromOrTo: 'from' | 'to'
  time: Time
  isAvailable: boolean
}

function TimePicker({ onChange, name, time, isAvailable }: TimePickerProps) {
  return (
    <div className={cn(isAvailable ? '' : 'opacity-50')}>
      <div className='flex items-center rounded-full border bg-white px-4 py-3 text-sm'>
        <select
          name='hours'
          className='appearance-none bg-transparent outline-none'
          onChange={onChange}
          value={time.hour}
          disabled={!isAvailable}
        >
          {Array.from(Array(12).keys()).map(i => (
            <option
              key={i}
              value={i + 1}
            >
              {i + 1}
            </option>
          ))}
        </select>
        <span>:</span>
        <select
          name='minutes'
          className='appearance-none bg-transparent outline-none'
          value={time.minute}
          onChange={onChange}
          disabled={!isAvailable}
        >
          <option
            selected
            value={0}
          >
            00
          </option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={45}>45</option>
        </select>
        <select
          name='ampm'
          className='appearance-none bg-transparent outline-none'
          value={time.ampm}
          onChange={onChange}
          disabled={!isAvailable}
        >
          <option value='am'>AM</option>
          <option value='pm'>PM</option>
        </select>
      </div>
    </div>
  )
}
