export default function HowItWorks(profile: User) {
  return (
    <div
      id='how-it-works'
      className='flex flex-col gap-8 rounded-3xl border bg-white p-10'
    >
      <span className='text-2xl font-semibold'>How it works</span>
      <div className='grid grid-cols-1 grid-rows-1 items-start gap-10 md:grid-cols-3'>
        <HowItWorksCard
          step={1}
          title='Select a call time'
          description={`Select a date and time from ${profile.name}'s available time slots.`}
        />
        <HowItWorksCard
          step={2}
          title='Receive a calendar invite'
          description='After selecting a time, you will receive a calendar invite with a Google Meet link.'
        />
        <HowItWorksCard
          step={3}
          title='Hop on the call'
          description={`At the scheduled time, hop on the call with ${profile.name} and get your questions answered!`}
        />
      </div>
    </div>
  )
}

type HowItWorksCardProps = {
  step: number
  title: string
  description: string
}

function HowItWorksCard({ step, title, description }: HowItWorksCardProps) {
  return (
    <div className='flex flex-col items-center gap-4'>
      <span className='flex h-16 w-16 items-center justify-center  rounded-full bg-gray-100 text-center text-2xl'>
        {step}
      </span>
      <h2 className='font-semibold'>{title}</h2>
      <small className='text-center'>{description}</small>
    </div>
  )
}
