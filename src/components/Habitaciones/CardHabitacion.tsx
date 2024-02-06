import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

const baseUrl = 'http://localhost:8000/'

interface Bedroom {
  id: string
  name: string
  description: string
  category: string
  image: string
}

interface BedroomProps {
  bedroom: Bedroom
}

export const CardHabitacion: React.FC<BedroomProps> = ({ bedroom }) => {
  return (
    <Card sx={{ maxWidth: 220, padding: 0 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={baseUrl + bedroom.image}
        title='green iguana'
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          {bedroom.name}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          {bedroom.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions>
    </Card>
  )
}
