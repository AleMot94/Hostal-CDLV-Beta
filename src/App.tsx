import { Box } from '@mui/material'
import { NavBar } from './components/NavBar/NavBar'
import { Carrusel } from './components/Carrusel/Carrusel'
import { Habitaciones } from './components/Habitaciones/Habitaciones'

import './App.css'

function App(): JSX.Element {
  return (
    <Box>
      <NavBar />
      <Carrusel />
      <Habitaciones />
    </Box>
  )
}

export default App
