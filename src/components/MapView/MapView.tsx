import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export const MapView: React.FC = () => {
  return (
    <Box>
      <Typography>Ubicación</Typography>
      <MapContainer
        center={{ lat: -25.885439011392336, lng: -65.93038216849955 }}
        zoom={15}
        style={{ height: '400px', width: '80%' }}
      >
        <TileLayer
          url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker
          position={{ lat: -25.885439011392336, lng: -65.93038216849955 }}
        >
          <Popup>
            La Casa de los Vientos <br /> Hostería Rural
          </Popup>
        </Marker>
      </MapContainer>
    </Box>
  )
}
