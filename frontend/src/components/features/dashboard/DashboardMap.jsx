import { MapPin } from "lucide-react";
import Card from "../../ui/Card";
import { CompactMapLegend, speciesConfig } from "../map";
import AnimalMapDashboard from "../map/AnimalMapDashboard";

const DashboardMap = () => {
  return (
    <Card
      variant="palha"
      title="Mapa dos Animais"
      icon={<MapPin className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
      className="h-[360px] transform-gpu overflow-hidden sm:h-[390px] md:h-[490px]"
    >
      <div className="flex h-full flex-col">
        {/* Compact Legend */}
        <div className="mb-3 flex-shrink-0">
          <CompactMapLegend speciesConfig={speciesConfig} />
        </div>

        {/* Map Container que ocupa o espaço restante */}
        <div className="min-h-0 flex-1 overflow-hidden rounded-xl border border-amber-200/50 bg-gradient-to-br from-amber-50 to-orange-50 shadow-inner">
          <AnimalMapDashboard
            height="260px"
            heightSm="290px"
            heightMd="400px"
            showVirtualFences={true}
            autoUpdate={true}
            updateInterval={120000}
            className="h-full w-full"
          />
        </div>
      </div>
    </Card>
  );
};

export default DashboardMap;
