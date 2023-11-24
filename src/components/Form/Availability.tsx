'use client'
import { Dispatch, SetStateAction, useState } from 'react'
import { ClockIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

type AvailabilityProps = {
  dayOfWeek: string
}

type Time = {
  // hour is 1-12
  hour: number
  minute: 0 | 15 | 30 | 45
  ampm: 'am' | 'pm'
}

export default function Availability({ dayOfWeek }: AvailabilityProps) {
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
        setTime((prev) => ({ ...prev, hour: +e.target.value }))
        break
      case 'minutes':
        setTime((prev) => ({
          ...prev,
          minute: +e.target.value as Time['minute'],
        }))
        break
      case 'ampm':
        setTime((prev) => ({ ...prev, ampm: e.target.value as 'am' | 'pm' }))
        break
    }
  }

  return (
    <motion.div layout layoutRoot className="px-4 py-2">
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
            time={startTime}
            onChange={(e) => handleTimeChange(e, setStartTime)}
            name={dayOfWeek}
          />
          <TimePicker
            fromOrTo="to"
            time={endTime}
            onChange={(e) => handleTimeChange(e, setEndTime)}
            name={dayOfWeek}
          />
        </div>
      )}
    </motion.div>
  )
}

type TimePickerProps = {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
  fromOrTo: 'from' | 'to'
  time: Time
}

function TimePicker({ onChange, name, fromOrTo, time }: TimePickerProps) {
  return (
    <div className="w-min">
      <span className="ml-1">{fromOrTo}</span>
      <div className="flex items-center gap-2 rounded-lg bg-white p-5 shadow">
        <ClockIcon className=" h-6 w-6" />
        <select
          name="hours"
          className="appearance-none bg-transparent text-xl outline-none"
          onChange={onChange}
          value={time.hour}
        >
          {Array.from(Array(12).keys()).map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
        <span className=" text-xl">:</span>
        <select
          name="minutes"
          className="appearance-none bg-transparent text-xl outline-none"
          value={time.minute}
          onChange={onChange}
        >
          <option selected value={0}>
            00
          </option>
          <option value={15}>15</option>
          <option value={30}>30</option>
          <option value={45}>45</option>
        </select>
        <select
          name="ampm"
          className="appearance-none bg-transparent text-xl outline-none"
          value={time.ampm}
          onChange={onChange}
        >
          <option value="am">AM</option>
          <option value="pm">PM</option>
        </select>
      </div>
    </div>
  )
}
