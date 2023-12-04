import { CheckIcon } from '@heroicons/react/24/outline'
type Feature = {
  text: string
  isReady: boolean
}

type PricingCardProps = {
  planName: string
  cost: string
  subtitle: string
  features: Feature[]
  border?: string
}

export default function PricingCar({
  planName,
  cost,
  subtitle,
  features,
  border,
}: PricingCardProps) {
  return (
    <div
      className={`flex w-full flex-col gap-6 rounded-xl border-t p-8 pb-16 shadow-md ${border}`}>
      <h2 className='text-3xl font-extralight'>{planName}</h2>
      <h3 className='text-2xl font-semibold'>{cost}</h3>
      <p className='text-base font-light text-gray-500'>{subtitle}</p>
      <ul className='flex flex-col gap-4'>
        {features.map(({ text, isReady }, index) => (
          <FeatureItem
            text={text}
            isReady={isReady}
            index={index}
            key={index}
          />
        ))}
      </ul>
    </div>
  )
}

type FeatureItemProps = Feature & {
  index: number
}

function FeatureItem({ text, isReady, index }: FeatureItemProps) {
  const colorClasses = {
    black: 'text-black bg-black',
    gray: 'text-gray-400 bg-gray-400',
  }

  return (
    <li className='flex items-center gap-2'>
      <div
        className={`h-4 w-4 rounded p-0.5 ${
          // index === 0 ? colorClasses.black : colorClasses.gray
          colorClasses.black
        }`}>
        <CheckIcon className='stroke-[5] text-white' />
      </div>
      <span
        className={
          // index === 0 ? 'text-black' : 'text-gray-400'
          'text-black'
        }>
        {text}
      </span>
      {!isReady && (
        <div className='ml-auto whitespace-nowrap rounded-md bg-black px-4 py-2 text-white'>
          Coming soon
        </div>
      )}
    </li>
  )
}
