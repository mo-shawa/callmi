'use client'
import EmailForm from '@/components/EmailForm'
import Image from 'next/image'
import { redirect } from 'next/navigation'

export default function Home() {
  redirect('/landing')
  return (
    <main className="flex h-full flex-1 flex-col items-center justify-center px-4 pt-20">
      <section className="flex h-full flex-col items-center justify-center">
        <div className="mx-auto grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
          <div className="flex max-w-md flex-col justify-center gap-6">
            <h1 className="max-w-sm text-4xl font-bold">
              Join the Callmi{' '}
              <span className="whitespace-nowrap">early-access</span> waitlist
            </h1>
            <p className="text-lg">
              Next time a LinkedIn stranger asks you for 30 minutes of your
              time, point them to Callmi.
            </p>
            <ul className="flex flex-col gap-3">
              <ListItem>Schedule meetings and get paid in one click.</ListItem>
              <ListItem>
                Donate any % of the proceeds to a cause you care about.
              </ListItem>
              <ListItem>Put an end to free “brain picking”!</ListItem>
            </ul>
          </div>
          <div className="flex justify-center rounded-3xl bg-white p-16 shadow-xl">
            <EmailForm />
          </div>
        </div>
      </section>
    </main>
  )
}

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-2">
      <Image src="/svg/check.svg" alt="check" height={16} width={16} />
      {children}
    </li>
  )
}
