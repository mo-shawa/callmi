'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function NavLogo() {
  return (
    <Link href="/" id="nav-left" className="flex items-center">
      <motion.div whileHover={{ rotate: 180, scale: 1.1 }}>
        <Image src="/svg/logo.svg" alt="logo" height={64} width={64} />
      </motion.div>
      <h1 className="text-2xl">Callmi</h1>
    </Link>
  )
}
