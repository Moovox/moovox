import { AlertCircle } from "lucide-react";
import PropTypes from "prop-types";
import React from "react";
import FormModal from "../ui/form-modal";

/**
 * Modal para confirmar operações de exclusão
 * @param {Object} props
 * @param {boolean} props.open - Se o modal está aberto
 * @param {Function} props.onOpenChange - Função para controlar abertura/fechamento
 * @param {Function} props.onConfirm - Função para confirmar a exclusão
 * @param {boolean} props.loading - Se uma operação de exclusão está em andamento
 * @param {string} props.title - Título do modal
 * @param {string} props.message - Mensagem a ser exibida
 * @param {string} props.itemName - Nome do item sendo deletado
 * @param {string} props.itemType - Tipo do item (fazenda, animal, etc.)
 */
function DeleteConfirmationModal({
  open,
  onOpenChange,
  onConfirm,
  loading,
  title,
  message,
  itemName,
  itemType = "item",
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm();
  };

  const defaultTitle = title || "Confirmar Exclusão";
  const defaultMessage =
    message || `Tem certeza que deseja excluir este ${itemType}?`;

  return (
    <FormModal
      title={defaultTitle}
      open={open}
      onOpenChange={onOpenChange}
      onSubmit={handleSubmit}
      loading={loading}
      submitText={loading ? "Excluindo..." : "Confirmar Exclusão"}
      cancelText="Cancelar"
    >
      <div className="flex flex-col items-center p-2 text-center">
        <AlertCircle className="mb-4 h-16 w-16 text-red-500" />

        <h3 className="mb-2 text-lg font-semibold text-gray-900">
          {defaultMessage}
        </h3>

        {itemName && (
          <p className="mb-3 text-sm font-medium text-red-600">"{itemName}"</p>
        )}

        <p className="mb-4 text-sm text-gray-600">
          Esta ação não pode ser desfeita. Todos os dados associados serão
          permanentemente removidos.
        </p>

        <div className="w-full rounded-md border border-amber-200 bg-amber-50 p-3 text-left">
          <p className="text-sm text-amber-800">
            <strong>Atenção:</strong> Excluir este {itemType} pode afetar
            registros relacionados e a integridade dos dados.
          </p>
        </div>
      </div>
    </FormModal>
  );
}

DeleteConfirmationModal.propTypes = {
  open: PropTypes.bool.isRequired,
  onOpenChange: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  title: PropTypes.string,
  message: PropTypes.string,
  itemName: PropTypes.string,
  itemType: PropTypes.string,
};

export default DeleteConfirmationModal;
