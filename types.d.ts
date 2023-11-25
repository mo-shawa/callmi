type Expertise = (typeof import('@/data/general').expertiseTypeData)[number]
type Industry = (typeof import('@/data/general').industryTypeData)[number]

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
  title: string
  company?: string
  availability: {
    [key: (typeof import('@/data/general').daysOfWeek)[number]]: {
      start: string
      end: string
    }
  }
}
