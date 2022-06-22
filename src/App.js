import React from 'react'
import Header from './components/Header'
import { MapContainer, 
         TileLayer, 
         useMap,
         Marker,
         Popup } 
from 'react-leaflet'
import './App.css'
import equipmentPositionHistory from './data/equipmentPositionHistory.json'

function App() {
  return (
    <div>
       <Header/>
       <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {equipmentPositionHistory.map(equipment=>(
              
                <Marker 
                  key={equipment.id}
                  position={[51.505, -0.09]}
                  >
                </Marker>

            ))}
          
       </MapContainer>
    </div>
  )
}

export default App
