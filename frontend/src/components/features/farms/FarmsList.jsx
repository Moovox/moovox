import { BuildingIcon } from "lucide-react";
import React from "react";
import FarmCard from "./FarmCard";
import FarmCreateModal from "./FarmCreateModal";

function FarmsList({
  farms,
  onSelectFarm,
  onEditFarm,
  onDeleteFarm,
  onViewDetails,
  onRefresh,
  deletingId,
}) {
  if (farms.length === 0) {
    return (
      <div className="rounded-xl bg-white p-8 text-center shadow-sm">
        <BuildingIcon className="mx-auto mb-4 h-12 w-12 text-amber-200" />
        <h3 className="mb-2 text-lg font-semibold text-amber-900">
          Nenhuma Fazenda Encontrada
        </h3>
        <p className="mb-6 text-gray-600">
          Você ainda não tem fazendas registradas.
        </p>
        <FarmCreateModal onSuccess={onRefresh} />
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {farms.map((farm) => (
        <FarmCard
          key={farm.id}
          farm={farm}
          onViewDetails={onViewDetails}
          onEdit={onEditFarm}
          onSelect={onSelectFarm}
          onDelete={onDeleteFarm}
          isDeleting={deletingId === farm.id}
        />
      ))}
    </div>
  );
}

export default FarmsList;
