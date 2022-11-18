import React from 'react';
import './Map.css';
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet';

const Map = () => {
  return (
    <MapContainer
      center={[38.88324, -77.016296]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[38.88324, -77.016296]}>
        <Popup>
          GALAXY TRAVEL TRAINING CENTER <br /> 300 E. Street SW, Suite 5R30{' '}
          <br /> Washington, DC 20546
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
