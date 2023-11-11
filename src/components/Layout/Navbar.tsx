'use client'
import { Bars3Icon, XCircleIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'

import Image from 'next/image'
import Link from 'next/link'
export default function Navbar() {
  return (
    // <nav
    //   className="fixed top-0 z-50 flex h-16 w-full items-center justify-between bg-white px-4 py-10 text-black shadow-md"
    //   role="navigation "
    // >
    //   <Link href="/" id="nav-left" className="flex items-center">
    //     <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
    //       <Image src="/svg/logo.svg" alt="logo" height={64} width={64} />
    //     </motion.div>
    //     <h1 className="text-2xl">Callmi</h1>
    //   </Link>
    //   <div id="nav-right">
    //     <details className="dropdown cursor-pointer sm:hidden" id="mobile">
    //       <summary>
    //         <Bars3Icon className="h-6 w-6" />
    //       </summary>
    //       <div className="absolute right-0 top-16 rounded-xl bg-white p-4 shadow-xl">
    //         <ul className="flex flex-col gap-3">
    //           <li>
    //             <Link href="/signup">Sign Up</Link>
    //           </li>
    //           <li>
    //             <Link href="/login">Login</Link>
    //           </li>
    //           <li>
    //             <Link href="/about">About</Link>
    //           </li>
    //         </ul>
    //       </div>
    //     </details>

    //     {/* <div className="btn">hello</div> */}
    //   </div>
    // </nav>
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <Link href="/" id="nav-left" className="flex items-center">
          <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
            <Image src="/svg/logo.svg" alt="logo" height={64} width={64} />
          </motion.div>
          <h1 className="text-2xl">Callmi</h1>
        </Link>
      </div>
      <div className="hidden flex-none sm:block"></div>
      <div className="block flex-none sm:hidden">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full p-2">
              <Bars3Icon className="h-6 w-6 text-black" />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
