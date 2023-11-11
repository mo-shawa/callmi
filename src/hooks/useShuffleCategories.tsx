import { useEffect, useRef, useState } from 'react'

export default function useShuffleCategories(categoryData: string[]) {
  const timeoutRef = useRef<any>(null)

  const [categories, setCategories] = useState<string[]>(categoryData)

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      shuffleCategories()
    }, 5000)
    return () => {
      clearTimeout(timeoutRef.current)
    }
  })

  const shuffleCategories = () => {
    setCategories((categories) => {
      const newCategories = [...categories]
      for (let i = newCategories.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[newCategories[i], newCategories[j]] = [
          newCategories[j],
          newCategories[i],
        ]
      }
      return newCategories
    })

    timeoutRef.current = setTimeout(() => {
      shuffleCategories()
    }, 5000)
  }

  return { categories }
}
