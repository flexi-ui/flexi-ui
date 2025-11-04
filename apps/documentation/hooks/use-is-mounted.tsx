import { useEffect, useState } from 'react'

export const useIsMounted = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true)
    })
  }, [])

  return isMounted
}
