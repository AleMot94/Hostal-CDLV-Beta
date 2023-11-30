import React from 'react'
import Grid from '@mui/material/Grid'

interface Imagen {
  img: string
  title: string
  category: string
}

interface Imagenes {
  imgInfo: Imagen[]
}

export const ImagenesContainer: React.FC<Imagenes> = ({ imgInfo }) => {
  return (
    <>
      <Grid container spacing={0} direction='row' justifyContent={'center'}>
        {imgInfo.map((item) => (
          <Grid
            item
            key={item.title}
            style={{ width: '200px', margin: 0, padding: 0 }}
          >
            <img
              src={item.img}
              alt={item.title}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        ))}
      </Grid>
    </>
  )
}
