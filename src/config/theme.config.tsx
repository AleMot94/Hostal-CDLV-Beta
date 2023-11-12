import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import React from 'react'
// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
type ThemeProp = { children: JSX.Element }

enum themePalette {
  BG_DEFAULT_COLOR = '#12181b',
  PRIMARY_MAIN_COLOR = '#C8FA5F'
}

const theme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: themePalette.BG_DEFAULT_COLOR
    },
    primary: {
      main: themePalette.PRIMARY_MAIN_COLOR
    }
  },
  components: {
    MuiButton: {
      defaultProps: {
        style: {
          textTransform: 'none'
        }
      }
    }
  }
})

export const ThemeConfig: React.FC<ThemeProp> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  )
}
