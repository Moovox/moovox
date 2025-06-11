import { MapContainer, TileLayer } from "react-leaflet";
import { getAnimalIcon } from "../config/animalIcons";
import { AnimalMarker } from "./AnimalMarker";
import { ChangeView } from "./MapControls";
import { VirtualFences } from "./VirtualFences";

/**
 * Componente para o container principal do mapa
 */
export const AnimalMapContainer = ({
  center,
  zoom,
  height,
  showVirtualFences,
  animals,
  handleAnimalClick,
}) => {
  return (
    <div style={{ height }}>
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        <ChangeView center={center} zoom={zoom} />

        <VirtualFences show={showVirtualFences} animals={animals} />

        {animals.map((animal) => (
          <AnimalMarker
            key={animal.id}
            animal={animal}
            handleClick={handleAnimalClick}
            icon={getAnimalIcon(animal.species)}
          />
        ))}
      </MapContainer>
    </div>
  );
};
