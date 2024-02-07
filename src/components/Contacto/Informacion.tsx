import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

export const Informacion: React.FC = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Typography>Calle de las Alfareras</Typography>
      <Typography>San Carlos - Salta</Typography>
      <Typography>E-mail: info@allnorte.com.ar</Typography>
      <Typography>Telf: (+54) 387 471 2960</Typography>
      <Typography>Cel: (+54) 9 11 5020 9710</Typography>
    </Box>
  )
}
