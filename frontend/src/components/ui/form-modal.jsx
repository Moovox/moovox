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
    cancelText = "Cancelar"
}) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogTrigger asChild>
                <Button className="bg-[#4e2e13] hover:bg-[#4e2e13]/90 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    {triggerText}
                </Button>
            </DialogTrigger>
            <DialogContent className="w-[95%] max-w-[425px] md:max-h-[85vh] p-0">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between p-4 md:p-6 border-b">
                        <DialogTitle className="text-lg md:text-xl font-semibold text-[#4e2e13]">
                            {title}
                        </DialogTitle>
                        <Button
                            variant="ghost"
                            className="h-8 w-8 p-0"
                            onClick={() => onOpenChange(false)}
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>

                    <div className="flex-1 overflow-hidden">
                        <ScrollArea className="h-[calc(85vh-8rem)] md:h-[calc(85vh-10rem)]">
                            <div className="p-4 md:p-6">
                                <form onSubmit={onSubmit} className="space-y-4 md:space-y-5">
                                    {children}
                                </form>
                            </div>
                        </ScrollArea>
                    </div>

                    <div className="border-t">
                        <div className="p-3 md:p-4">
                            <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
                                <Button
                                    type="button"
                                    variant="outline"
                                    onClick={() => onOpenChange(false)}
                                    className="w-full sm:w-auto border-[#e5e0d8] hover:bg-transparent hover:text-[#4e2e13] hover:border-[#4e2e13]"
                                >
                                    {cancelText}
                                </Button>
                                <Button
                                    type="submit"
                                    className="w-full sm:w-auto bg-[#4e2e13] hover:bg-[#4e2e13]/90 text-white"
                                >
                                    {submitText}
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