import Link from 'next/link'

type Props = {
  children: React.ReactNode
  href?: string
}

export const Wrapper = ({ children, href }: Props) =>
  href ? <Link href={href}>{children}</Link> : <>{children}</>
