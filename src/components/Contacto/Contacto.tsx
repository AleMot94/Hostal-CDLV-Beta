import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { Formulario } from './Formulario'
import { Informacion } from './Informacion'

export const Contacto: React.FC = () => {
  return (
    <Box>
      <Typography>Contacto</Typography>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around'
        }}
      >
        <Informacion />
        <Formulario />
      </Box>
    </Box>
  )
}
