import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='flex h-24 w-full items-center justify-center justify-self-end border-t bg-white'>
      <a
        className='flex items-center justify-center'
        href='https://callmi.vercel.app'
        target='_blank'
        rel='noopener noreferrer'>
        Powered by{' '}
        <Image
          height={32}
          width={32}
          src='/svg/logo.svg'
          alt='Callmi'
        />
      </a>
    </footer>
  )
}
