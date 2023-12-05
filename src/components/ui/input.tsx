import * as React from 'react'

import { cn } from '@/utils/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isCurrency?: boolean
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className='relative flex items-center'>
        {props.isCurrency && (
          <span className='pointer-events-none absolute left-3 z-10 text-gray-500'>
            $
          </span>
        )}
        <input
          type={type}
          className={cn(
            'relative flex h-12 w-full rounded-xl border border-stone-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-stone-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-950 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:border-stone-800 dark:bg-stone-950 dark:ring-offset-stone-950 dark:placeholder:text-stone-400 dark:focus-visible:ring-stone-300',
            className,
            props.isCurrency ? 'pl-8' : ''
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = 'Input'

export { Input }
