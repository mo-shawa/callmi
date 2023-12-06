'use client'

import { motion } from 'framer-motion'
import { useFormStatus } from 'react-dom'
import { Button } from '../ui/button'
import { Loader2 } from 'lucide-react'

type Props = {
  children?: React.ReactNode
}

export function SubmitButton({ children }: Props = { children: 'Submit' }) {
  const { pending } = useFormStatus()

  return (
    <>
      <Button
        className='hidden h-12 w-full rounded-xl md:block'
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
        className='fixed bottom-6 left-1/2 mx-auto block h-12 w-full max-w-[92vw] -translate-x-1/2 rounded-xl md:hidden'
        type='submit'
        aria-disabled={pending}
      >
        {pending ? (
          <Loader2 className='mx-auto h-4 w-4 animate-spin text-white' />
        ) : (
          children
        )}
      </Button>
    </>
  )
}
