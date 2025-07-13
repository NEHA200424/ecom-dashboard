'use client';

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

const countryCoords = {
  India: [20.5937, 78.9629],
  USA: [37.0902, -95.7129],
  Germany: [51.1657, 10.4515],
  Japan: [36.2048, 138.2529],
  Brazil: [-14.235, -51.9253],
  Canada: [56.1304, -106.3468],
  Australia: [-25.2744, 133.7751],
  Russia: [61.524, 105.3188],
  France: [46.2276, 2.2137],
  China: [35.8617, 104.1954]
};

const regionData = Object.keys(countryCoords).map(country => ({
  country,
  coords: countryCoords[country],
  value: Math.floor(Math.random() * 100)
}));

export default function LeafletMap() {
  return (
    <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {regionData.map((region, idx) => (
        <Marker key={idx} position={region.coords}>
          <Popup>
            <strong>{region.country}</strong><br />
            Sales: {region.value}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}



