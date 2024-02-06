export const getBedrooms = async (): Promise<any[]> => {
  const res = await fetch('http://localhost:8000/api/bedrooms')
  const data = await res.json()

  const bedrooms = data.payload
  return bedrooms
}
