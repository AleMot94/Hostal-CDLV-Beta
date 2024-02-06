import { useEffect, useState } from 'react'
import { getBedrooms } from '../services/getBedrooms'

interface Bedroom {
  id: string
  name: string
  description: string
  category: string
  image: string
}

interface UseBedroomsResult {
  bedrooms: Bedroom[]
  loading: boolean
  error: string | null
}

export const useBedrooms = (): UseBedroomsResult => {
  const [bedrooms, setBedrooms] = useState<Bedroom[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true)
      const fetchedBedrooms = await getBedrooms()
      setBedrooms(fetchedBedrooms)
    } catch (error) {
      setError('No se encontraron datos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { bedrooms, loading, error }
}
