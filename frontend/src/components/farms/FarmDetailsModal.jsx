import { X } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import FarmDetails from "./FarmDetails";

/**
 * Modal para exibir detalhes da fazenda
 * @param {Object} props
 * @param {Object} props.farm - Dados da fazenda
 * @param {React.ReactNode} props.triggerElement - Elemento que abre o modal (opcional)
 * @param {boolean} props.open - Se o modal está aberto
 * @param {Function} props.onOpenChange - Função para controlar abertura/fechamento
 */
function FarmDetailsModal({
  farm,
  triggerElement,
  open,
  onOpenChange,
  children,
}) {
  if (!farm) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {triggerElement && (
        <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      )}

      {children && <DialogTrigger asChild>{children}</DialogTrigger>}

      <DialogContent className="flex w-[95%] max-w-4xl flex-col border-amber-100 bg-white p-0 shadow-lg">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-amber-100 bg-amber-50 p-4">
          <div>
            <DialogTitle className="text-lg font-semibold text-amber-900">
              Detalhes da Fazenda
            </DialogTitle>
            <p className="text-sm text-amber-700">{farm.name}</p>
          </div>
          <Button
            type="button"
            variant="ghost"
            className="h-8 w-8 rounded-full p-0 text-amber-700 hover:bg-amber-100"
            onClick={() => onOpenChange && onOpenChange(false)}
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Conteúdo */}
        <div className="max-h-[calc(85vh-80px)] overflow-y-auto p-4">
          <FarmDetails
            farmId={farm.id}
            onClose={() => onOpenChange && onOpenChange(false)}
            isModal={true}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FarmDetailsModal;
