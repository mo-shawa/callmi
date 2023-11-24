import { Bars3Icon } from '@heroicons/react/24/outline'
import { getServerSession } from 'next-auth'
import Image from 'next/image'
import Link from 'next/link'
import NavLogo from './NavLogo'
import options from '@/app/api/auth/[...nextauth]/options'
export default async function Navbar() {
  const session = await getServerSession(options)
  console.log({ session })

  return (
    <div className="navbar fixed top-0 z-50 w-full bg-white shadow">
      <div className="flex-1">
        <NavLogo />
      </div>
      <ul id="desktop-menu" className="hidden grid-cols-2 gap-4 sm:grid">
        {!session && (
          <>
            <li>
              <Link
                href="/api/auth/signin"
                className="btn col-span-1 w-full bg-white text-black"
              >
                Sign in
              </Link>
            </li>
            <li>
              <Link href="/api/auth/signin" className="btn col-span-1 w-full">
                Sign up for free
              </Link>
            </li>
          </>
        )}
        {session && (
          <li>
            <Image
              src={session.user?.image || 'https://i.pravatar.cc/150?img=3'}
              alt="Avatar"
              width={34}
              height={34}
              className="avatar rounded-full border"
            />
          </li>
        )}
      </ul>

      <div id="mobile-menu" className="block flex-none sm:hidden">
        <div className="dropdown dropdown-end">
          <label
            tabIndex={0}
            className="btn btn-circle border-none bg-transparent"
          >
            <div className="rounded-full p-2">
              <Bars3Icon className="h-7 w-7 text-black" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-base-100 p-2 shadow"
          >
            <li>
              <Link href="/api/auth/signin" className="justify-between">
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
