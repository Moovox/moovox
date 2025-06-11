import { useState } from "react";
import { mapDefaults } from "../config/leafletConfig";

/**
 * Custom hook para gerenciar o estado do mapa de animais
 */
export const useAnimalMapState = ({
  mapCenter = mapDefaults.center,
  mapZoom = mapDefaults.zoom,
}) => {
  // Map state
  const [center, setCenter] = useState(mapCenter);
  const [zoom, setZoom] = useState(mapZoom);
  const [selectedAnimal, setSelectedAnimal] = useState(null);

  // State update functions
  const updateMapView = (newCenter, newZoom = 16) => {
    setCenter(newCenter);
    setZoom(newZoom);
  };

  const selectAnimal = (animal) => {
    setSelectedAnimal(animal);
    if (animal) {
      updateMapView([animal.latitude, animal.longitude]);
    }
  };

  const clearSelection = () => {
    setSelectedAnimal(null);
  };

  return {
    // State
    center,
    zoom,
    selectedAnimal,

    // Actions
    updateMapView,
    selectAnimal,
    clearSelection,
    setCenter,
    setZoom,
  };
};
