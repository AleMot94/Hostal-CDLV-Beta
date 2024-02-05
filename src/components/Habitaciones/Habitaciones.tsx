import { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { CardHabitacion } from './CardHabitacion'
import { useBedrooms } from '../../hooks/useGetBedrooms'

export const Habitaciones: React.FC = () => {
  const { bedrooms } = useBedrooms()

  return (
    <Box id='Habitaciones'>
      <Typography>Habitaciones</Typography>
      <Grid container spacing={2} direction='row' justifyContent={'center'}>
        {bedrooms.map((bedroom) => (
          <Grid item key={bedroom.id}>
            <CardHabitacion bedroom={bedroom} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
