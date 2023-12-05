import Link from 'next/link'

type Props = React.ComponentPropsWithoutRef<'button'> & {
  href?: string
}

export default function BackButton({ children, href, onClick }: Props) {
  const Wrapper = ({ children }: Props) =>
    href ? <Link href={href}>{children}</Link> : <>{children}</>
  return (
    <Wrapper>
      <button
        className='group flex items-center rounded-2xl border border-stone-300 py-2 pl-4 pr-5 text-sm font-medium text-stone-700 transition-colors hover:bg-stone-50 hover:text-stone-900 '
        type='button'
        onClick={onClick}
      >
        <svg
          className='mr-2 h-4 w-4 transition-transform duration-200 group-hover:-translate-x-1'
          fill='none'
          stroke='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M10 19l-7-7m0 0l7-7m-7 7h18'
          ></path>
        </svg>
        {children}
      </button>
    </Wrapper>
  )
}
