import { useEffect, useRef } from 'react'

export default function useKeys(callback, change) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function handleKeyDown(event) {
      savedCallback.current(event.key)
    }

    document.addEventListener('keydown', handleKeyDown)

    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [change])
}
