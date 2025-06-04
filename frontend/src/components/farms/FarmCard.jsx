import { Building2, Check, Loader2, Map, Pencil, Trash2 } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

/**
 * Card para exibir uma fazenda com suas ações
 * @param {Object} props
 * @param {Object} props.farm - Dados da fazenda a serem exibidos
 * @param {Function} props.onViewDetails - Função para ver detalhes da fazenda
 * @param {Function} props.onEdit - Função para editar a fazenda
 * @param {Function} props.onSelect - Função para selecionar a fazenda
 * @param {Function} props.onDelete - Função para deletar a fazenda
 * @param {boolean} props.isDeleting - Se a fazenda está sendo deletada
 */
function FarmCard({
  farm,
  onViewDetails,
  onEdit,
  onSelect,
  onDelete,
  isDeleting = false,
}) {
  return (
    <div className="overflow-hidden rounded-xl border border-amber-100 bg-white shadow-sm transition-all hover:border-amber-200 hover:shadow-md">
      {/* Imagem da fazenda */}
      <div className="relative h-48 overflow-hidden bg-amber-50">
        {farm.imageUrl ? (
          <img
            src={farm.imageUrl}
            alt={farm.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-amber-100 to-amber-50">
            <Building2 className="h-16 w-16 text-amber-300" />
          </div>
        )}

        {/* Botões de ação no canto superior direito */}
        <div className="absolute right-2 top-2 flex gap-1">
          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white"
            title="Editar Fazenda"
            onClick={() => onEdit(farm)}
          >
            <Pencil className="h-4 w-4 text-amber-700" />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            className="h-8 w-8 bg-white/90 backdrop-blur-sm hover:bg-white"
            title="Deletar Fazenda"
            onClick={() => onDelete(farm)}
            disabled={isDeleting}
          >
            {isDeleting ? (
              <Loader2 className="h-4 w-4 animate-spin text-red-600" />
            ) : (
              <Trash2 className="h-4 w-4 text-red-600" />
            )}
          </Button>
        </div>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4">
        <div className="mb-3">
          <h3 className="truncate text-lg font-semibold text-amber-900">
            {farm.name}
          </h3>
          <p className="truncate text-sm text-amber-700">
            {farm.location || "Localização não informada"}
          </p>
        </div>

        {/* Estatísticas da fazenda */}
        <div className="mb-4 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
            {farm.size} hectares
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            {farm.animalCount || 0} animais
          </span>
          {farm.userCount !== undefined && (
            <span className="inline-flex items-center rounded-full bg-blue-100 px-2 py-1 text-xs font-medium text-blue-800">
              {farm.userCount} usuários
            </span>
          )}
        </div>

        {/* Descrição da fazenda */}
        {farm.description && (
          <p className="mb-4 line-clamp-2 text-sm text-gray-600">
            {farm.description}
          </p>
        )}

        {/* Botões de ação */}
        <div className="flex gap-2">
          <Button
            className="flex-1 bg-amber-600 text-white hover:bg-amber-700"
            onClick={() => onSelect(farm)}
            size="sm"
          >
            <Check className="mr-1 h-4 w-4" />
            Selecionar
          </Button>

          <Button
            variant="outline"
            size="sm"
            className="border-amber-200 text-amber-700 hover:bg-amber-50"
            onClick={() => onViewDetails(farm)}
            title="Ver no Mapa"
          >
            <Map className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default FarmCard;
