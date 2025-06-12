import { MapPin } from "lucide-react";
import React, { useCallback, useState } from "react";
import Card from "../../ui/Card";
import { SimpleMap } from "../map/SimpleMap";
import { CompactMapLegend } from "../map/components/CompactMapLegend";

/**
 * Card do mapa para o dashboard
 * Componente simples e limpo para exibir o mapa no dashboard
 */
const MapCard = () => {
  const [mapData, setMapData] = useState({ animals: [], loading: true });

  const handleMapDataUpdate = useCallback((data) => {
    setMapData(data);
  }, []);

  return (
    <Card
      variant="rural"
      title="Animal Map"
      icon={<MapPin className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
      className="h-[360px] sm:h-[390px] md:h-[490px]"
    >
      <div className="flex h-full flex-col">
        {/* Legenda compacta */}
        <div className="mb-3 flex-shrink-0">
          <CompactMapLegend animals={mapData.animals} />
        </div>

        {/* Mapa */}
        <div className="min-h-0 flex-1 overflow-hidden rounded-lg">
          <SimpleMap
            height="100%"
            showControls={false}
            showLegend={false}
            onDataUpdate={handleMapDataUpdate}
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default MapCard;
