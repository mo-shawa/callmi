import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'
import '../globals.css'
import Providers from '../Providers'
const dmSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://callmi.co'),
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
    <Providers>
      <html lang='en'>
        <body
          className={`flex min-h-screen flex-col text-black  ${dmSans.className}`}
        >
          {children}
          {/* <Footer /> */}
        </body>
      </html>
    </Providers>
  )
}
