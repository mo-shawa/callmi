import { Wrapper } from './WrapIfHref'
type Props = React.ComponentPropsWithoutRef<'button'> & {
  href?: string
}

export default function BackButton({ children, href, onClick }: Props) {
  return (
    <Wrapper href={href}>
      <button
        className='text-md group flex items-center justify-center rounded-2xl border  border-gray-300 py-3 pl-4 pr-5 font-medium text-gray-700 '
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
        <span className='leading-[0rem]'>{children}</span>
      </button>
    </Wrapper>
  )
}
