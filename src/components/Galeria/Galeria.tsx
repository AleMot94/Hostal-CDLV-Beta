import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import { useGallery } from '../../hooks/useGetGallery'
import Grid from '@mui/material/Grid'
import './Galeria.css'

const allCategorys: string[] = [
  'todo',
  'habitacion',
  'pileta',
  'cocina',
  'area-comun',
  'jardin'
]

export const Galeria: React.FC = () => {
  const { categoryGallery, categoryFilter, loading, error } = useGallery()
  const baseUrl = 'http://localhost:8000/'

  const handleClickCategoryFilter = (category: string): void => {
    categoryFilter(category)
  }

  return (
    <Box>
      <Typography>Galeria</Typography>

      <ButtonGroup>
        {error !== null && (
          <h3>Error al cargar filtro de categoria... {error}</h3>
        )}
        {loading && <h3>Cargando...</h3>}
        {allCategorys.map((category) => (
          <Button
            key={category}
            onClick={() => {
              handleClickCategoryFilter(category)
            }}
          >
            {category}
          </Button>
        ))}
      </ButtonGroup>

      <Grid container spacing={0} direction='row' justifyContent={'center'}>
        {error !== null && <h3>Error al cargar galeria... {error}</h3>}
        {loading && <h3>Cargando...</h3>}
        {categoryGallery?.map((picture) => (
          <Grid
            item
            key={picture.id}
            style={{ width: '200px', margin: 0, padding: 0 }}
          >
            <img
              src={baseUrl + picture.image}
              alt={picture.category}
              style={{ width: '100%', height: '100%' }}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
