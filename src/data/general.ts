export const expertiseTypeData = [
  'B2B Sales',
  'B2C Sales',
  'Bootstrapping',
  'Branding',
  'Financial Planning',
  'Fundraising',
  'Growth Marketing',
  'Manufacturing',
  'People & Hiring',
  'Product & Engineering',
  'Product Marketing',
  'Public Relations',
  'SEM & SEO',
  'Social Media',
  'Strategy & Operations',
  'Coaching',
] as const
export const industryTypeData = [
  'Artificial Intelligence',
  'B2B Services',
  'B2B Software',
  'Consumer Hardware',
  'Consumer Software',
  'E-commerce & CPG',
  'Education',
  'Fashion & Apparel',
  'Fintech',
  'Food & Beverage',
  'Gaming',
  'Healthcare',
  'Insurance',
  'Media & Entertainment',
  'Real Estate',
  'Venture Capital',
  'Career Expert',
] as const

export const expertiseData: Expertise[] = [
  'B2B Sales',
  'B2C Sales',
  'Bootstrapping',
  'Branding',
  'Financial Planning',
  'Fundraising',
  'Growth Marketing',
  'Manufacturing',
  'People & Hiring',
  'Product & Engineering',
  'Product Marketing',
  'Public Relations',
  'SEM & SEO',
  'Social Media',
  'Strategy & Operations',
  'Coaching',
]

export const industryData: Industry[] = [
  'Artificial Intelligence',
  'B2B Services',
  'B2B Software',
  'Consumer Hardware',
  'Consumer Software',
  'E-commerce & CPG',
  'Education',
  'Fashion & Apparel',
  'Fintech',
  'Food & Beverage',
  'Gaming',
  'Healthcare',
  'Insurance',
  'Media & Entertainment',
  'Real Estate',
  'Venture Capital',
  'Career Expert',
]

export const daysOfWeek = [
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday',
] as const

export const timeZones = [
  'UTC-12:00',
  'UTC-11:00',
  'UTC-10:00',
  'UTC-09:00',
  'UTC-08:00',
  'UTC-07:00',
  'UTC-06:00',
  'UTC-05:00',
  'UTC-04:00',
  'UTC-03:00',
  'UTC-02:00',
  'UTC-01:00',
  'UTC+00:00',
  'UTC+01:00',
  'UTC+02:00',
  'UTC+03:00',
  'UTC+04:00',
  'UTC+05:00',
  'UTC+06:00',
  'UTC+07:00',
  'UTC+08:00',
  'UTC+09:00',
  'UTC+10:00',
  'UTC+11:00',
  'UTC+12:00',
  'UTC+13:00',
  'UTC+14:00',
]

export const profile: User = {
  name: 'Michael Candor',
  username: 'johndoe',
  email: 'john@doe.co',
  timezone: 'Canada/EST',
  image: 'https://i.pravatar.cc/240',
  onboarded: true,
  expertise: ['Product & Engineering', 'Coaching'],
  industry: ['Artificial Intelligence', 'B2B Software'],
  bio: `I am a software engineer with 10+ years of experience, currently working at Google. 
  I have a passion for helping others and have been mentoring students for the past 5 years, many of whom have gone on to work at Google, Facebook, and other top tech companies.
  Ask me anything about software engineering, career advice, and more!
  
  I am a software engineer with 10+ years of experience, currently working at Google. 
  I have a passion for helping others and have been mentoring students for the past 5 years, many of whom have gone on to work at Google, Facebook, and other top tech companies.
  Ask me anything about software engineering, career advice, and more!`,
  position: 'Software Engineer',
  company: 'Google',
  charityName: 'Charity',
  charityUrl: 'https://www.charity.com',
  id: '123',
  costPerHour: 100,
  // time zones ??
  // https://github.com/calcom/cal.com/blob/main/packages/types/Calendar.d.ts
  availability: {
    monday: {
      available: true,
      start: '9:00',
      end: '17:00',
    },
    tuesday: {
      start: '9:00',
      end: '17:00',
    },
    wednesday: {
      start: '9:00',
      end: '17:00',
    },
    thursday: {
      start: '9:00',
      end: '17:00',
    },
    friday: {
      start: '9:00',
      end: '17:00',
    },
    saturday: {
      start: '9:00',
      end: '17:00',
    },
    sunday: {
      start: '9:00',
      end: '17:00',
    },
  },
}
