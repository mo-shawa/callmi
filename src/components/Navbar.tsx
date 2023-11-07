import Image from 'next/image'
export default function Navbar() {
  return (
    <nav
      className="relative flex h-16 w-full items-center justify-center text-black"
      role="navigation"
    >
      <div className="flex items-center">
        <Image src="/logo.svg" alt="logo" height={64} width={64} />
        <h1 className="text-2xl">Callmi</h1>
      </div>
    </nav>
  )
}
