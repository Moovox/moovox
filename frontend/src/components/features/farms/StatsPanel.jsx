import { Building2, MapPin, Tractor, Users } from "lucide-react";
import React from "react";

/**
 * Farm statistics panel
 * @param {Object} props
 * @param {Object} props.statistics - Farm statistical data
 */
function StatsPanel({ statistics }) {
  const { totalFarms, totalAnimals, totalUsers, totalArea } = statistics;

  const stats = [
    {
      icon: Building2,
      value: totalFarms,
      label: "Registered Farms",
      color: "amber",
    },
    {
      icon: MapPin,
      value: `${totalArea?.toLocaleString() || 0}`,
      label: "Total Hectares",
      color: "blue",
    },
    {
      icon: Tractor,
      value: totalAnimals,
      label: "Registered Animals",
      color: "green",
    },
    {
      icon: Users,
      value: totalUsers,
      label: "Linked Users",
      color: "purple",
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      amber: {
        bg: "bg-amber-50",
        border: "border-amber-200",
        icon: "text-amber-600",
        text: "text-amber-900",
        label: "text-amber-700",
      },
      blue: {
        bg: "bg-blue-50",
        border: "border-blue-200",
        icon: "text-blue-600",
        text: "text-blue-900",
        label: "text-blue-700",
      },
      green: {
        bg: "bg-green-50",
        border: "border-green-200",
        icon: "text-green-600",
        text: "text-green-900",
        label: "text-green-700",
      },
      purple: {
        bg: "bg-purple-50",
        border: "border-purple-200",
        icon: "text-purple-600",
        text: "text-purple-900",
        label: "text-purple-700",
      },
    };
    return colors[color] || colors.amber;
  };

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        const colors = getColorClasses(stat.color);

        return (
          <div
            key={index}
            className={`rounded-lg border p-4 shadow-sm ${colors.bg} ${colors.border}`}
          >
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Icon className={`h-8 w-8 ${colors.icon}`} />
              </div>
              <div className="ml-3">
                <p className={`text-sm font-medium ${colors.label}`}>
                  {stat.label}
                </p>
                <p className={`text-2xl font-semibold ${colors.text}`}>
                  {stat.value}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default StatsPanel;
