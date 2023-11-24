import { Calendar } from '../ui/calendar'

type SidebarProps = {
  user: {
    name: string
    expertise: string[]
    industry: string[]
  }
  selectedDate: Date | undefined
  setSelectedDate: (date: Date | undefined) => void
}

export default function BookingSidebar({
  user,
  selectedDate,
  setSelectedDate,
}: SidebarProps) {
  return (
    <aside className="col-span-1 row-span-3 rounded-3xl border p-10 shadow-lg">
      <div className="flex max-h-[calc(100vh-5rem)] flex-col gap-4">
        <h1 className="text-2xl font-semibold">
          Book a call with{' '}
          <span className="whitespace-nowrap">{user.name}</span>
        </h1>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Pick the length of call</span>
          </label>
          <select className="select select-bordered">
            <option selected>15 minutes</option>
            <option>30 minutes</option>
            <option>45 minutes</option>
          </select>
        </div>

        <div className="flex flex-col gap-4"></div>
        <Calendar
          disabled={{ before: new Date() }}
          mode="single"
          selected={selectedDate}
          onSelect={setSelectedDate}
          className="rounded-xl border"
        />
      </div>

      <div className="form-control w-full max-w-xs">
        <label className="label">
          <span className="label-text">Time of call</span>
        </label>
        <select className="select select-bordered">
          <option>5:00 PM</option>
          <option>5:30 PM</option>
          <option>7:00 PM</option>
        </select>
      </div>
      <button className="btn btn-block mt-10">Book</button>
    </aside>
  )
}
