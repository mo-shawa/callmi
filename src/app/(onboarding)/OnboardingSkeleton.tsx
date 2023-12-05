import Image from 'next/image'
import ImageRight from './ImageRight'
import { cn } from '@/utils/utils'

type Props = {
  children: React.ReactNode
  step: number
}

const stepWidthClasses: Record<number, string> = {
  1: 'w-1/5',
  2: 'w-2/5',
  3: 'w-3/5',
  4: 'w-4/5',
  5: 'w-full',
}

export default async function OnboardingSkeleton({ children, step }: Props) {
  return (
    <main className='grid w-full flex-1 grid-cols-1 bg-white md:grid-cols-2'>
      <div
        id='left'
        className='col-span-1'
      >
        <div className='relative flex items-center p-4'>
          <Image
            src='/svg/logo.svg'
            alt='Callmi logo'
            width='80'
            height='80'
          />
          <h1 className='text-4xl '>Callmi</h1>
          <div
            className={cn(
              'absolute bottom-0 left-0 h-1 rounded-r bg-primary',
              stepWidthClasses[step]
            )}
          ></div>
        </div>
        <div className='mx-auto flex w-full max-w-xl flex-col gap-8 px-4 py-16'>
          {children}
        </div>
      </div>
      <ImageRight />
    </main>
  )
}
