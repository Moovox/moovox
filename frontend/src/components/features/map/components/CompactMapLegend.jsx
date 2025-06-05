import React from "react";

/**
 * Legenda compacta para o card do dashboard
 */
export const CompactMapLegend = ({ animals = [] }) => {
  const animalTypes = [
    { species: 'cattle', label: 'Gado', color: 'bg-green-500', icon: '🐄' },
    { species: 'swine', label: 'Suínos', color: 'bg-red-500', icon: '🐷' },
    { species: 'poultry', label: 'Aves', color: 'bg-yellow-500', icon: '🐔' },
    { species: 'goats', label: 'Caprinos', color: 'bg-purple-500', icon: '🐐' }
  ];

  const getCounts = () => {
    return animalTypes.map(type => ({
      ...type,
      count: animals.filter(animal => animal.species === type.species).length
    }));
  };

  const counts = getCounts();

  return (
    <div className="flex flex-wrap gap-2 text-xs">
      {counts.map((type) => (
        <div key={type.species} className="flex items-center gap-1">
          <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
          <span className="text-xs">{type.icon}</span>
          <span className="text-gray-700">{type.label}</span>
          <span className="font-medium text-gray-900">({type.count})</span>
        </div>
      ))}
    </div>
  );
}; 