import { initializeLeaflet, mapDefaults } from "./config/leafletConfig";
import { getResponsiveHeight } from "./utils/mapUtils";

// Custom hooks
import {
  useAnimalData,
  useAnimalMapHandlers,
  useAnimalMapState,
} from "./hooks";

// Components
import { AnimalMapContainer, MapStyles } from "./components";

// Initialize Leaflet
initializeLeaflet();

/**
 * Animal Map Component especialmente otimizado para Dashboard
 * Versão compacta sem padding e com visual adaptado para cards
 */
const AnimalMapDashboard = ({
  // Filters
  speciesFilter = "",
  statusFilter = "",
  search = "",

  // Map configuration
  height = "240px",
  heightSm = "280px",
  heightMd = "400px",
  heightLg = "",
  mapCenter = mapDefaults.center,
  mapZoom = mapDefaults.zoom,

  // Features
  autoUpdate = true,
  updateInterval = mapDefaults.updateInterval,
  showVirtualFences = true,

  // Styling
  className = "",
}) => {
  // Custom hooks
  const mapState = useAnimalMapState({ mapCenter, mapZoom });

  const { animals, loading } = useAnimalData({
    speciesFilter,
    statusFilter,
    search,
    autoUpdate,
    updateInterval,
  });

  const handlers = useAnimalMapHandlers({ mapState });

  // Calculate responsive height - se for 100%, usar altura mínima
  let responsiveHeight = height;
  if (height === "100%") {
    responsiveHeight = "300px"; // Altura mínima para garantir que apareça
  } else {
    responsiveHeight = getResponsiveHeight(
      height,
      heightSm,
      heightMd,
      heightLg,
    );
  }

  return (
    <div
      className={`relative w-full bg-white ${className}`}
      style={{ height: responsiveHeight }}
    >
      <MapStyles />

      <AnimalMapContainer
        center={mapState.center}
        zoom={mapState.zoom}
        height="100%"
        showVirtualFences={showVirtualFences}
        animals={animals}
        handleAnimalClick={handlers.handleAnimalClick}
      />

      {/* Overlay elegante para loading */}
      {loading && (
        <div className="absolute inset-0 z-[1000] flex items-center justify-center bg-white/95">
          <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-lg">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-amber-500 border-t-transparent"></div>
            <span className="font-medium text-gray-700">
              Carregando mapa...
            </span>
          </div>
        </div>
      )}

      {/* Badge de contagem elegante */}
      {!loading && (
        <div className="absolute left-3 top-3 z-[999] rounded-lg border border-white/20 bg-white/95 px-3 py-1.5 text-sm font-medium text-gray-700 shadow-md backdrop-blur-sm">
          <span className="font-semibold text-amber-600">{animals.length}</span>{" "}
          animais
        </div>
      )}

      {/* Informação de hover no canto inferior */}
      {!loading && (
        <div className="absolute bottom-3 right-3 z-[999] rounded bg-black/70 px-2 py-1 text-xs text-white backdrop-blur-sm">
          💡 Hover nas cercas
        </div>
      )}
    </div>
  );
};

export default AnimalMapDashboard;
