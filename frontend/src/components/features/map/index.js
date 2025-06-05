// Main components
export { default as AnimalMap } from "./AnimalMap";
export { default as AnimalMapDashboard } from "./AnimalMapDashboard";

// Sub-components
export { AnimalMarker } from "./components/AnimalMarker";
export {
  ChangeView,
  CompactMapLegend,
  MapLegend,
} from "./components/MapControls";
export { VirtualFences } from "./components/VirtualFences";

// Hooks
export { useAnimalData } from "./hooks/useAnimalData";

// Configuration
export {
  animalIcons,
  getAnimalIcon,
  speciesConfig,
} from "./config/animalIcons";
export {
  customTooltipStyle,
  initializeLeaflet,
  mapDefaults,
} from "./config/leafletConfig";
export {
  FARM_BASE_COORDINATES,
  fenceTypes,
  getFenceForAnimal,
  getFenceForSpecies,
  getFenceForStatus,
  getRandomCoordinatesInFence,
  virtualFencesData,
} from "./config/virtualFencesConfig";

// Utils
export * from "./utils/fenceUtils";
export * from "./utils/mapUtils";
