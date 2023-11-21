'use client'
import { useState } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'

type AvailabilityProps = {
  dayOfWeek: string
}

export default function Availability({ dayOfWeek }: AvailabilityProps) {
  const [isAvailable, setIsAvailable] = useState(false)
  const [startHour, setStartHour] = useState('')
  const [endHour, setEndHour] = useState('')

  const handleStartHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStartHour(e.target.value)
  }

  const handleEndHourChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setEndHour(e.target.value)
  }

  return (
    <div className="px-4 py-2">
      <div className="flex items-center gap-4">
        <input
          type="checkbox"
          name={`available-${dayOfWeek}`}
          className="checkbox"
          checked={isAvailable}
          onChange={() => setIsAvailable(!isAvailable)}
        />
        <h3 className="text-2xl font-semibold">{dayOfWeek}</h3>
      </div>
      {isAvailable && (
        <div className="mt-4 flex gap-4">
          <TimePicker
            fromOrTo="from"
            onChange={handleStartHourChange}
            name={dayOfWeek}
          />
          <TimePicker
            fromOrTo="to"
            onChange={handleEndHourChange}
            name={dayOfWeek}
          />
        </div>
      )}
    </div>
  )
}

type TimePickerProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  fromOrTo: 'from' | 'to'
}

function TimePicker({ onChange, name, fromOrTo }: TimePickerProps) {
  return (
    <div className="w-min">
      <span className="ml-1">{fromOrTo}</span>
      <div className="flex items-center gap-2 rounded-lg bg-white p-5 shadow">
        <ClockIcon className=" h-6 w-6" />
        <select
          name={`hours-${name}`}
          className="appearance-none bg-transparent text-xl outline-none"
          onChange={onChange}
        >
          {Array.from(Array(12).keys()).map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className=" text-xl">:</span>
        <select
          name={`minutes-${name}`}
          className="appearance-none bg-transparent text-xl outline-none"
        >
          <option value="0">00</option>
          <option value="15">15</option>
          <option value="30">30</option>
          <option value="45">45</option>
        </select>
        <select
          name={`ampm-${name}`}
          className="appearance-none bg-transparent text-xl outline-none"
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
    </div>
  )
}
