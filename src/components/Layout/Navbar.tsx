import { Bars3Icon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth'
import Link from 'next/link'
import NavLogo from './NavLogo'
import options from '@/app/api/auth/[...nextauth]/options'
import Avatar from '../General/Avatar'
export default async function Navbar() {
  const session = await getServerSession(options)
  return (
    <div className='navbar fixed top-0 z-50 w-full justify-between bg-white shadow'>
      <div>
        <NavLogo />
      </div>
      <ul
        id='desktop-menu'
        className='hidden grid-cols-2 gap-4 md:grid'>
        {!session && (
          <>
            <li>
              <Link
                href='/api/auth/signin'
                className='btn col-span-1 w-full bg-white text-black'>
                Sign in
              </Link>
            </li>
            <li>
              <Link
                href='/api/auth/signin'
                className='btn col-span-1 w-full'>
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
        className='block flex-none md:hidden'>
        <div className='dropdown dropdown-end'>
          <label
            tabIndex={0}
            className='btn btn-circle border-none bg-transparent'>
            <div className='rounded-full p-2'>
              <Bars3Icon className='h-7 w-7 text-black' />
            </div>
          </label>
          <ul
            tabIndex={0}
            className='menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow'>
            <li>
              <Link
                href='/api/auth/signin'
                className='justify-between'>
                Sign in
                {/* <span className="badge">New</span> */}
              </Link>
            </li>
            <li>/api</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
