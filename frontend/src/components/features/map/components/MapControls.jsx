import { useEffect } from "react";
import { useMap } from "react-leaflet";

/**
 * Component to automatically adjust map view
 */
export const ChangeView = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  return null;
};

/**
 * Organized legend component showing Animal Types and Virtual Fences exactly as they appear on map
 */
export const MapLegend = ({
  speciesConfig,
  virtualFencesData,
  className = "",
}) => {
  // Group fences by type for better organization
  const fencesByType =
    virtualFencesData?.reduce((acc, fence) => {
      if (!acc[fence.type]) {
        acc[fence.type] = [];
      }
      acc[fence.type].push(fence);
      return acc;
    }, {}) || {};

  return (
    <div
      className={`rounded-lg border border-amber-200 bg-white/95 p-4 shadow-lg backdrop-blur-sm ${className}`}
    >
      <div className="mb-3 flex items-center gap-2">
        <span className="text-amber-700">🏷️</span>
        <h4 className="text-base font-bold text-amber-800">Legend</h4>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {/* Animal Types Section */}
        <div>
          <h5 className="mb-2 border-b border-gray-200 pb-1 text-sm font-semibold text-gray-800">
            Animal Types
          </h5>
          <div className="space-y-2">
            {speciesConfig.map((species) => (
              <div key={species.key} className="flex items-center gap-2">
                <div
                  className={`h-3 w-3 rounded-full ${species.color} border border-white shadow-sm`}
                ></div>
                <span className="text-sm text-gray-700">{species.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Virtual Fences Section */}
        <div>
          <h5 className="mb-2 border-b border-gray-200 pb-1 text-sm font-semibold text-gray-800">
            Virtual Fences
          </h5>
          <div className="max-h-48 space-y-2 overflow-y-auto">
            {virtualFencesData?.map((fence) => (
              <div key={fence.id} className="flex items-center gap-2">
                <div
                  className="h-3 w-3 flex-shrink-0 rounded-full border border-white shadow-sm"
                  style={{ backgroundColor: fence.color }}
                ></div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-medium text-gray-700">
                    {fence.name}
                  </div>
                  <div className="truncate text-xs text-gray-500">
                    {fence.description} • {fence.radius}m
                  </div>
                </div>
                <span className="flex-shrink-0 text-sm">
                  {fence.species === "cattle" && "🐄"}
                  {fence.species === "swine" && "🐷"}
                  {fence.species === "poultry" && "🐔"}
                  {fence.species === "goats" && "🐐"}
                  {fence.species === "sheep" && "🐑"}
                  {fence.species === "quarantine" && "⚠️"}
                  {fence.species === "management" && "🏢"}
                  {fence.species === "storage" && "📦"}
                  {fence.species === "medical" && "🏥"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* About Virtual Fences */}
      <div className="mt-4 border-t border-gray-200 pt-3">
        <div className="mb-2 flex items-center gap-2">
          <span className="text-gray-600">📍</span>
          <h6 className="text-sm font-semibold text-gray-800">
            About Virtual Fences
          </h6>
        </div>
        <p className="text-xs leading-relaxed text-gray-600">
          Virtual fences define geographic boundaries for your animals. The
          system monitors when animals exit or enter these areas, allowing
          better herd control.
        </p>
      </div>

      {/* Fence Type Summary */}
      <div className="mt-3 grid grid-cols-1 gap-2">
        {Object.entries(fencesByType).map(([type, fences]) => {
          const mainFence = fences[0];
          return (
            <div
              key={type}
              className="rounded-lg border p-2"
              style={{
                backgroundColor: `${mainFence.color}10`,
                borderColor: `${mainFence.color}40`,
              }}
            >
              <div className="mb-1 flex items-center gap-2">
                <div
                  className="h-2 w-2 rounded-full"
                  style={{ backgroundColor: mainFence.color }}
                ></div>
                <span
                  className="text-sm font-medium"
                  style={{ color: mainFence.color }}
                >
                  {type}
                </span>
                <span className="text-xs text-gray-500">
                  ({fences.length} área{fences.length > 1 ? "s" : ""})
                </span>
              </div>
              <div className="text-xs text-gray-600">
                {type === "Main Farm" &&
                  "Área principal onde todos os animais devem permanecer"}
                {type === "Pasture Area" &&
                  "Áreas designadas para pastagem de animais"}
                {type === "Livestock Zone" &&
                  "Zonas específicas para diferentes espécies"}
                {type === "Restricted Zone" &&
                  "Área de acesso restrito e quarentena"}
                {type === "Management Area" &&
                  "Centro de manejo e administração"}
                {type === "Storage Area" &&
                  "Área de armazenamento e suprimentos"}
                {type === "Medical Area" && "Área para atendimento veterinário"}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/**
 * Compact legend for dashboard use
 */
export const CompactMapLegend = ({ speciesConfig, className = "" }) => {
  return (
    <div
      className={`rounded-lg border border-amber-200 bg-white/90 p-3 shadow-sm backdrop-blur-sm ${className}`}
    >
      <h5 className="mb-2 text-sm font-semibold text-amber-800">
        Animal Types
      </h5>
      <div className="flex flex-wrap gap-3">
        {speciesConfig.map((species) => (
          <div key={species.key} className="flex items-center gap-2">
            <div
              className={`h-3 w-3 rounded-full ${species.color} border border-white shadow-sm`}
            ></div>
            <span className="text-xs text-gray-700">{species.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
