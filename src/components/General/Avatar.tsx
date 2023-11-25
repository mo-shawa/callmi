import { cn } from '@/utils/utils'
import Image from 'next/image'

type Props = {
  src: string | null | undefined
  name: string | null | undefined
  size?: 'sm' | 'md' | 'lg'
}

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
}

const textSizes = {
  sm: 'text-md',
  md: 'text-xl',
  lg: 'text-3xl',
}

export default function Avatar({ src, name, size = 'md' }: Props) {
  return (
    <div className="w-24">
      {src ? (
        <Image
          src={src}
          alt="profile picture"
          width={100}
          height={100}
          className="rounded-full"
        />
      ) : (
        <div className="avatar placeholder online">
          <div
            className={cn(
              'rounded-full bg-neutral text-neutral-content',
              sizes[size]
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
