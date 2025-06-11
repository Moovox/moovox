/**
 * Componente para estilos customizados do mapa
 */
export const MapStyles = () => {
  // Adiciona os estilos diretamente ao documento se ainda não existem
  if (
    typeof window !== "undefined" &&
    !document.getElementById("map-custom-styles")
  ) {
    const style = document.createElement("style");
    style.id = "map-custom-styles";
    style.textContent = `
      .leaflet-interactive:focus {
        outline: none !important;
      }
      .virtual-fence:focus {
        outline: none !important;
      }
      .leaflet-container .leaflet-interactive:focus {
        outline: none !important;
      }
      .leaflet-container svg.leaflet-zoom-animated g path:focus {
        outline: none !important;
      }
    `;
    document.head.appendChild(style);
  }

  return null; // Não renderiza nada no DOM
};
