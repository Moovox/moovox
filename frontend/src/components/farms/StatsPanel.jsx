import { Building2 } from "lucide-react";
import Card, { CardContent } from "../ui/card";

/**
 * Farm statistics dashboard panel
 * @param {Object} props
 * @param {Object} props.statistics - Statistical data for farms
 */
function StatsPanel({ statistics }) {
  const { totalFarms, totalAnimals, totalUsers, totalArea } = statistics;

  return (
    <div className="mb-4 grid grid-cols-2 gap-2 sm:gap-4 md:mb-6 md:grid-cols-4">
      <Card variant="rural" className="shadow-sm">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col items-center text-center">
            <Building2 className="mb-1 h-6 w-6 text-amber-700 sm:mb-2 sm:h-8 sm:w-8" />
            <h3 className="text-base font-semibold text-amber-900 sm:text-lg">
              {totalFarms}
            </h3>
            <p className="text-xs text-amber-700 sm:text-sm">
              Registered Farms
            </p>
          </div>
        </CardContent>
      </Card>

      <Card variant="palha" className="shadow-sm">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col items-center text-center">
            <span className="mb-1 text-xl font-bold text-amber-800 sm:mb-2 sm:text-2xl">
              {totalArea}
            </span>
            <p className="text-xs text-amber-700 sm:text-sm">Total Hectares</p>
          </div>
        </CardContent>
      </Card>

      <Card variant="verde" className="shadow-sm">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col items-center text-center">
            <span className="mb-1 text-xl font-bold text-white sm:mb-2 sm:text-2xl">
              {totalAnimals}
            </span>
            <p className="text-xs text-white sm:text-sm">Registered Animals</p>
          </div>
        </CardContent>
      </Card>

      <Card variant="terra" className="shadow-sm">
        <CardContent className="p-2 sm:p-4">
          <div className="flex flex-col items-center text-center">
            <span className="mb-1 text-xl font-bold text-white sm:mb-2 sm:text-2xl">
              {totalUsers}
            </span>
            <p className="text-xs text-white sm:text-sm">Linked Users</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default StatsPanel;
