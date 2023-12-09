'use client'

import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

type Props = {
  children?: React.ReactNode
  hasSkip?: boolean
  skipHref?: string
}

export function SubmitButton({ children, hasSkip, skipHref }: Props) {
  const { pending } = useFormStatus()

  return (
    <>
      <Button
        className='hidden w-full  md:block'
        type='submit'
        aria-disabled={pending}
        variant='default'
      >
        {pending ? (
          <Loader2 className='mx-auto h-4 w-4 animate-spin text-white' />
        ) : (
          children
        )}
      </Button>
      <Button
        className='fixed bottom-6 left-1/2 mx-auto block w-full max-w-[92vw] -translate-x-1/2  md:hidden'
        type='submit'
        aria-disabled={pending}
      >
        {pending ? (
          <Loader2 className='mx-auto h-4 w-4 animate-spin text-white' />
        ) : (
          children
        )}
      </Button>
      {hasSkip && (
        <Link href={skipHref!}>
          <Button
            variant='link'
            type='button'
            className='w-full'
          >
            Skip
          </Button>
        </Link>
      )}
    </>
  )
}
