import { Building2, Pencil, Check, Trash2 } from 'lucide-react';
import { Button } from '../ui/button';

/**
 * Card para exibição de uma fazenda com suas ações
 * @param {Object} props
 * @param {Object} props.fazenda - Dados da fazenda a ser exibida
 * @param {Function} props.onVerDetalhes - Função para visualizar detalhes da fazenda
 * @param {Function} props.onEditar - Função para editar a fazenda
 * @param {Function} props.onSelecionar - Função para selecionar a fazenda
 * @param {Function} props.onExcluir - Função para excluir a fazenda
 */
function FazendaCard({ fazenda, onVerDetalhes, onEditar, onSelecionar, onExcluir }) {
    return (
        <div className="bg-white rounded-xl border border-amber-200 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="border-b border-amber-100 bg-amber-50 p-2 sm:p-3">
                <h3 className="font-semibold text-base sm:text-lg text-amber-900 truncate">{fazenda.name}</h3>
                <p className="text-amber-700 text-xs sm:text-sm">{fazenda.location}</p>
            </div>
            <div className="p-3 sm:p-4">
                <div className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                    <div className="flex justify-between items-center">
                        <span className="text-amber-800 text-xs sm:text-sm">Tamanho:</span>
                        <span className="font-medium text-xs sm:text-sm bg-amber-100 px-2 py-0.5 rounded-full">{fazenda.size} hectares</span>
                    </div>
                    {fazenda.animalCount !== undefined && (
                        <div className="flex justify-between items-center">
                            <span className="text-amber-800 text-xs sm:text-sm">Animais:</span>
                            <span className="font-medium text-xs sm:text-sm">{fazenda.animalCount || 0}</span>
                        </div>
                    )}
                    {fazenda.userCount !== undefined && (
                        <div className="flex justify-between items-center">
                            <span className="text-amber-800 text-xs sm:text-sm">Usuários:</span>
                            <span className="font-medium text-xs sm:text-sm">{fazenda.userCount || 0}</span>
                        </div>
                    )}
                </div>
                
                {fazenda.description && (
                    <p className="text-amber-600 text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2">{fazenda.description}</p>
                )}
                
                <div className="grid grid-cols-2 gap-1.5 sm:gap-2 mt-2 sm:mt-3">
                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
                        onClick={() => onVerDetalhes(fazenda)}
                    >
                        <Building2 className="h-3 w-3" />
                        <span>Detalhes</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
                        onClick={() => onEditar(fazenda)}
                    >
                        <Pencil className="h-3 w-3" />
                        <span>Editar</span>
                    </Button>

                    <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto bg-green-50 hover:bg-green-100 border-green-300 text-green-700"
                        onClick={() => onSelecionar(fazenda)}
                    >
                        <Check className="h-3 w-3" />
                        <span>Selecionar</span>
                    </Button>

                    <Button
                        variant="destructive"
                        size="sm"
                        className="flex items-center justify-center space-x-1 text-xs py-1 h-auto"
                        onClick={() => onExcluir(fazenda)}
                    >
                        <Trash2 className="h-3 w-3" />
                        <span>Excluir</span>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default FazendaCard; 