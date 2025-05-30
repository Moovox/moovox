import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import { fazendaService } from '../services/fazendaService';
import { useAuth } from '../components/AuthContext';
import Card from '../components/ui/Card';
import { CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/button';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Building2 } from 'lucide-react';
import { useToast } from '../components/ui/use-toast';

// Componentes modulares
import ModalCriacaoFazenda from '../components/farms/ModalCriacaoFazenda';
import ModalEdicaoFazenda from '../components/farms/ModalEdicaoFazenda';
import ModalConfirmacaoExclusao from '../components/farms/ModalConfirmacaoExclusao';
import DetalheFazenda from '../components/farms/DetalheFazenda';
import PainelEstatisticas from '../components/farms/PainelEstatisticas';
import FazendaCard from '../components/farms/FazendaCard';

/**
 * Página de gerenciamento de fazendas
 * Permite visualizar, criar, editar e excluir fazendas
 */
export default function FazendasPage() {
    const [fazendas, setFazendas] = useState([]);
    const [editandoFazenda, setEditandoFazenda] = useState(null);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const [fazendaParaExcluir, setFazendaParaExcluir] = useState(null);
    const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
    const [fazendaSelecionada, setFazendaSelecionada] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingExclusao, setLoadingExclusao] = useState(false);
    const [estatisticasGerais, setEstatisticasGerais] = useState({
        totalFazendas: 0,
        totalAnimais: 0,
        totalUsuarios: 0,
        areaTotal: 0,
        maioresPropriedades: []
    });
    const [viewMode, setViewMode] = useState('cards'); // 'cards' ou 'table'
    const { user } = useAuth();
    const navigate = useNavigate();
    const { toast } = useToast();

    // Verificar se o usuário é admin
    useEffect(() => {
        if (user && user.role !== 'ADMIN') {
            toast({
                variant: "destructive",
                title: "Acesso negado",
                description: "Apenas administradores podem acessar esta página"
            });
            navigate('/dashboard');
        }
    }, [user, navigate, toast]);

    // Carregar lista de fazendas
    const carregarFazendas = async () => {
        try {
            setLoading(true);
            const data = await fazendaService.listarFazendas();
            setFazendas(data || []);
            
            // Calcular estatísticas gerais
            if (data && data.length > 0) {
                const totalAnimais = data.reduce((sum, farm) => sum + (farm.animalCount || 0), 0);
                const totalUsuarios = data.reduce((sum, farm) => sum + (farm.userCount || 0), 0);
                const areaTotal = data.reduce((sum, farm) => sum + (Number(farm.size) || 0), 0);
                
                // Encontrar as 3 maiores propriedades por área
                const maioresPropriedades = [...data]
                    .sort((a, b) => (Number(b.size) || 0) - (Number(a.size) || 0))
                    .slice(0, 3);
                
                setEstatisticasGerais({
                    totalFazendas: data.length,
                    totalAnimais,
                    totalUsuarios,
                    areaTotal,
                    maioresPropriedades
                });
            } else {
                setEstatisticasGerais({
                    totalFazendas: 0,
                    totalAnimais: 0,
                    totalUsuarios: 0,
                    areaTotal: 0,
                    maioresPropriedades: []
                });
            }
        } catch (error) {
            console.error('Erro ao carregar fazendas:', error);
            
            // Tratar o erro, mas não mostrar toast para o usuário se não houver fazendas
            if (error.message && !error.message.includes('Nenhuma fazenda encontrada')) {
                toast({
                    variant: "destructive",
                    title: "Erro",
                    description: "Erro ao carregar fazendas"
                });
            }
            
            // Se houver erro, definir fazendas como array vazio
            setFazendas([]);
            setEstatisticasGerais({
                totalFazendas: 0,
                totalAnimais: 0,
                totalUsuarios: 0,
                areaTotal: 0,
                maioresPropriedades: []
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user && user.role === 'ADMIN') {
            carregarFazendas();
        }
    }, [user, toast]);

    const handleAbrirEdicao = (fazenda) => {
        setEditandoFazenda(fazenda);
        setModalEdicaoAberto(true);
    };

    const handleAbrirExclusao = (fazenda) => {
        setFazendaParaExcluir(fazenda);
        setModalExclusaoAberto(true);
    };

    const handleExcluirFazenda = async () => {
        if (!fazendaParaExcluir) return;

        setLoadingExclusao(true);
        try {
            console.log(`Tentando excluir fazenda com ID: ${fazendaParaExcluir.id}`);
            await fazendaService.excluirFazenda(fazendaParaExcluir.id);
            
            // Atualizar a lista de fazendas localmente, sem precisar recarregar do servidor
            setFazendas(prevFazendas => prevFazendas.filter(f => f.id !== fazendaParaExcluir.id));
            
            toast({
                title: "Sucesso",
                description: "Fazenda excluída com sucesso!"
            });

            // Limpar o estado
            setFazendaParaExcluir(null);
            setModalExclusaoAberto(false);
            
            // Atualizar estatísticas após exclusão
            carregarFazendas();
        } catch (error) {
            console.error('Erro detalhado ao excluir fazenda:', error);
            console.error('Mensagem de erro:', error.message);
            console.error('Resposta completa:', JSON.stringify(error, null, 2));
            
            // Mensagem de erro mais específica
            let errorMessage = "Erro ao excluir fazenda";
            
            if (error.message) {
                errorMessage = error.message;
                
                // Verificar mensagens específicas
                if (error.message.includes('animais vinculados')) {
                    errorMessage = "Não é possível excluir a fazenda pois existem animais vinculados a ela.";
                } else if (error.message.includes('usuários vinculados')) {
                    errorMessage = "Não é possível excluir a fazenda pois existem usuários vinculados a ela.";
                } else if (error.message.includes('permissão')) {
                    errorMessage = "Você não tem permissão para excluir esta fazenda.";
                }
            }
            
            toast({
                variant: "destructive",
                title: "Erro",
                description: errorMessage
            });
        } finally {
            setLoadingExclusao(false);
        }
    };

    const handleSelecionarFazenda = (fazenda) => {
        fazendaService.selecionarFazenda(fazenda.id);
        toast({
            title: "Fazenda selecionada",
            description: `Fazenda ${fazenda.name} selecionada com sucesso!`
        });
    };

    const handleVerDetalhesFazenda = (fazenda) => {
        setFazendaSelecionada(fazenda);
    };

    const handleVoltarParaLista = () => {
        setFazendaSelecionada(null);
    };
    
    const toggleViewMode = () => {
        setViewMode(prev => prev === 'cards' ? 'table' : 'cards');
    };

    // Renderização para a tela de carregamento
    if (loading) {
        return (
            <MainLayout title="Fazendas" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="flex justify-center items-center h-screen">
                    <div className="text-lg font-poppins text-[#4e2e13] animate-pulse">Carregando...</div>
                </div>
            </MainLayout>
        );
    }

    // Renderização para quando não há fazendas
    const renderEmptyState = () => (
        <div className="text-center py-6 bg-amber-50 border border-amber-200 rounded-lg">
            <Building2 className="w-10 h-10 mx-auto text-amber-300 mb-2" />
            <p className="text-amber-800">Nenhuma fazenda cadastrada</p>
            <p className="text-amber-600 text-sm mt-1">Clique em "Nova Fazenda" para cadastrar</p>
        </div>
    );

    // Renderização da lista de fazendas como tabela
    const renderFazendasTable = () => (
        <div className="bg-white rounded-lg overflow-hidden border border-amber-100 shadow">
            <Table>
                <TableHeader className="bg-amber-50">
                    <TableRow>
                        <TableHead className="text-amber-900">Nome</TableHead>
                        <TableHead className="text-amber-900">Localização</TableHead>
                        <TableHead className="text-amber-900">Tamanho (ha)</TableHead>
                        <TableHead className="text-amber-900">Descrição</TableHead>
                        <TableHead className="text-amber-900">Ações</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {fazendas.map((fazenda) => (
                        <TableRow key={fazenda.id} className="hover:bg-amber-50/50">
                            <TableCell className="font-medium text-amber-900">{fazenda.name}</TableCell>
                            <TableCell>{fazenda.location}</TableCell>
                            <TableCell>{fazenda.size}</TableCell>
                            <TableCell>{fazenda.description}</TableCell>
                            <TableCell>
                                <div className="flex flex-wrap gap-2">
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center space-x-1"
                                        onClick={() => handleVerDetalhesFazenda(fazenda)}
                                    >
                                        <Building2 className="h-3 w-3" />
                                        <span>Detalhes</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center space-x-1"
                                        onClick={() => handleAbrirEdicao(fazenda)}
                                    >
                                        <span>Editar</span>
                                    </Button>

                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="flex items-center space-x-1 bg-green-50 hover:bg-green-100 border-green-300 text-green-700"
                                        onClick={() => handleSelecionarFazenda(fazenda)}
                                    >
                                        <span>Selecionar</span>
                                    </Button>

                                    <Button
                                        variant="destructive"
                                        size="sm"
                                        className="flex items-center space-x-1"
                                        onClick={() => handleAbrirExclusao(fazenda)}
                                    >
                                        <span>Excluir</span>
                                    </Button>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );

    // Renderização da lista de fazendas como cards
    const renderFazendasCards = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {fazendas.map((fazenda) => (
                <FazendaCard 
                    key={fazenda.id} 
                    fazenda={fazenda}
                    onVerDetalhes={handleVerDetalhesFazenda}
                    onEditar={handleAbrirEdicao}
                    onSelecionar={handleSelecionarFazenda}
                    onExcluir={handleAbrirExclusao}
                />
            ))}
        </div>
    );

    return (
        <>
            <Helmet>
                <title>Moovox | Fazendas</title>
                <meta name='description' content='Gerenciamento de Fazendas' />
            </Helmet>
            <MainLayout title="Fazendas" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="mt-4 md:mt-6 lg:mt-8">
                    <Card>
                        <CardHeader className="pb-3 md:pb-4">
                            <div className="flex items-center">
                                <Building2 className="w-5 h-5 md:w-6 md:h-6 mr-2 text-[#a97c50]" />
                                <CardTitle className="text-base sm:text-lg md:text-xl">Gerenciamento de Fazendas</CardTitle>
                            </div>
                            <CardDescription className="text-xs sm:text-sm">
                                Adicione, edite ou exclua fazendas da plataforma. Apenas administradores podem acessar esta página.
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            {fazendaSelecionada ? (
                                <DetalheFazenda
                                    fazenda={fazendaSelecionada}
                                    onReturn={handleVoltarParaLista}
                                />
                            ) : (
                                <>
                                    {/* Painel de estatísticas */}
                                    {fazendas.length > 0 && (
                                        <PainelEstatisticas estatisticas={estatisticasGerais} />
                                    )}

                                    <div className="mb-4 md:mb-6 flex flex-col xs:flex-row justify-between items-start xs:items-center gap-3 xs:gap-0">
                                        <ModalCriacaoFazenda onSuccess={carregarFazendas} />
                                        
                                        {fazendas.length > 0 && (
                                            <Button
                                                variant="outline"
                                                onClick={toggleViewMode}
                                                className="border-amber-300 text-amber-800 text-xs sm:text-sm w-full xs:w-auto"
                                            >
                                                {viewMode === 'cards' ? 'Visualizar como Tabela' : 'Visualizar como Cards'}
                                            </Button>
                                        )}
                                    </div>

                                    {fazendas.length === 0 
                                        ? renderEmptyState()
                                        : viewMode === 'cards' 
                                            ? renderFazendasCards() 
                                            : renderFazendasTable()
                                    }
                                </>
                            )}

                            {/* Modais */}
                            <ModalEdicaoFazenda
                                fazenda={editandoFazenda}
                                open={modalEdicaoAberto}
                                onOpenChange={setModalEdicaoAberto}
                                onSuccess={carregarFazendas}
                            />

                            <ModalConfirmacaoExclusao
                                fazenda={fazendaParaExcluir}
                                open={modalExclusaoAberto}
                                onOpenChange={setModalExclusaoAberto}
                                onConfirm={handleExcluirFazenda}
                                loading={loadingExclusao}
                            />
                        </CardContent>
                    </Card>
                </div>
            </MainLayout>
        </>
    );
}
