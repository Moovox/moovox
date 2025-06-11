import React from "react";

/**
 * Dynamic legend component for the map
 * Shows real-time animal statistics
 */
export const MapLegend = ({ animals = [], loading = false }) => {
  // Calculate animal statistics
  const getAnimalStats = () => {
    if (!animals || animals.length === 0) {
      return {
        total: 0,
        cattle: 0,
        swine: 0,
        poultry: 0,
        goats: 0,
        healthy: 0,
        inTreatment: 0,
      };
    }

    const stats = animals.reduce(
      (acc, animal) => {
        acc.total++;

        // Count by species
        if (animal.species === "cattle") acc.cattle++;
        else if (animal.species === "swine") acc.swine++;
        else if (animal.species === "poultry") acc.poultry++;
        else if (animal.species === "goats") acc.goats++;

        // Count by status
        if (animal.status?.includes("Tratamento")) {
          acc.inTreatment++;
        } else {
          acc.healthy++;
        }

        return acc;
      },
      {
        total: 0,
        cattle: 0,
        swine: 0,
        poultry: 0,
        goats: 0,
        healthy: 0,
        inTreatment: 0,
      },
    );

    return stats;
  };

  const stats = getAnimalStats();

  const animalTypes = [
    {
      key: "cattle",
      label: "Cattle",
      icon: "🐄",
      color: "bg-green-500",
      count: stats.cattle,
      percentage:
        stats.total > 0 ? ((stats.cattle / stats.total) * 100).toFixed(1) : 0,
    },
    {
      key: "swine",
      label: "Swine",
      icon: "🐷",
      color: "bg-red-500",
      count: stats.swine,
      percentage:
        stats.total > 0 ? ((stats.swine / stats.total) * 100).toFixed(1) : 0,
    },
    {
      key: "poultry",
      label: "Poultry",
      icon: "🐔",
      color: "bg-yellow-500",
      count: stats.poultry,
      percentage:
        stats.total > 0 ? ((stats.poultry / stats.total) * 100).toFixed(1) : 0,
    },
    {
      key: "goats",
      label: "Goats",
      icon: "🐐",
      color: "bg-purple-500",
      count: stats.goats,
      percentage:
        stats.total > 0 ? ((stats.goats / stats.total) * 100).toFixed(1) : 0,
    },
  ];

  const healthStats = [
    {
      label: "Healthy",
      count: stats.healthy,
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: "✅",
    },
    {
      label: "In Treatment",
      count: stats.inTreatment,
      color: "text-red-600",
      bgColor: "bg-red-50",
      icon: "🏥",
    },
  ];

  if (loading) {
    return (
      <div className="rounded-xl border border-amber-200/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
        <div className="animate-pulse">
          <div className="mb-3 h-4 rounded bg-gray-200"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 rounded bg-gray-200"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-amber-200/50 bg-white/95 p-4 shadow-lg backdrop-blur-sm">
      {/* Header */}
      <div className="mb-4 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-amber-500"></div>
        <h3 className="font-semibold text-gray-800">Map Legend</h3>
      </div>

      {/* Resumo Total */}
      <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            Total Animals
          </span>
          <span className="text-xl font-bold text-amber-600">
            {stats.total}
          </span>
        </div>
      </div>

      {/* Tipos de Animais */}
      <div className="mb-4">
        <h4 className="mb-2 text-sm font-medium text-gray-700">By Species</h4>
        <div className="space-y-2">
          {animalTypes.map((type) => (
            <div key={type.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`h-3 w-3 rounded-full ${type.color}`}></div>
                <span className="text-xs">{type.icon}</span>
                <span className="text-sm text-gray-700">{type.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">
                  {type.count}
                </span>
                <span className="text-xs text-gray-500">
                  ({type.percentage}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Health Status */}
      <div>
        <h4 className="mb-2 text-sm font-medium text-gray-700">
          Health Status
        </h4>
        <div className="space-y-2">
          {healthStats.map((stat, index) => (
            <div
              key={index}
              className={`flex items-center justify-between rounded-lg p-2 ${stat.bgColor}`}
            >
              <div className="flex items-center gap-2">
                <span className="text-xs">{stat.icon}</span>
                <span className={`text-sm font-medium ${stat.color}`}>
                  {stat.label}
                </span>
              </div>
              <span className={`text-sm font-bold ${stat.color}`}>
                {stat.count}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Timestamp */}
      <div className="mt-4 border-t border-gray-200 pt-3">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Updated at:</span>
          <span>{new Date().toLocaleTimeString("en-US")}</span>
        </div>
      </div>
    </div>
  );
};
