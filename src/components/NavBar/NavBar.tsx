import React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import AdbIcon from '@mui/icons-material/Adb'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import { MenuDrawerMobile } from './MenuDrawerMobile'

const NavBar: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar>
        <Toolbar>
          <Container maxWidth='xl' sx={{ display: 'flex' }}>
            <MenuDrawerMobile />

            <Stack direction='row' sx={{ flexGrow: 1, alignItems: 'center' }}>
              <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

              <Typography
                variant='h6'
                noWrap
                component='a'
                href='#app-bar-with-responsive-menu'
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none'
                }}
              >
                LOGO
              </Typography>
            </Stack>
          </Container>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default NavBar
