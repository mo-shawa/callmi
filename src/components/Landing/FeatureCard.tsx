import { BadgeCheck } from 'lucide-react'
export default function FeatureCard({
  children,
  soon,
}: {
  children: React.ReactNode
  soon?: boolean
}) {
  return (
    <div className='flex flex-col gap-2 rounded-xl bg-gray-100 p-4 text-xl '>
      <BadgeCheck className='h-6 w-6' />
      {children}
      {soon && (
        <div className='w-min whitespace-nowrap rounded bg-black px-4 py-2 text-sm text-white'>
          Coming soon
        </div>
      )}
    </div>
  )
}
