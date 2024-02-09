import * as React from 'react'
import { useState } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { ListButtons } from './ListButtons'
import { ImagenesContainer } from './Imagenes'
import { useGallery } from '../../hooks/useGetGallery'
import Grid from '@mui/material/Grid'
import './Galeria.css'

// const itemData = [
//   {
//     img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
//     title: 'Breakfast',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
//     title: 'Burger',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
//     title: 'Camera',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
//     title: 'Coffee',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
//     title: 'Hats',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
//     title: 'Honey',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
//     title: 'Basketball',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
//     title: 'Fern',
//     category: 'habitacion'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
//     title: 'Mushrooms',
//     category: 'pileta'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
//     title: 'Tomato basil',
//     category: 'cocina'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
//     title: 'Sea star',
//     category: 'area-comun'
//   },
//   {
//     img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
//     title: 'Bike',
//     category: 'jardin'
//   }
// ]

// const allCategorys: string[] = [
//   'todo',
//   'habitacion',
//   'pileta',
//   'cocina',
//   'area-comun',
//   'jardin'
// ]

export const Galeria: React.FC = () => {
  // const [imgInfo, setImgInfo] = useState(itemData)
  const { gallery, loading, error } = useGallery()
  const baseUrl = 'http://localhost:8000/'

  // const filterCategory = (category: string): void => {
  //   if (category === 'todo') {
  //     setImgInfo(itemData)
  //     return
  //   }

  //   const filteredCategory = itemData.filter(
  //     (item) => item.category === category
  //   )
  //   setImgInfo(filteredCategory)
  // }

  return (
    <Box>
      <Typography>Galeria</Typography>

      {/* <ListButtons categorys={allCategorys} filterCategory={filterCategory} /> */}

      {/* <ImagenesContainer imgInfo={imgInfo} /> */}
      <Grid container spacing={0} direction='row' justifyContent={'center'}>
        {error !== null && <h3>Error al cargar galeria... {error}</h3>}
        {loading && <h3>Cargando...</h3>}
        {gallery?.map((picture) => (
          <Grid
            item
            key={picture.id}
            style={{ width: '200px', margin: 0, padding: 0 }}
          >
            <img
              src={baseUrl + picture.image}
              alt={picture.category}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
