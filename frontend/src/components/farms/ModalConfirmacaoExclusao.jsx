import { Dialog, DialogContent, DialogTitle } from '../ui/dialog';
import { Button } from '../ui/button';
import { Trash2 } from 'lucide-react';

/**
 * Modal de confirmação para exclusão de fazenda
 * @param {Object} props
 * @param {Object} props.fazenda - Dados da fazenda a ser excluída
 * @param {boolean} props.open - Estado do modal (aberto/fechado)
 * @param {Function} props.onOpenChange - Função para alterar o estado do modal
 * @param {Function} props.onConfirm - Função a ser chamada quando a exclusão for confirmada
 * @param {boolean} props.loading - Estado de carregamento durante a exclusão
 */
function ModalConfirmacaoExclusao({ fazenda, open, onOpenChange, onConfirm, loading }) {
    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="w-[95%] max-w-[425px] p-0 bg-white border-amber-100 shadow-lg flex flex-col">
                <div className="flex items-center justify-between p-3 border-b border-amber-100 bg-amber-50">
                    <DialogTitle className="text-base font-semibold text-amber-900">
                        Confirmar Exclusão
                    </DialogTitle>
                    <Button
                        type="button"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-amber-700 hover:bg-amber-100 rounded-full"
                        onClick={() => onOpenChange(false)}
                    >
                        <Trash2 className="h-4 w-4" />
                    </Button>
                </div>

                <div className="p-4">
                    <p className="text-amber-900">
                        Tem certeza que deseja excluir a fazenda <strong>{fazenda?.name}</strong>? Esta ação não pode ser desfeita.
                    </p>
                </div>

                <div className="border-t border-amber-100 bg-amber-50/50 p-3 mt-auto">
                    <div className="flex flex-col-reverse sm:flex-row justify-end gap-2">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={() => onOpenChange(false)}
                            className="w-full sm:w-auto border-amber-300 text-amber-800 hover:bg-amber-50 hover:border-amber-400"
                        >
                            Cancelar
                        </Button>
                        <Button
                            type="button"
                            onClick={onConfirm}
                            disabled={loading}
                            className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white"
                        >
                            {loading ? "Excluindo..." : "Excluir"}
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ModalConfirmacaoExclusao; 