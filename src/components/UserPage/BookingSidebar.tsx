import { PrimaryButton } from '../Button/PrimaryButton'
import { Calendar } from '../ui/calendar'

type Props = {
  user: User
  selectedDate: Date | undefined
  setSelectedDate: (date: Date | undefined) => void
}

export default function BookingSidebar({
  user,
  selectedDate,
  setSelectedDate,
}: Props) {
  return (
    <aside className="relative col-span-3 row-span-3 lg:col-span-1">
      <div className="sticky left-0 top-24 max-h-[calc(100vh-5rem)] rounded-3xl  border bg-white p-10 shadow-lg">
        <div className="flex w-full flex-col items-center gap-4">
          <h1 className="text-2xl font-semibold">
            Book a call with{' '}
            <span className="whitespace-nowrap">{user.name}</span>
          </h1>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Pick the length of call</span>
            </label>
            <select className="select select-bordered">
              <option>30 minutes - ${user.costPerHour / 2}</option>
              <option>1 hour - ${user.costPerHour}</option>
            </select>
          </div>
          <div className="flex flex-col gap-4"></div>
          <Calendar
            disabled={{ before: new Date() }}
            mode="single"
            selected={selectedDate}
            onSelect={setSelectedDate}
          />
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
          {/* <Button className="btn-block mt-4">Book</Button> */}
          <PrimaryButton className="mt-4">Book</PrimaryButton>
        </div>
      </div>
    </aside>
  )
}
