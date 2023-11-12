import * as React from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { useToggleDrawer } from '../../hook/useToggleDrawer'
import { ListMenuMobile } from './ListMenuMobile'

export const MenuDrawerMobile: React.FC = () => {
  const { state, toggleDrawer } = useToggleDrawer()

  return (
    <Box>
      <IconButton
        size='large'
        edge='start'
        color='inherit'
        aria-label='menu'
        onClick={toggleDrawer(true)}
        sx={{ mr: 2, display: { md: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor={'left'} open={state} onClose={toggleDrawer(false)}>
        <ListMenuMobile />
      </Drawer>
    </Box>
  )
}
