import { Plus, X } from "lucide-react";
import React from "react";
import { Button } from "./button";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";

function FormModal({
  title,
  children,
  open,
  onOpenChange,
  onSubmit,
  triggerText,
  triggerElement,
  submitText = "Cadastrar",
  cancelText = "Cancelar",
  loading = false,
}) {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit && typeof onSubmit === "function") {
      onSubmit(e);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      {triggerText && (
        <DialogTrigger asChild>
          <Button className="transform bg-amber-800 font-medium text-white shadow-sm transition-all duration-200 hover:scale-105 hover:bg-amber-700">
            <Plus className="mr-2 h-4 w-4" />
            {triggerText}
          </Button>
        </DialogTrigger>
      )}

      {triggerElement && (
        <DialogTrigger asChild>{triggerElement}</DialogTrigger>
      )}

      <DialogContent className="flex w-[95%] max-w-[425px] flex-col border-amber-100 bg-white p-0 shadow-lg">
        {/* Cabeçalho */}
        <div className="flex items-center justify-between border-b border-amber-100 bg-amber-50 p-3">
          <DialogTitle className="line-clamp-1 text-base font-semibold text-amber-900">
            {title}
          </DialogTitle>
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
        <div className="max-h-[calc(85vh-120px)] overflow-y-auto p-4">
          <form id="modalForm" onSubmit={handleSubmit}>
            {children}
          </form>
        </div>

        {/* Rodapé */}
        <div className="mt-auto border-t border-amber-100 bg-amber-50/50 p-3">
          <div className="flex flex-col-reverse justify-end gap-2 sm:flex-row">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange && onOpenChange(false)}
              className="w-full border-amber-300 text-amber-800 hover:border-amber-400 hover:bg-amber-50 sm:w-auto"
            >
              {cancelText}
            </Button>
            <Button
              type="submit"
              form="modalForm"
              disabled={loading}
              className={`w-full sm:w-auto ${submitText === "Sair" ? "bg-red-500 hover:bg-red-600" : "bg-amber-800 hover:bg-amber-700"} text-white`}
            >
              {loading ? "Processando..." : submitText}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default FormModal;
