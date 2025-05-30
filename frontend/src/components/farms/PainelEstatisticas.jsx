import { Building2 } from 'lucide-react';
import Card from '../ui/Card';
import { CardContent } from '../ui/Card';

/**
 * Painel de estatísticas gerais das fazendas
 * @param {Object} props
 * @param {Object} props.estatisticas - Dados estatísticos das fazendas
 */
function PainelEstatisticas({ estatisticas }) {
    const { totalFazendas, totalAnimais, totalUsuarios, areaTotal } = estatisticas;

    return (
        <div className="mb-4 md:mb-6 grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4">
            <Card variant="rural" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <Building2 className="w-6 h-6 sm:w-8 sm:h-8 text-amber-700 mb-1 sm:mb-2" />
                        <h3 className="text-base sm:text-lg font-semibold text-amber-900">{totalFazendas}</h3>
                        <p className="text-amber-700 text-xs sm:text-sm">Fazendas Cadastradas</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="palha" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-amber-800 mb-1 sm:mb-2">{areaTotal}</span>
                        <p className="text-amber-700 text-xs sm:text-sm">Hectares Totais</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="verde" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{totalAnimais}</span>
                        <p className="text-white text-xs sm:text-sm">Animais Registrados</p>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="terra" className="shadow-sm">
                <CardContent className="p-2 sm:p-4">
                    <div className="flex flex-col items-center text-center">
                        <span className="text-xl sm:text-2xl font-bold text-white mb-1 sm:mb-2">{totalUsuarios}</span>
                        <p className="text-white text-xs sm:text-sm">Usuários Vinculados</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}

export default PainelEstatisticas; 