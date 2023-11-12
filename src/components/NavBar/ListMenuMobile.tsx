import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import { useToggleDrawer } from '../../hook/useToggleDrawer'

const listOne = ['Inicio', 'Habitaciones', 'Galeria', 'Ubicación', 'Contacto']

export const ListMenuMobile: React.FC = () => {
  const { toggleDrawer } = useToggleDrawer()

  return (
    <Box
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
      sx={{ width: '230px' }}
    >
      <List>
        {listOne.map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <Link href='#' underline='none'>
                {text}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <Link href='#' underline='none'>
              Reservar
            </Link>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )
}