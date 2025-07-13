// src/components/WorldMap.js
import React from 'react';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import worldGeoJSON from '../data/countries-geo.json'; // We'll get this below
import { Box } from '@mui/material';

const WorldMap = ({ data }) => {
  const getColor = (value) => {
    return value > 80 ? '#D91656'
         : value > 50 ? '#EB5B00'
         : value > 20 ? '#FFB200'
         : '#fff0c1';
  };

  const onEachCountry = (feature, layer) => {
    const countryCode = feature.id;
    const value = data[countryCode] || 0;

    layer.setStyle({
      fillColor: getColor(value),
      fillOpacity: 0.7,
      color: '#333',
      weight: 1
    });

    layer.bindPopup(`${feature.properties.name}: ${value.toFixed(0)} sales`);
  };

  return (
    <Box sx={{ height: 400, borderRadius: 2, overflow: 'hidden' }}>
      <MapContainer center={[20, 0]} zoom={2} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; OpenStreetMap contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON data={worldGeoJSON} onEachFeature={onEachCountry} />
      </MapContainer>
    </Box>
  );
};

export default WorldMap;
