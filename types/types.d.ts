type Expertise = (typeof import('@/data/general').expertiseTypeData)[number]
type Industry = (typeof import('@/data/general').industryTypeData)[number]
type DayOfWeek = (typeof import('@/data/general').daysOfWeek)[number]

type User = {
  id?: string
  name: string
  email: string
  timezone: string
  costPerHour: number
  username?: string
  expertise: Expertise[]
  industry: Industry[]
  bio: string
  position: string
  company?: string
  availability: {
    [key: DayOfWeek]: DayAvailability
  }
}

type DayAvailability =
  | {
      available: true
      start: {
        dateTime: Date
        timezone: string
      }
      end: {
        dateTime: Date
        timezone: string
      }
    }
  | {
      available: false
    }

type Time = {
  // hour is 1-12
  hour: number
  minute: 0 | 15 | 30 | 45
  ampm: 'am' | 'pm'
}
