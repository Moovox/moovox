import React from 'react';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from './dialog';
import { Button } from './button';
import { ScrollArea } from './scroll-area';
import { Plus, X } from 'lucide-react';

function FormModal({ 
    title, 
    children, 
    open, 
    onOpenChange, 
    onSubmit,
    triggerText,
    submitText = "Cadastrar",
    cancelText = "Cancelar",
    loading = false
}) {
    const formRef = React.useRef();

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
            <DialogContent className="w-[95%] max-w-[425px] md:max-h-[85vh] p-0 bg-white border-amber-100 shadow-lg">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 md:p-6 border-b border-amber-100 bg-amber-50">
                        <DialogTitle className="text-lg md:text-xl font-semibold text-amber-900">
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

                    <div className="flex-1 overflow-hidden">
                        <ScrollArea className="h-[calc(85vh-8rem)] md:h-[calc(85vh-10rem)]">
                            <div>
                                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 md:space-y-5">
                                    {children}
                                </form>
                            </div>
                        </ScrollArea>
                    </div>

                    <div className="border-t border-amber-100 bg-amber-50/50">
                        <div className="p-2">
                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-3">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => onOpenChange && onOpenChange(false)}
                                    className="w-full sm:w-auto border-amber-300 text-amber-800 hover:bg-amber-50 hover:text-amber-900 hover:border-amber-400 transition-colors"
                                >
                                    {cancelText}
                                </Button>
                                <Button
                                    type="submit"
                                    onClick={() => formRef.current?.requestSubmit()}
                                    disabled={loading}
                                    className="w-full sm:w-auto bg-amber-800 hover:bg-amber-700 text-white font-medium shadow-sm transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none"
                                >
                                    {loading ? "Cadastrando..." : submitText}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default FormModal; 