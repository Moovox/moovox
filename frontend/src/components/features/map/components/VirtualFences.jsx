import { Circle, LayerGroup, Tooltip } from "react-leaflet";
import { virtualFencesData } from "../config/virtualFencesConfig";
import { getAnimalsInFence } from "../utils/fenceUtils";

/**
 * Virtual fences component with fence info tooltips (hover only)
 */
export const VirtualFences = ({
  show = true,
  fences = virtualFencesData,
  animals = [], // Array of animals to check against fences
}) => {
  if (!show) return null;

  // Define different tooltip directions and offsets to avoid overlap
  const getTooltipSettings = (fence) => {
    const settings = {
      1: { direction: "center", offset: [0, 0] }, // Pasto Principal - centro
      2: { direction: "top", offset: [0, -15] }, // Pasto Norte - bem em cima
      3: { direction: "bottom", offset: [0, 15] }, // Pasto Sul - bem embaixo
      4: { direction: "left", offset: [-20, 0] }, // Área de Suínos - bem à esquerda
      5: { direction: "right", offset: [20, 0] }, // Aviário - bem à direita
      6: { direction: "bottomright", offset: [15, 15] }, // Centro de Manejo
      7: { direction: "bottomleft", offset: [-20, 15] }, // Área de Quarentena - bem isolada
      8: { direction: "topright", offset: [15, -15] }, // Depósito de Ração
      9: { direction: "topleft", offset: [-15, -15] }, // Área Veterinária
    };
    return settings[fence.id] || { direction: "center", offset: [0, 0] };
  };

  // Get enhanced visual properties for important fences
  const getEnhancedProps = (fence) => {
    const baseProps = {
      fillOpacity: 0.08,
      weight: 2,
      opacity: 0.7,
      className: "virtual-fence", // Add custom CSS class
    };

    // Enhance visual for high priority fences
    if (fence.priority === "high") {
      return {
        ...baseProps,
        weight: 2.5,
        opacity: 0.8,
        fillOpacity: 0.12,
      };
    }

    // Special styling for quarantine
    if (fence.species === "quarantine") {
      return {
        ...baseProps,
        weight: 2.5,
        opacity: 0.9,
        fillOpacity: 0.15,
        dashArray: "8, 4",
      };
    }

    return baseProps;
  };

  // Get species emoji
  const getSpeciesEmoji = (species) => {
    const emojis = {
      cattle: "🐄",
      swine: "🐷",
      poultry: "🐔",
      goats: "🐐",
      sheep: "🐑",
    };
    return emojis[species] || "🐾";
  };

  // Get species label
  const getSpeciesLabel = (species) => {
    const labels = {
      cattle: "Bovino",
      swine: "Suíno",
      poultry: "Ave",
      goats: "Caprino",
      sheep: "Ovino",
    };
    return labels[species] || species;
  };

  return (
    <LayerGroup>
      {fences.map((fence) => {
        const tooltipSettings = getTooltipSettings(fence);
        const visualProps = getEnhancedProps(fence);
        const fenceAnimals = getAnimalsInFence(animals, fence);

        return (
          <Circle
            key={fence.id}
            center={fence.center}
            radius={fence.radius}
            pathOptions={{
              color: fence.color,
              fillColor: fence.fillColor,
              ...visualProps,
            }}
          >
            <Tooltip
              permanent={false} // Apenas hover
              direction={tooltipSettings.direction}
              className="virtual-fence-tooltip"
              offset={tooltipSettings.offset}
              sticky={false} // Sem sticky para evitar problemas
            >
              <div
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.98)",
                  border: `2px solid ${fence.color}`,
                  borderRadius: "12px",
                  width: "140px",
                  minHeight: "100px",
                  padding: "10px 12px",
                  fontSize: "11px",
                  textAlign: "center",
                  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
                  backdropFilter: "blur(8px)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {/* Header com ícone da cerca */}
                <div
                  style={{
                    color: fence.color,
                    fontSize: "12px",
                    fontWeight: "bold",
                    marginBottom: "8px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "4px",
                  }}
                >
                  <span style={{ fontSize: "14px" }}>
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

                {/* Nome da cerca */}
                <div
                  style={{
                    color: fence.color,
                    fontSize: "11px",
                    fontWeight: "600",
                    marginBottom: "6px",
                  }}
                >
                  {fence.name}
                </div>

                {/* Descrição da cerca */}
                <div
                  style={{
                    fontSize: "9px",
                    color: "#6b7280",
                    marginBottom: "6px",
                    lineHeight: "1.3",
                  }}
                >
                  {fence.description}
                </div>

                {/* Detalhes da cerca */}
                <div
                  style={{
                    fontSize: "8px",
                    color: "#9ca3af",
                    marginBottom: "4px",
                  }}
                >
                  <div style={{ marginBottom: "2px" }}>
                    Raio: {fence.radius}m
                  </div>
                  <div style={{ color: "#6b7280" }}>
                    {fenceAnimals.length}{" "}
                    {fenceAnimals.length === 1 ? "animal" : "animais"}
                  </div>
                </div>

                {/* Indicadores especiais */}
                {fence.priority === "high" && (
                  <div
                    style={{
                      color: fence.color,
                      fontSize: "8px",
                      fontWeight: "500",
                      textAlign: "center",
                    }}
                  >
                    ⭐ Área Prioritária
                  </div>
                )}

                {fence.species === "quarantine" && (
                  <div
                    style={{
                      color: "#dc2626",
                      fontSize: "8px",
                      fontWeight: "600",
                      textAlign: "center",
                    }}
                  >
                    🚫 Acesso Restrito
                  </div>
                )}
              </div>
            </Tooltip>
          </Circle>
        );
      })}
    </LayerGroup>
  );
};
