import { CheckBadgeIcon } from '@heroicons/react/24/outline'
export default function FeatureCard({
  children,
  soon,
}: {
  children: React.ReactNode
  soon?: boolean
}) {
  return (
    <div className='flex flex-col gap-2 rounded-xl bg-stone-100 p-4 text-xl '>
      <CheckBadgeIcon className='h-6 w-6' />
      {children}
      {soon && (
        <div className='w-min whitespace-nowrap rounded bg-black px-4 py-2 text-sm text-white'>
          Coming soon
        </div>
      )}
    </div>
  )
}
