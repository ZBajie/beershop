import { useEffect, useState } from "react"

export function useFetch<T>(url: string) {
  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<Error | null | string>(null)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      try {
        setLoading(true)
        const result = await fetch(url)
        const resultData = (await result.json()) as T
        if (isMounted) {
          setData(resultData)
        }
      } catch (err) {
        if (isMounted) {
          if (err instanceof Error) {
            setError(err.message)
          }
          setError("Failed to load data")
        }
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }
    fetchData()
    return () => {
      isMounted = false
    }
  }, [url])

  return { data, loading, error }
}
