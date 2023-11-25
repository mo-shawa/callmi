import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Layout/Navbar'
import Footer from '@/components/Layout/Footer'
import Providers from './Providers'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Callmi - Fast online appointment scheduling',
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
      <Providers>
        <body
          className={` flex min-h-screen flex-col text-black  ${inter.className}`}
        >
          <Navbar />
          {children}
          {/* <Footer /> */}
        </body>
      </Providers>
    </html>
  )
}
