import React from 'react'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { listMenu } from './listMenuText.d'

export const ListMenuWeb: React.FC = () => {
  return (
    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
      <ButtonGroup variant='text' aria-label='text button group'>
        {listMenu.map((text) => (
          <Button key={text.text}>
            <Link href={text.path} underline='none'>
              {text.text}
            </Link>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  )
}
