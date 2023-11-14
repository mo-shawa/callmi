'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { useSession } from 'next-auth/react'

import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  const { data: session } = useSession()

  console.log({ session })

  return (
    <div className="navbar fixed top-0 z-50 bg-white shadow">
      <div className="flex-1">
        <Link href="/" id="nav-left" className="flex items-center">
          <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
            <Image src="/svg/logo.svg" alt="logo" height={64} width={64} />
          </motion.div>
          <h1 className="text-2xl">Callmi</h1>
        </Link>
      </div>
      <ul id="desktop-menu" className="hidden grid-cols-2 gap-4 sm:grid">
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
            className="menu dropdown-content rounded-box menu-sm z-[1] mt-3 w-52 bg-base-100 p-2 shadow"
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
