import { useEffect, useState } from 'react'

type Props = {
  icon: React.ReactNode
  children: React.ReactNode
  className?: string
}

export default function useToast({ icon, children, className }: Props) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (show) {
      const timeout = setTimeout(() => setShow(false), 3000)
      return () => clearTimeout(timeout)
    }
  })

  return {
    element: show && (
      <div className="toast">
        <div className={`alert flex gap-2 ${className}`}>
          {icon}
          <span>{children}</span>
        </div>
      </div>
    ),
    show: () => setShow(true),
  }
}
