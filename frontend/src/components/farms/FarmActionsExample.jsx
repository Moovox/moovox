import { Eye, Pencil, Trash2 } from "lucide-react";
import React, { useState } from "react";
import { Button } from "../ui/button";
import DeleteConfirmationModal from "./DeleteConfirmationModal";
import FarmDetailsModal from "./FarmDetailsModal";
import FarmEditModal from "./FarmEditModal";

/**
 * Componente de exemplo mostrando todas as ações de fazenda
 * Este componente demonstra como usar todos os modais disponíveis
 * @param {Object} props
 * @param {Object} props.farm - Dados da fazenda
 * @param {Function} props.onDelete - Função para deletar fazenda
 * @param {Function} props.onEdit - Função após editar fazenda
 * @param {boolean} props.isDeleting - Se está deletando
 */
function FarmActionsExample({ farm, onDelete, onEdit, isDeleting = false }) {
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [detailsModalOpen, setDetailsModalOpen] = useState(false);

  const handleDeleteConfirm = async () => {
    const success = await onDelete(farm);
    if (success) {
      setDeleteModalOpen(false);
    }
  };

  const handleEditSuccess = () => {
    setEditModalOpen(false);
    if (onEdit) onEdit();
  };

  return (
    <div className="space-y-4 rounded-lg border border-amber-200 bg-white p-4 shadow-sm">
      {/* Informações da fazenda */}
      <div className="border-b border-amber-100 pb-4">
        <h3 className="text-lg font-semibold text-amber-900">{farm.name}</h3>
        <p className="text-sm text-amber-700">{farm.location}</p>
        <div className="mt-2 flex flex-wrap gap-2">
          <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800">
            {farm.size} hectares
          </span>
          <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-medium text-green-800">
            {farm.animalCount || 0} animais
          </span>
        </div>
      </div>

      {/* Botões de ação */}
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          size="sm"
          className="border-blue-200 text-blue-700 hover:bg-blue-50"
          onClick={() => setDetailsModalOpen(true)}
        >
          <Eye className="mr-1 h-4 w-4" />
          Ver Detalhes
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-amber-200 text-amber-700 hover:bg-amber-50"
          onClick={() => setEditModalOpen(true)}
        >
          <Pencil className="mr-1 h-4 w-4" />
          Editar
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="border-red-200 text-red-700 hover:bg-red-50"
          onClick={() => setDeleteModalOpen(true)}
          disabled={isDeleting}
        >
          <Trash2 className="mr-1 h-4 w-4" />
          {isDeleting ? "Deletando..." : "Deletar"}
        </Button>
      </div>

      {/* Modal de detalhes */}
      <FarmDetailsModal
        farm={farm}
        open={detailsModalOpen}
        onOpenChange={setDetailsModalOpen}
      />

      {/* Modal de edição */}
      <FarmEditModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        farm={farm}
        onSuccess={handleEditSuccess}
      />

      {/* Modal de confirmação de exclusão */}
      <DeleteConfirmationModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        onConfirm={handleDeleteConfirm}
        loading={isDeleting}
        title="Confirmar Exclusão da Fazenda"
        message="Tem certeza que deseja excluir esta fazenda?"
        itemName={farm.name}
        itemType="fazenda"
      />
    </div>
  );
}

export default FarmActionsExample;
