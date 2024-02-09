import { useEffect, useState } from 'react'
import { getGallery } from '../services/getGallery'

interface Gallery {
  id: string
  category: string
  image: string
}

interface UseGalleryResult {
  gallery: Gallery[]
  loading: boolean
  error: string | null
}

export const useGallery = (): UseGalleryResult => {
  const [gallery, setGallery] = useState<Gallery[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true)
      const fetchedGallery = await getGallery()
      setGallery(fetchedGallery)
    } catch (error) {
      setError('No se encontraron datos')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    void fetchData()
  }, [])

  return { gallery, loading, error }
}
