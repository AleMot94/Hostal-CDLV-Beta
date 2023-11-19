import React from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CardHabitacion } from './CardHabitacion'

const listImagenes = [
  'imagenes/eva01.jpg',
  'imagenes/golden.jpg',
  'imagenes/astronauta.jpg',
  'imagenes/sharpey.png'
]
const baseUrl = import.meta.env.BASE_URL

export const Habitaciones: React.FC = () => {
  return (
    <Box id='Habitaciones'>
      <Typography>Habitaciones</Typography>
      <Grid container spacing={2} direction='row' justifyContent={'center'}>
        {listImagenes.map((img) => (
          <Grid item key={img}>
            <CardHabitacion img={baseUrl + img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
