import React from "react";
import FarmCreateModal from "./FarmCreateModal";
import StatsPanel from "./StatsPanel";

function FarmsHeader({ farms, onRefresh }) {
  const totalFarms = farms.length;
  const totalAnimals = farms.reduce(
    (sum, farm) => sum + (farm.animalCount || 0),
    0,
  );
  const totalArea = farms.reduce((sum, farm) => sum + (farm.size || 0), 0);
  const totalUsers = farms.reduce(
    (sum, farm) => sum + (farm.userCount || 0),
    0,
  );

  const statistics = {
    totalFarms,
    totalAnimals,
    totalUsers,
    totalArea,
  };

  return (
    <div className="space-y-6">
      {/* Title and add button */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-amber-900">Your Farms</h1>
          <p className="text-amber-700">Manage your rural properties</p>
        </div>
        <FarmCreateModal onSuccess={onRefresh} />
      </div>

      {/* Statistics */}
      {totalFarms > 0 && <StatsPanel statistics={statistics} />}
    </div>
  );
}

export default FarmsHeader;
