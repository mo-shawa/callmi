'use client'
import { Toaster } from '@/components/ui/toaster'
import { ToastProvider } from '@radix-ui/react-toast'
import { SessionProvider } from 'next-auth/react'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ToastProvider>
        {children}

        {/* <Toaster /> */}
      </ToastProvider>
    </SessionProvider>
  )
}
