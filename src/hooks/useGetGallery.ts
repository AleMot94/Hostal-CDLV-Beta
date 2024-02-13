import { useEffect, useState } from 'react'
import { getGallery } from '../services/getGallery'

interface Gallery {
  id: string
  category: string
  image: string
}

interface UseGalleryResult {
  categoryGallery: Gallery[]
  categoryFilter: (category: string) => void
  loading: boolean
  error: string | null
}

export const useGallery = (): UseGalleryResult => {
  const [gallery, setGallery] = useState<Gallery[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const [categoryGallery, setCategory] = useState<Gallery[]>([])

  const fetchData = async (): Promise<void> => {
    try {
      setLoading(true)
      const fetchedGallery = await getGallery()
      setGallery(fetchedGallery)
      setCategory(fetchedGallery)
    } catch (error) {
      setError('No se encontraron datos')
    } finally {
      setLoading(false)
    }
  }

  const categoryFilter = (category: string): void => {
    if (category === 'todo') {
      setCategory(gallery)
    } else {
      const pictureCategory = gallery.filter(
        (picture) => picture.category === category
      )
      setCategory(pictureCategory)
    }
  }

  useEffect(() => {
    void fetchData()
    categoryFilter('todo')
  }, [])

  return { categoryGallery, categoryFilter, loading, error }
}
