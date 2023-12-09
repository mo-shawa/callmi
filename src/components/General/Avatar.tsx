import { cn } from '@/utils/utils'
import Image from 'next/image'

type Props = {
  src: string | null | undefined
  name: string | null | undefined
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: { className: 'w-10 h-10', size: 48 },
  md: { className: 'w-16 h-16', size: 64 },
  lg: { className: 'w-24 h-24', size: 96 },
  // md: 'w-16 h-16',
  // lg: 'w-24 h-24',
}

const textSizes = {
  sm: 'text-md',
  md: 'text-xl',
  lg: 'text-3xl',
}

export default function Avatar({ src, name, size = 'md' }: Props) {
  return (
    <div className='w-24'>
      {src ? (
        <Image
          src={src}
          alt='profile picture'
          width={sizes[size].size}
          height={sizes[size].size}
          className='avatar rounded-full'
        />
      ) : (
        <div className='avatar placeholder online'>
          <div
            className={cn(
              'rounded-full bg-neutral text-neutral-content',
              sizes[size].className
            )}
          >
            <span className={textSizes[size]}>
              {name?.at(0)?.toUpperCase()}
            </span>
          </div>
        </div>
      )}
    </div>
  )
}
