import { MapPin } from "lucide-react";
import Card from "../../ui/Card";

const DashboardMap = () => {
  return (
    <Card
      variant="palha"
      title="Mapa dos Animais"
      icon={<MapPin className="h-5 w-5 text-black sm:h-6 sm:w-6" />}
      className="h-[360px] transform-gpu overflow-hidden sm:h-[390px] md:h-[490px]"
    >
      <div className="flex h-full flex-col items-center justify-center">
        <div className="text-center">
          <div className="mb-4 text-6xl">🗺️</div>
          <h3 className="mb-2 text-lg font-semibold text-gray-800">
            Mapa em Desenvolvimento
          </h3>
          <p className="text-gray-600">
            O componente de mapa será implementado em breve.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default DashboardMap;
