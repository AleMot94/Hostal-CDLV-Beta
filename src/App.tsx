import { Box } from '@mui/material'
import NavBar from './common/NavBar'
import TemporaryDrawer from './common/Ejemplo'

import './App.css'

function App(): JSX.Element {
  return (
    <>
      <Box>
        <NavBar />
        <TemporaryDrawer />
      </Box>
    </>
  )
}

export default App
