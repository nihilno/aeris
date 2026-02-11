import { useCoords } from "@/context/coords-context";
import { MaptilerLayer } from "@maptiler/leaflet-maptilersdk";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { MapContainer, Marker, useMap } from "react-leaflet";

function Map() {
  const { coords } = useCoords();
  const { lat, lng } = coords;

  return (
    <MapContainer
      className="overflow-hidden rounded-xl shadow"
      center={[lat, lng]}
      zoom={5}
      style={{ height: "400px", width: "100%" }}
    >
      <MapClick />
      <MapTileLayer />

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

function MapTileLayer() {
  const map = useMap();

  useEffect(() => {
    const tileLayer = new MaptilerLayer({
      style: "dataviz-dark",
      apiKey: import.meta.env.VITE_MAP_TILER_API_KEY,
    });

    tileLayer.addTo(map);

    return () => {
      map.removeLayer(tileLayer);
    };
  }, [map]);

  return null;
}
