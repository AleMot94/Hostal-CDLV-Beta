import { Box } from '@mui/material'
import { NavBar } from './components/NavBar/NavBar'
import { Carrusel } from './components/Carrusel/Carrusel'

import './App.css'

function App(): JSX.Element {
  return (
    <Box>
      <NavBar />
      <Carrusel />
    </Box>
  )
}

export default App
