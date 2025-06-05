import { MapLegend } from "./MapControls";

/**
 * Componente para o cabeçalho do mapa de animais
 */
export const AnimalMapHeader = ({
  title,
  showInternalLegend,
  speciesConfig,
  virtualFencesData,
}) => {
  return (
    <>
      {/* Title */}
      {title && (
        <div className="mb-3 sm:mb-4">
          <h2 className="text-lg font-semibold text-amber-900 sm:text-xl">
            {title}
          </h2>
        </div>
      )}

      {/* Enhanced Legend */}
      {showInternalLegend && (
        <div className="mb-4">
          <MapLegend
            speciesConfig={speciesConfig}
            virtualFencesData={virtualFencesData}
          />
        </div>
      )}
    </>
  );
};
