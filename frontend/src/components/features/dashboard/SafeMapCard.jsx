import L from "leaflet";
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";
import "leaflet/dist/leaflet.css";
import React, { useEffect } from "react";
import {
  MapContainer,
  Polygon,
  TileLayer,
  Tooltip,
  ZoomControl,
} from "react-leaflet";
import "../../../styles/components/map.css";

// Função para gerar coordenadas em círculo
const generateCircleCoordinates = (
  centerLat,
  centerLng,
  radiusKm,
  points = 32,
) => {
  const coordinates = [];
  const radius = radiusKm / 111.32; // Converter km para graus (aproximadamente)

  for (let i = 0; i <= points; i++) {
    const angle = (i * 2 * Math.PI) / points;
    const lat = centerLat + radius * Math.cos(angle);
    const lng =
      centerLng +
      (radius * Math.sin(angle)) / Math.cos((centerLat * Math.PI) / 180);
    coordinates.push([lat, lng]);
  }

  return coordinates;
};

// Cercas virtuais com suas informações
const virtualFences = [
  {
    id: 1,
    name: "Pasto Bovinos",
    coordinates: generateCircleCoordinates(-23.8505, -47.1333, 0.5), // Área rural próxima
    animals: "Bovinos de Corte",
    color: "#FF4444",
  },
  {
    id: 2,
    name: "Campo Equinos",
    coordinates: generateCircleCoordinates(-23.8605, -47.1533, 0.3),
    animals: "Equinos",
    color: "#4444FF",
  },
  {
    id: 3,
    name: "Área Suínos",
    coordinates: generateCircleCoordinates(-23.8405, -47.1433, 0.4),
    animals: "Suínos",
    color: "#44FF44",
  },
];

const SafeMapCard = () => {
  useEffect(() => {
    // Corrigir o ícone do marcador do Leaflet
    delete L.Icon.Default.prototype._getIconUrl;
    L.Icon.Default.mergeOptions({
      iconRetinaUrl: markerIcon2x,
      iconUrl: markerIcon,
      shadowUrl: markerShadow,
    });
  }, []);

  return (
    <div className="h-[400px] w-full rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Mapa de Cercas Virtuais
        </h2>
      </div>
      <div className="h-[calc(100%-2rem)] w-full">
        <MapContainer
          center={[-23.8505, -47.1333]}
          zoom={14}
          className="h-full w-full rounded-lg"
          zoomControl={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <ZoomControl position="topright" />

          {virtualFences.map((fence) => (
            <Polygon
              key={fence.id}
              positions={fence.coordinates}
              pathOptions={{
                color: fence.color,
                fillColor: fence.color,
                fillOpacity: 0.2,
                weight: 2,
              }}
            >
              <Tooltip sticky className="custom-tooltip">
                <div className="font-semibold">{fence.name}</div>
                <div className="text-sm text-gray-600">{fence.animals}</div>
              </Tooltip>
            </Polygon>
          ))}
        </MapContainer>
      </div>

      {/* Legenda */}
      <div className="mt-4 flex flex-wrap gap-4">
        {virtualFences.map((fence) => (
          <div key={fence.id} className="flex items-center">
            <div
              className="mr-2 h-4 w-4 rounded"
              style={{ backgroundColor: fence.color, opacity: 0.7 }}
            />
            <span className="text-sm text-gray-600">{fence.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SafeMapCard;
