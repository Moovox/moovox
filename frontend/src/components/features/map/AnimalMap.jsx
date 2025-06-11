import { speciesConfig } from "./config/animalIcons";
import { initializeLeaflet, mapDefaults } from "./config/leafletConfig";
import { virtualFencesData } from "./config/virtualFencesConfig";
import { getResponsiveHeight } from "./utils/mapUtils";

// Custom hooks
import {
  useAnimalData,
  useAnimalMapHandlers,
  useAnimalMapState,
} from "./hooks";

// Components
import {
  AnimalMapContainer,
  AnimalMapDebugInfo,
  AnimalMapHeader,
  AnimalMapInfo,
  AnimalMapStates,
  MapStyles,
  SelectedAnimalCard,
} from "./components";

// Initialize Leaflet
initializeLeaflet();

/**
 * Main Animal Map Component - Versão simplificada e melhorada
 * Displays animals on an interactive map with real-time updates
 */
const AnimalMap = ({
  // Filters
  speciesFilter = "",
  statusFilter = "",
  search = "",

  // Map configuration
  height = mapDefaults.height,
  heightSm = "",
  heightMd = "",
  heightLg = "",
  mapCenter = mapDefaults.center,
  mapZoom = mapDefaults.zoom,

  // Features
  autoUpdate = true,
  updateInterval = mapDefaults.updateInterval,
  title = mapDefaults.title,
  showVirtualFences = true,
  showInternalLegend = false,

  // Styling
  className = "",
}) => {
  // Custom hooks
  const mapState = useAnimalMapState({ mapCenter, mapZoom });

  const { animals, loading, error } = useAnimalData({
    speciesFilter,
    statusFilter,
    search,
    autoUpdate,
    updateInterval,
  });

  const handlers = useAnimalMapHandlers({ mapState });

  // Calculate responsive height
  const responsiveHeight = getResponsiveHeight(
    height,
    heightSm,
    heightMd,
    heightLg,
  );

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg ${className}`}
    >
      <MapStyles />

      <div className="p-4 sm:p-6">
        <AnimalMapHeader
          title={title}
          showInternalLegend={showInternalLegend}
          speciesConfig={speciesConfig}
          virtualFencesData={virtualFencesData}
        />

        <AnimalMapInfo
          loading={loading}
          animalsCount={animals.length}
          showVirtualFences={showVirtualFences}
        />
      </div>

      <div className="relative">
        <AnimalMapContainer
          center={mapState.center}
          zoom={mapState.zoom}
          height={responsiveHeight}
          showVirtualFences={showVirtualFences}
          animals={animals}
          handleAnimalClick={handlers.handleAnimalClick}
        />

        {/* Overlay para loading */}
        {loading && (
          <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/80">
            <div className="flex items-center gap-3 rounded-lg bg-white px-4 py-3 shadow-lg">
              <div className="h-5 w-5 animate-spin rounded-full border-2 border-amber-600 border-t-transparent"></div>
              <span className="font-medium text-gray-700">
                Carregando mapa...
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 sm:p-6">
        <AnimalMapStates loading={false} error={error} />

        <SelectedAnimalCard
          selectedAnimal={mapState.selectedAnimal}
          onClearSelection={mapState.clearSelection}
        />

        <AnimalMapDebugInfo
          animalsCount={animals.length}
          center={mapState.center}
        />
      </div>
    </div>
  );
};

export default AnimalMap;
