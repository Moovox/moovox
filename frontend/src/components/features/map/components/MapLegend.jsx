import React from "react";

/**
 * Componente de legenda dinâmica para o mapa
 * Mostra estatísticas em tempo real dos animais
 */
export const MapLegend = ({ animals = [], loading = false }) => {
  // Calcular estatísticas dos animais
  const getAnimalStats = () => {
    if (!animals || animals.length === 0) {
      return {
        total: 0,
        cattle: 0,
        swine: 0,
        poultry: 0,
        goats: 0,
        healthy: 0,
        inTreatment: 0
      };
    }

    const stats = animals.reduce((acc, animal) => {
      acc.total++;
      
      // Contar por espécie
      if (animal.species === 'cattle') acc.cattle++;
      else if (animal.species === 'swine') acc.swine++;
      else if (animal.species === 'poultry') acc.poultry++;
      else if (animal.species === 'goats') acc.goats++;
      
      // Contar por status
      if (animal.status?.includes('Tratamento')) {
        acc.inTreatment++;
      } else {
        acc.healthy++;
      }
      
      return acc;
    }, {
      total: 0,
      cattle: 0,
      swine: 0,
      poultry: 0,
      goats: 0,
      healthy: 0,
      inTreatment: 0
    });

    return stats;
  };

  const stats = getAnimalStats();

  const animalTypes = [
    {
      key: 'cattle',
      label: 'Gado',
      icon: '🐄',
      color: 'bg-green-500',
      count: stats.cattle,
      percentage: stats.total > 0 ? ((stats.cattle / stats.total) * 100).toFixed(1) : 0
    },
    {
      key: 'swine',
      label: 'Suínos',
      icon: '🐷',
      color: 'bg-red-500',
      count: stats.swine,
      percentage: stats.total > 0 ? ((stats.swine / stats.total) * 100).toFixed(1) : 0
    },
    {
      key: 'poultry',
      label: 'Aves',
      icon: '🐔',
      color: 'bg-yellow-500',
      count: stats.poultry,
      percentage: stats.total > 0 ? ((stats.poultry / stats.total) * 100).toFixed(1) : 0
    },
    {
      key: 'goats',
      label: 'Caprinos',
      icon: '🐐',
      color: 'bg-purple-500',
      count: stats.goats,
      percentage: stats.total > 0 ? ((stats.goats / stats.total) * 100).toFixed(1) : 0
    }
  ];

  const healthStats = [
    {
      label: 'Saudáveis',
      count: stats.healthy,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      icon: '✅'
    },
    {
      label: 'Em Tratamento',
      count: stats.inTreatment,
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      icon: '🏥'
    }
  ];

  if (loading) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-amber-200/50 p-4 shadow-lg">
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded mb-3"></div>
          <div className="space-y-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-3 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl border border-amber-200/50 p-4 shadow-lg">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
        <h3 className="font-semibold text-gray-800">Legenda do Mapa</h3>
      </div>

      {/* Resumo Total */}
      <div className="mb-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Total de Animais</span>
          <span className="text-xl font-bold text-amber-600">{stats.total}</span>
        </div>
      </div>

      {/* Tipos de Animais */}
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Por Espécie</h4>
        <div className="space-y-2">
          {animalTypes.map((type) => (
            <div key={type.key} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${type.color}`}></div>
                <span className="text-xs">{type.icon}</span>
                <span className="text-sm text-gray-700">{type.label}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-900">{type.count}</span>
                <span className="text-xs text-gray-500">({type.percentage}%)</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Status de Saúde */}
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-2">Status de Saúde</h4>
        <div className="space-y-2">
          {healthStats.map((stat, index) => (
            <div key={index} className={`flex items-center justify-between p-2 rounded-lg ${stat.bgColor}`}>
              <div className="flex items-center gap-2">
                <span className="text-xs">{stat.icon}</span>
                <span className={`text-sm font-medium ${stat.color}`}>{stat.label}</span>
              </div>
              <span className={`text-sm font-bold ${stat.color}`}>{stat.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timestamp */}
      <div className="mt-4 pt-3 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Atualizado em:</span>
          <span>{new Date().toLocaleTimeString('pt-BR')}</span>
        </div>
      </div>
    </div>
  );
}; 