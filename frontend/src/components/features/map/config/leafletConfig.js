import L from "leaflet";
import "leaflet/dist/leaflet.css";

// Import icons directly for Vite/modern bundlers
import markerIcon2x from "leaflet/dist/images/marker-icon-2x.png";
import markerIcon from "leaflet/dist/images/marker-icon.png";
import markerShadow from "leaflet/dist/images/marker-shadow.png";

/**
 * Fix Leaflet icon issue with webpack/vite
 * This is needed because Leaflet's default icon paths don't work with bundlers
 */
export const initializeLeaflet = () => {
  try {
    if (L && L.Icon && L.Icon.Default) {
      delete L.Icon.Default.prototype._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: markerIcon2x,
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
      });
    }

    // Add custom CSS for animal popup and fence tooltips
    if (
      typeof window !== "undefined" &&
      !document.getElementById("leaflet-custom-styles")
    ) {
      const style = document.createElement("style");
      style.id = "leaflet-custom-styles";
      style.textContent = `
        /* Animal popup styles */
        .leaflet-popup.custom-animal-popup .leaflet-popup-content-wrapper {
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.15);
          border: 2px solid #f59e0b;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(4px);
        }
        
        .leaflet-popup.custom-animal-popup .leaflet-popup-tip {
          background: rgba(255, 255, 255, 0.98);
          border: 2px solid #f59e0b;
          border-top: none;
          border-right: none;
        }
        
        /* Virtual fence styles - SEM cursor pointer */
        .leaflet-interactive.virtual-fence {
          cursor: default !important;
          transition: all 0.2s ease;
        }
        
        .leaflet-interactive.virtual-fence:hover {
          filter: brightness(1.1) saturate(1.1);
          opacity: 0.8 !important;
        }
        
        /* Virtual fence tooltip styles - simples e direto */
        .leaflet-tooltip.virtual-fence-tooltip {
          border-radius: 12px !important;
          box-shadow: 0 6px 20px rgba(0,0,0,0.25) !important;
          backdrop-filter: blur(6px);
          font-size: 11px !important;
          line-height: 1.3 !important;
          padding: 8px !important;
          border: none !important;
          background: rgba(255, 255, 255, 0.98) !important;
          min-width: 140px !important;
          max-width: 160px !important;
          white-space: normal !important;
          pointer-events: none !important;
          opacity: 0.95 !important;
        }
        
        /* Remove qualquer transform que cause problemas */
        .leaflet-tooltip.virtual-fence-tooltip::before {
          border-top-color: rgba(255, 255, 255, 0.98) !important;
        }
        
        /* Ensure proper z-index hierarchy */
        .leaflet-popup-pane {
          z-index: 700 !important;
        }
        
        .leaflet-tooltip-pane {
          z-index: 650 !important;
        }
        
        .leaflet-marker-pane {
          z-index: 600 !important;
        }
        
        .leaflet-overlay-pane {
          z-index: 400 !important;
        }
        
        /* Responsive adjustments */
        @media (max-width: 640px) {
          .leaflet-popup.custom-animal-popup .leaflet-popup-content-wrapper {
            max-width: 250px !important;
            min-width: 200px !important;
          }
          
          .leaflet-tooltip.virtual-fence-tooltip {
            font-size: 10px !important;
            min-width: 120px !important;
            max-width: 140px !important;
          }
        }
        
        /* Remove active/focus effects que causam movimento */
        .leaflet-interactive.virtual-fence:active,
        .leaflet-interactive.virtual-fence:focus {
          transform: none !important;
          outline: none !important;
        }
      `;
      document.head.appendChild(style);
    }
  } catch (e) {
    console.error("Error configuring Leaflet icons:", e);
  }
};

/**
 * Custom style for virtual fence tooltips
 */
export const customTooltipStyle = {
  background: "rgba(255, 255, 255, 0.98)",
  border: "1px solid #ddd",
  borderRadius: "12px",
  padding: "10px 12px",
  fontSize: "11px",
  lineHeight: "1.3",
  width: "140px",
  minHeight: "100px",
  wordWrap: "break-word",
  boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  backdropFilter: "blur(6px)",
  whiteSpace: "normal",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
};

/**
 * Default map configuration
 */
export const mapDefaults = {
  center: [-16.288, -49.264], // Rural area in Goiás, Brazil
  zoom: 13, // Closer zoom to see the farm areas
  height: "500px",
  updateInterval: 120000, // 2 minutes
  title: "Mapa de Animais",
};
