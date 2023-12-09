import { Menu } from 'lucide-react'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import NavLogo from './NavLogo'
import options from '@/app/api/auth/[...nextauth]/options'
import Avatar from '../General/Avatar'
export default async function Navbar() {
  const session = await getServerSession(options)
  return (
    <nav className='fixed top-0 z-50 w-screen shadow bg-white/80  backdrop-blur-md'>
      <div className='mx-auto flex w-full items-center justify-between px-4'>
        <div>
          <NavLogo />
        </div>
        <ul
          id='desktop-menu'
          className='hidden gap-4'
        >
          {!session && (
            <>
              <li>
                <Link
                  href='/api/auth/signin'
                  className='btn col-span-1 w-full bg-white text-black'
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href='/api/auth/signin'
                  className='btn col-span-1 w-full'
                >
                  Sign up for free
                </Link>
              </li>
            </>
          )}
          {session && (
            <li>
              <Link href={`/u/${session?.user?.id}`}>
                <Avatar
                  size='sm'
                  src={session.user?.image}
                  name={session.user?.name}
                />
              </Link>
            </li>
          )}
        </ul>
        <div
          id='mobile-menu'
          className='hidden'
        >
          <div className=''>
            <Menu className='h-7 w-7 text-black' />
          </div>
        </div>
      </div>
    </nav>
  )
}
