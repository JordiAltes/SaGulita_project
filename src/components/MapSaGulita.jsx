import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon, icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const Mapa = () => {
  const position = [38.900224, 1.389268];
  const saGulitaIcon = icon({
    iconUrl:
      "https://firebasestorage.googleapis.com/v0/b/sagulita-d8f9d.appspot.com/o/fotosWeb%2FlogoSaGulita.jpeg?alt=media&token=42aa51c7-c4a4-4aad-9f2b-6ae244ed397d",
    iconSize: [70, 70],
    iconAnchor: [50, 50],
  });

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
      <Marker position={position} icon={saGulitaIcon}>
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
