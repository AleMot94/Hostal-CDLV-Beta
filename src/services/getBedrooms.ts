export const getBedrooms = async (): Promise<any[]> => {
  try {
    const res = await fetch('http://localhost:8000/api/bedrooms')
    const data = await res.json()

    const bedrooms = data.payload
    return bedrooms
  } catch (error) {
    throw new Error('Algo salio mal con fetch a fact')
  }
}
