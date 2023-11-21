import { useEffect, useState } from 'react'

type Props = {
  message: string
  icon?: React.ReactNode
  className?: string
}

export default function useToast({ icon, message, className }: Props) {
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
          <span>{message}</span>
        </div>
      </div>
    ),
    show: () => setShow(true),
  }
}
