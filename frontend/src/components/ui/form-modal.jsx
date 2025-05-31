import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { Plus, X } from 'lucide-react';

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
    loading = false
}) {
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onSubmit && typeof onSubmit === 'function') {
            onSubmit(e);
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            {triggerText && (
                <DialogTrigger asChild>
                    <Button className="bg-amber-800 hover:bg-amber-700 text-white font-medium shadow-sm transition-all duration-200 transform hover:scale-105">
                        <Plus className="w-4 h-4 mr-2" />
                        {triggerText}
                    </Button>
                </DialogTrigger>
            )}
            
            {triggerElement && (
                <DialogTrigger asChild>
                    {triggerElement}
                </DialogTrigger>
            )}
            
            <DialogContent className="w-[95%] max-w-[425px] p-0 bg-white border-amber-100 shadow-lg flex flex-col">
                {/* Cabeçalho */}
                <div className="flex items-center justify-between p-3 border-b border-amber-100 bg-amber-50">
                    <DialogTitle className="text-base font-semibold text-amber-900 line-clamp-1">
                            {title}
                        </DialogTitle>
                        <Button
                            type="button"
                            variant="ghost"
                        className="h-8 w-8 p-0 text-amber-700 hover:bg-amber-100 rounded-full"
                            onClick={() => onOpenChange && onOpenChange(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                {/* Conteúdo */}
                <div className="p-4 overflow-y-auto max-h-[calc(85vh-120px)]">
                    <form id="modalForm" onSubmit={handleSubmit}>
                                    {children}
                                </form>
                    </div>

                {/* Rodapé */}
                <div className="border-t border-amber-100 bg-amber-50/50 p-3 mt-auto">
                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => onOpenChange && onOpenChange(false)}
                            className="w-full sm:w-auto border-amber-300 text-amber-800 hover:bg-amber-50 hover:border-amber-400"
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