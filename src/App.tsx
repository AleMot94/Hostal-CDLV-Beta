import { Box } from '@mui/material'
import { NavBar } from './components/NavBar/NavBar'
import { Carrusel } from './components/Carrusel/Carrusel'
import { Habitaciones } from './components/Habitaciones/Habitaciones'
import { Galeria } from './components/Galeria/Galeria'
import { MapView } from './components/MapView/MapView'
import { Contacto } from './components/Contacto/Contacto'
import './App.css'

function App(): JSX.Element {
  return (
    <Box>
      <NavBar />
      <Carrusel />
      <Habitaciones />
      <Galeria />
      <MapView />
      <Contacto />
    </Box>
  )
}

export default App
