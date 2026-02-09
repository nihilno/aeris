import { useCoords } from "@/context/coords-context";
import "leaflet/dist/leaflet.css";
import { MapContainer, Marker, TileLayer, useMap } from "react-leaflet";

function Map() {
  const { coords } = useCoords();
  const { lat, lng } = coords;

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={5}
      style={{ height: "500px", width: "100%" }}
    >
      <MapClick />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, lng]} />
    </MapContainer>
  );
}

export default Map;

function MapClick() {
  const map = useMap();
  const { setCoords } = useCoords();

  map.on("click", (e) => {
    const { lat, lng } = e.latlng;

    map.panTo([lat, lng]);
    setCoords({ lat, lng });
  });

  return null;
}
