import { useState, useEffect } from 'react'

export default function useFetch(url) {
  const [data, setData] = useState(null)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    async function getData(url) {
      try {
        setLoading(true)
        const response = await fetch(url)
        const result = await response.json()

        setData(result)
        setLoading(false)
      } catch (exception) {
        console.log(exception)
        setError(true)
        setLoading(false)
      }
    }

    getData(url)
  }, [url])

  return {
    data,
    loading,
    error
  }
}
