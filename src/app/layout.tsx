import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title:
    'Callmi – Get Paid for Your Time, Every Time: Schedule, Charge, and Call in 30 seconds',
  description:
    'Callmi – Get Paid for Your Time, Every Time: Schedule, Charge, and Call in 30 seconds',
  openGraph: {
    images: 'https://callmi.vercel.app/group.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`mt-28 flex min-h-screen flex-col text-black sm:mt-16 ${inter.className}`}
      >
        <Navbar></Navbar>
        {children}
        <Footer />
      </body>
    </html>
  )
}
