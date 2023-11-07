import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Callmi ',
  description:
    'Callmi - Ready to value your expertise? Start monetizing your knowledge today. Join callmi and turn your passion into profit.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div
          style={{
            backgroundImage: "url('/blobs.jpg')",
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="flex min-h-screen flex-col bg-stone-50 bg-cover p-4 text-dark"
        >
          <Navbar></Navbar>
          {children}
        </div>
      </body>
    </html>
  )
}
