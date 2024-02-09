export const getGallery = async (): Promise<any[]> => {
  const res = await fetch('http://localhost:8000/api/gallery')
  const data = await res.json()

  const gallery = data.payload
  return gallery
}
