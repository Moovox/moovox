import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import { AnimalMarker } from "./components/AnimalMarker";
import { MapStyles } from "./components/MapStyles";
import { VirtualFences } from "./components/VirtualFences";
import { getAnimalIcon } from "./config/animalIcons";
import { mapDefaults } from "./config/leafletConfig";
import { useSimpleAnimalData } from "./hooks";

/**
 * Componente de mapa simples e reutilizável
 * Versão limpa sem animações complexas
 */
export const SimpleMap = ({
  height = "400px",
  showControls = true,
  showLegend = false,
  showVirtualFences = true,
  center = mapDefaults.center,
  zoom = mapDefaults.zoom,
  className = "",
  onAnimalClick = null,
  onDataUpdate = null
}) => {
  // Usar o hook simples para dados dos animais
  const { animals, loading, error } = useSimpleAnimalData();

  // Expor dados para componente pai
  React.useEffect(() => {
    if (onDataUpdate) {
      onDataUpdate({ animals, loading, error });
    }
  }, [animals, loading, error, onDataUpdate]);

  const handleAnimalClick = (animal) => {
    if (onAnimalClick) {
      onAnimalClick(animal);
    } else {
      console.log("Animal clicado:", animal);
    }
  };

  return (
    <div className={`relative ${className}`} style={{ height }}>
      <MapStyles />
      
      {/* Loading overlay */}
      {loading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/90">
          <div className="flex items-center gap-3">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-amber-500 border-t-transparent"></div>
            <span className="font-medium text-gray-700">Carregando mapa...</span>
          </div>
        </div>
      )}

      {/* Error overlay */}
      {error && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/90">
          <div className="text-center">
            <div className="text-red-500 text-lg mb-2">⚠️</div>
            <span className="font-medium text-gray-700">{error}</span>
          </div>
        </div>
      )}

      {/* Mapa */}
      <MapContainer
        center={center}
        zoom={zoom}
        style={{ height: "100%", width: "100%" }}
        attributionControl={false}
        zoomControl={showControls}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />

        {/* Cercas virtuais */}
        {showVirtualFences && (
          <VirtualFences show={true} animals={animals} />
        )}

        {/* Marcadores dos animais */}
        {animals.map((animal) => (
          <AnimalMarker
            key={animal.id}
            animal={animal}
            handleClick={handleAnimalClick}
            icon={getAnimalIcon(animal.species)}
          />
        ))}
      </MapContainer>

      {/* Contador de animais - apenas se não tem legenda externa */}
      {!showLegend && !loading && (
        <div className="absolute right-3 top-3 z-[999] rounded-lg bg-white/95 px-3 py-1.5 shadow-lg backdrop-blur-sm">
          <span className="text-sm font-medium text-gray-700">
            <span className="font-semibold text-amber-600">{animals.length}</span> animais
          </span>
        </div>
      )}
    </div>
  );
}; 