import { useState, useEffect } from 'react';
import { Building2, Check } from 'lucide-react';
import { fazendaService } from '../../services/fazendaService';
import { useToast } from '../ui/use-toast';
import { Button } from '../ui/button';
import Card from '../ui/Card';
import { CardHeader, CardTitle, CardContent } from '../ui/Card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';

/**
 * Exibe detalhes de uma fazenda com abas para diferentes categorias de informação
 * @param {Object} props
 * @param {Object} props.fazenda - Dados da fazenda
 * @param {Function} props.onReturn - Função chamada para voltar à lista de fazendas
 */
function DetalheFazenda({ fazenda, onReturn }) {
    const [loading, setLoading] = useState(true);
    const [estatisticas, setEstatisticas] = useState(null);
    const [animais, setAnimais] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [activeTab, setActiveTab] = useState('estatisticas');
    const { toast } = useToast();
    
    // Dados para demonstração - em um ambiente real, viriam do banco de dados
    const dadosSustentabilidade = {
        areaPreservacao: Math.round(fazenda.size * 0.2), // 20% de área de preservação
        fontesRenovaveis: ["Solar", "Biodigestor"],
        certificacoes: ["Orgânico", "Bem-estar animal"],
        praticasSustentaveis: [
            "Rotação de pastagens",
            "Compostagem de resíduos",
            "Captação de água da chuva",
            "Controle biológico de pragas"
        ]
    };
    
    const dadosProducao = {
        producaoLeiteira: fazenda.size > 10 ? `${Math.round(fazenda.size * 50)} litros/dia` : "N/A",
        produtosDerivados: ["Leite", "Queijo", "Carne"],
        cultivos: ["Milho", "Soja", "Pastagem"],
        ciclosProducao: [
            { periodo: "Jan-Mar", atividade: "Plantio de milho" },
            { periodo: "Abr-Jun", atividade: "Colheita e armazenamento" },
            { periodo: "Jul-Set", atividade: "Manejo de pastagem" },
            { periodo: "Out-Dez", atividade: "Reprodução animal" }
        ]
    };
    
    const historicoAtividades = [
        { data: "20/05/2025", atividade: "Vacinação em massa", responsavel: "Dr. Carlos Silva" },
        { data: "15/05/2025", atividade: "Manutenção de cercas", responsavel: "Equipe de campo" },
        { data: "10/05/2025", atividade: "Inseminação artificial", responsavel: "Técnico João" },
        { data: "05/05/2025", atividade: "Entrega de ração", responsavel: "Fornecedor" },
        { data: "01/05/2025", atividade: "Controle sanitário", responsavel: "Equipe veterinária" }
    ];

    useEffect(() => {
        const carregarDados = async () => {
            try {
                setLoading(true);

                // Carrega estatísticas da fazenda
                try {
                    const statsData = await fazendaService.getEstatisticasFazenda(fazenda.id);
                    setEstatisticas(statsData);
                } catch (error) {
                    console.error('Erro ao carregar estatísticas:', error);
                    // Ainda continuamos para carregar outros dados
                }

                // Carrega animais vinculados à fazenda
                try {
                    const animaisData = await fazendaService.listarAnimaisPorFazenda(fazenda.id);
                    setAnimais(animaisData || []);
                } catch (error) {
                    console.error('Erro ao carregar animais:', error);
                    // Definir como array vazio
                    setAnimais([]);
                }

                // Carrega usuários vinculados à fazenda
                try {
                    const usuariosData = await fazendaService.listarUsuariosPorFazenda(fazenda.id);
                    setUsuarios(usuariosData || []);
                } catch (error) {
                    console.error('Erro ao carregar usuários:', error);
                    // Definir como array vazio
                    setUsuarios([]);
                }

            } catch (error) {
                console.error('Erro geral ao carregar dados da fazenda:', error);
                // Apenas mostrar toast para erros gerais, não para listas vazias
                toast({
                    variant: "destructive",
                    title: "Erro",
                    description: "Não foi possível carregar alguns dados da fazenda"
                });
            } finally {
                setLoading(false);
            }
        };

        if (fazenda) {
            carregarDados();
        }
    }, [fazenda, toast]);

    if (loading) {
        return (
            <div className="p-8 text-center">
                <div className="text-lg font-poppins text-[#4e2e13] animate-pulse">Carregando dados da fazenda...</div>
            </div>
        );
    }

    // Componente de mapa estático simplificado (simulado)
    const MapaEstatico = () => (
        <div className="relative w-full h-[200px] bg-amber-50 rounded-lg overflow-hidden border border-amber-200">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-amber-100 opacity-70"></div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white p-2 rounded-lg shadow-md border border-amber-200">
                    <Building2 className="w-8 h-8 text-amber-700" />
                    <div className="text-xs font-medium text-center mt-1">{fazenda.name}</div>
                </div>
            </div>
            <div className="absolute bottom-2 right-2 text-xs bg-white px-2 py-1 rounded shadow border border-amber-100">
                Localização: {fazenda.location}
            </div>
        </div>
    );

    // Renderização das diferentes abas
    const renderTabContent = () => {
        switch (activeTab) {
            case 'estatisticas':
                return renderEstatisticas();
            case 'sustentabilidade':
                return renderSustentabilidade();
            case 'producao':
                return renderProducao();
            case 'atividades':
                return renderAtividades();
            case 'animais':
                return renderAnimais();
            case 'usuarios':
                return renderUsuarios();
            default:
                return renderEstatisticas();
        }
    };

    // Conteúdo da aba Estatísticas
    const renderEstatisticas = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card variant="rural" className="shadow-sm">
                <CardHeader>
                    <CardTitle>Informações</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        <div className="flex justify-between">
                            <span className="text-amber-800">Tamanho:</span>
                            <span className="font-medium">{fazenda.size} hectares</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-amber-800">Total de Animais:</span>
                            <span className="font-medium">{estatisticas.totalAnimals}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-amber-800">Total de Usuários:</span>
                            <span className="font-medium">{estatisticas.totalUsers}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-amber-800">Vacinas Pendentes:</span>
                            <span className="font-medium">{estatisticas.pendingVaccinations}</span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {estatisticas.animalsBySpecies?.length > 0 && (
                <Card variant="palha" className="shadow-sm">
                    <CardHeader>
                        <CardTitle>Animais por Espécie</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {estatisticas.animalsBySpecies.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <span className="text-amber-800">{item.species}:</span>
                                    <span className="font-medium">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {estatisticas.usersByRole?.length > 0 && (
                <Card variant="verde" className="shadow-sm">
                    <CardHeader>
                        <CardTitle>Usuários por Função</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-2">
                            {estatisticas.usersByRole.map((item, index) => (
                                <div key={index} className="flex justify-between">
                                    <span className="text-white">{item.role}:</span>
                                    <span className="font-medium">{item.count}</span>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}
            
            <Card variant="rural" className="shadow-sm md:col-span-2 lg:col-span-3">
                <CardHeader>
                    <CardTitle>Localização</CardTitle>
                </CardHeader>
                <CardContent>
                    <MapaEstatico />
                </CardContent>
            </Card>
        </div>
    );

    // Conteúdo da aba Sustentabilidade
    const renderSustentabilidade = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="rural" className="shadow-sm">
                <CardHeader>
                    <CardTitle>Práticas Sustentáveis</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 list-disc list-inside text-amber-800">
                        {dadosSustentabilidade.praticasSustentaveis.map((pratica, index) => (
                            <li key={index}>{pratica}</li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
            
            <Card variant="verde" className="shadow-sm">
                <CardHeader>
                    <CardTitle>Fontes Renováveis</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div className="flex justify-between items-center">
                            <span className="text-white">Área de Preservação:</span>
                            <span className="font-medium bg-green-700 text-white px-2 py-1 rounded-full text-xs">
                                {dadosSustentabilidade.areaPreservacao} hectares
                            </span>
                        </div>
                        <div>
                            <span className="text-white block mb-2">Energias utilizadas:</span>
                            <div className="flex flex-wrap gap-2">
                                {dadosSustentabilidade.fontesRenovaveis.map((fonte, index) => (
                                    <span key={index} className="bg-green-700 text-white px-2 py-1 rounded-full text-xs">
                                        {fonte}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="palha" className="shadow-sm md:col-span-2">
                <CardHeader>
                    <CardTitle>Certificações</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex flex-wrap gap-3">
                        {dadosSustentabilidade.certificacoes.map((certificacao, index) => (
                            <div key={index} className="flex items-center gap-2 bg-amber-100 border border-amber-200 px-3 py-2 rounded-lg">
                                <Check className="text-green-600 w-5 h-5" />
                                <span className="text-amber-800 font-medium">{certificacao}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    // Conteúdo da aba Produção
    const renderProducao = () => (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card variant="rural" className="shadow-sm">
                <CardHeader>
                    <CardTitle>Produção Principal</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        <div className="flex justify-between">
                            <span className="text-amber-800">Produção Leiteira:</span>
                            <span className="font-medium">{dadosProducao.producaoLeiteira}</span>
                        </div>
                        <div>
                            <span className="text-amber-800 block mb-2">Produtos:</span>
                            <div className="flex flex-wrap gap-2">
                                {dadosProducao.produtosDerivados.map((produto, index) => (
                                    <span key={index} className="bg-amber-100 text-amber-800 px-2 py-1 rounded-full text-xs border border-amber-200">
                                        {produto}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="palha" className="shadow-sm">
                <CardHeader>
                    <CardTitle>Cultivos</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-2 gap-2">
                        {dadosProducao.cultivos.map((cultivo, index) => (
                            <div key={index} className="bg-amber-50 border border-amber-200 p-2 rounded text-center">
                                <span className="text-amber-800">{cultivo}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
            
            <Card variant="rural" className="shadow-sm md:col-span-2">
                <CardHeader>
                    <CardTitle>Ciclos de Produção</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                        {dadosProducao.ciclosProducao.map((ciclo, index) => (
                            <div key={index} className="bg-amber-50 border border-amber-200 p-3 rounded">
                                <span className="block text-amber-700 font-semibold text-sm">{ciclo.periodo}</span>
                                <span className="block text-amber-900">{ciclo.atividade}</span>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );

    // Conteúdo da aba Atividades
    const renderAtividades = () => (
        <Card variant="rural" className="shadow-sm">
            <CardHeader>
                <CardTitle>Histórico de Atividades</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {historicoAtividades.map((atividade, index) => (
                        <div key={index} className="flex items-start gap-3 pb-3 border-b border-amber-100 last:border-0">
                            <div className="bg-amber-100 p-2 rounded-lg border border-amber-200 text-center min-w-[80px]">
                                <span className="block text-xs text-amber-700">{atividade.data.split('/')[0]}</span>
                                <span className="block text-sm font-medium text-amber-900">{atividade.data.split('/')[1]}/{atividade.data.split('/')[2]}</span>
                            </div>
                            <div>
                                <h4 className="font-medium text-amber-900">{atividade.atividade}</h4>
                                <p className="text-sm text-amber-700">Responsável: {atividade.responsavel}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );

    // Conteúdo da aba Animais
    const renderAnimais = () => (
        <div>
            {animais.length === 0 ? (
                <div className="text-center py-8 bg-amber-50/50 rounded-lg border border-amber-100">
                    <p className="text-amber-800">Nenhum animal cadastrado para esta fazenda</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-amber-50">
                            <TableRow>
                                <TableHead className="text-amber-900">ID</TableHead>
                                <TableHead className="text-amber-900">Nome</TableHead>
                                <TableHead className="text-amber-900">Espécie</TableHead>
                                <TableHead className="text-amber-900">Raça</TableHead>
                                <TableHead className="text-amber-900">Status</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {animais.map((animal) => (
                                <TableRow key={animal.id} className="hover:bg-amber-50/50">
                                    <TableCell className="font-medium">{animal.identificacao}</TableCell>
                                    <TableCell>{animal.nome}</TableCell>
                                    <TableCell>{animal.especie}</TableCell>
                                    <TableCell>{animal.raca}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${animal.status === 'saudavel' ? 'bg-green-100 text-green-800' :
                                                animal.status === 'doente' ? 'bg-red-100 text-red-800' :
                                                animal.status === 'em_tratamento' ? 'bg-amber-100 text-amber-800' :
                                                animal.status === 'em_recuperacao' ? 'bg-blue-100 text-blue-800' :
                                                'bg-gray-100 text-gray-800'
                                            }`}>
                                            {animal.status === 'saudavel' ? 'Saudável' :
                                                animal.status === 'doente' ? 'Doente' :
                                                animal.status === 'em_tratamento' ? 'Em Tratamento' :
                                                animal.status === 'em_recuperacao' ? 'Em Recuperação' :
                                                animal.status
                                            }
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );

    // Conteúdo da aba Usuários
    const renderUsuarios = () => (
        <div>
            {usuarios.length === 0 ? (
                <div className="text-center py-8 bg-amber-50/50 rounded-lg border border-amber-100">
                    <p className="text-amber-800">Nenhum usuário cadastrado para esta fazenda</p>
                </div>
            ) : (
                <div className="overflow-x-auto">
                    <Table>
                        <TableHeader className="bg-amber-50">
                            <TableRow>
                                <TableHead className="text-amber-900">Nome</TableHead>
                                <TableHead className="text-amber-900">Email</TableHead>
                                <TableHead className="text-amber-900">Tipo</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {usuarios.map((usuario) => (
                                <TableRow key={usuario.id} className="hover:bg-amber-50/50">
                                    <TableCell className="font-medium">{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>
                                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${usuario.tipo === 'Administrador' ? 'bg-purple-100 text-purple-800' :
                                                usuario.tipo === 'Veterinário' ? 'bg-blue-100 text-blue-800' :
                                                    usuario.tipo === 'Fazendeiro' ? 'bg-amber-100 text-amber-800' :
                                                        'bg-gray-100 text-gray-800'
                                            }`}>
                                            {usuario.tipo}
                                        </span>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>
            )}
        </div>
    );

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <Building2 className="w-8 h-8 mr-3 text-amber-700" />
                    <div>
                        <h2 className="text-2xl font-bold text-amber-900">{fazenda.name}</h2>
                        <p className="text-amber-700">{fazenda.location}</p>
                    </div>
                </div>
                <Button
                    variant="outline"
                    onClick={onReturn}
                    className="border-amber-300 text-amber-800 hover:bg-amber-50"
                >
                    Voltar para lista
                </Button>
            </div>

            {/* Descrição da fazenda, se existir */}
            {fazenda.description && (
                <div className="mb-6 bg-amber-50/60 p-4 rounded-lg border border-amber-100">
                    <h3 className="text-lg font-semibold text-amber-800 mb-2">Sobre a fazenda</h3>
                    <p className="text-amber-700">{fazenda.description}</p>
                </div>
            )}

            <div className="bg-white rounded-lg border border-amber-100 shadow-md overflow-hidden mb-6">
                <div className="flex flex-wrap border-b border-amber-100">
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'estatisticas'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('estatisticas')}
                    >
                        Estatísticas
                    </button>
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'sustentabilidade'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('sustentabilidade')}
                    >
                        Sustentabilidade
                    </button>
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'producao'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('producao')}
                    >
                        Produção
                    </button>
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'atividades'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('atividades')}
                    >
                        Histórico
                    </button>
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'animais'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('animais')}
                    >
                        Animais ({animais.length})
                    </button>
                    <button
                        className={`px-4 py-3 font-medium text-sm focus:outline-none transition-colors ${activeTab === 'usuarios'
                                ? 'bg-amber-50 text-amber-900 border-b-2 border-amber-500'
                                : 'text-amber-700 hover:bg-amber-50/50'
                            }`}
                        onClick={() => setActiveTab('usuarios')}
                    >
                        Usuários ({usuarios.length})
                    </button>
                </div>

                <div className="p-4">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
}

export default DetalheFazenda; 