import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  const position = [38.900224, 1.389268];

  return (
    <MapContainer
      center={position}
      zoom={12}
      scrollWheelZoom={false}
      className="mapa"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          Sa Gulita <br />
          Carrer les Camèlies, 1, km.1'7, 07817 Sant Josep de sa Talaia, Illes
          Balears
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default Mapa;
