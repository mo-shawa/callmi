'use client'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    <nav
      className="relative flex h-16 w-full items-center justify-between px-4 text-black"
      role="navigation"
    >
      <Link href="/" id="nav-left" className="flex items-center">
        <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
          <Image src="/svg/logo.svg" alt="logo" height={64} width={64} />
        </motion.div>
        <h1 className="text-2xl">Callmi</h1>
      </Link>
      <div id="nav-right">
        <details className="dropdown cursor-pointer sm:hidden" id="mobile">
          <summary>
            <Bars3Icon className="h-6 w-6" />
          </summary>
          <div className="absolute right-0 top-16 rounded-xl bg-white p-4 shadow-xl">
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/signup">Sign Up</Link>
              </li>
              <li>
                <Link href="/login">Login</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </details>

        {/* <div className="btn">hello</div> */}
      </div>
    </nav>
  )
}
