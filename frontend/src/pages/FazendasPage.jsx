import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import { fazendaService } from '../services/fazendaService';
import { useAuth } from '../components/AuthContext';
import Card from '../components/ui/Card';
import { CardContent, CardHeader, CardTitle, CardDescription } from '../components/ui/Card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
    DialogClose
} from '../components/ui/dialog';
import { useToast } from '../components/ui/use-toast';
import FormModal from '../components/ui/form-modal';
import { Pencil, Trash2, Check, Building2 } from 'lucide-react';

// Modal de Criação de Fazenda
function ModalCriacaoFazenda({ onSuccess }) {
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        size: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const { toast } = useToast();

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.location?.trim()) {
            newErrors.location = 'Localização é obrigatória';
        }

        if (!formData.size) {
            newErrors.size = 'Tamanho é obrigatório';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const resetForm = () => {
        setFormData({
            name: '',
            location: '',
            size: '',
            description: ''
        });
        setErrors({});
    };

    const handleOpenChange = (newOpen) => {
        setOpen(newOpen);
        if (!newOpen) {
            resetForm();
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            await fazendaService.criarFazenda(formData);
            toast({
                title: "Sucesso",
                description: "Fazenda criada com sucesso!"
            });

            resetForm();
            setOpen(false);

            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Erro ao criar fazenda"
            });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Criar Nova Fazenda"
            triggerText="Nova Fazenda"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Nome</label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite o nome da fazenda"
                        className={`${errors.name ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Localização</label>
                    <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Digite a localização"
                        className={`${errors.location ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.location && <span className="text-xs text-red-500">{errors.location}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Tamanho (ha)</label>
                    <Input
                        name="size"
                        type="number"
                        value={formData.size}
                        onChange={handleChange}
                        placeholder="Digite o tamanho em hectares"
                        className={`${errors.size ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.size && <span className="text-xs text-red-500">{errors.size}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Descrição</label>
                    <Input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Digite uma descrição (opcional)"
                        className="border-amber-200"
                    />
                </div>
            </div>
        </FormModal>
    );
}

// Modal de Edição de Fazenda
function ModalEdicaoFazenda({ fazenda, open, onOpenChange, onSuccess }) {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        location: '',
        size: '',
        description: ''
    });
    const [errors, setErrors] = useState({});
    const { toast } = useToast();

    useEffect(() => {
        if (fazenda && open) {
            setFormData({
                name: fazenda.name || '',
                location: fazenda.location || '',
                size: fazenda.size?.toString() || '',
                description: fazenda.description || ''
            });
        }
    }, [fazenda, open]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name?.trim()) {
            newErrors.name = 'Nome é obrigatório';
        }

        if (!formData.location?.trim()) {
            newErrors.location = 'Localização é obrigatória';
        }

        if (!formData.size) {
            newErrors.size = 'Tamanho é obrigatório';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setLoading(true);
        try {
            await fazendaService.atualizarFazenda(fazenda.id, formData);
            toast({
                title: "Sucesso",
                description: "Fazenda atualizada com sucesso!"
            });

            onOpenChange(false);

            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            toast({
                variant: "destructive",
                title: "Erro",
                description: "Erro ao atualizar fazenda"
            });
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Editar Fazenda"
            open={open}
            onOpenChange={onOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
            submitText="Salvar"
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Nome</label>
                    <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Digite o nome da fazenda"
                        className={`${errors.name ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.name && <span className="text-xs text-red-500">{errors.name}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Localização</label>
                    <Input
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        placeholder="Digite a localização"
                        className={`${errors.location ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.location && <span className="text-xs text-red-500">{errors.location}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Tamanho (ha)</label>
                    <Input
                        name="size"
                        type="number"
                        value={formData.size}
                        onChange={handleChange}
                        placeholder="Digite o tamanho em hectares"
                        className={`${errors.size ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.size && <span className="text-xs text-red-500">{errors.size}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Descrição</label>
                    <Input
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Digite uma descrição (opcional)"
                        className="border-amber-200"
                    />
                </div>
            </div>
        </FormModal>
    );
}

// Modal de Confirmação de Exclusão
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

function DetalheFazenda({ fazenda, onReturn }) {
    const [loading, setLoading] = useState(true);
    const [estatisticas, setEstatisticas] = useState(null);
    const [animais, setAnimais] = useState([]);
    const [usuarios, setUsuarios] = useState([]);
    const [activeTab, setActiveTab] = useState('estatisticas');
    const { toast } = useToast();

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

            <div className="bg-white rounded-lg border border-amber-100 shadow-md overflow-hidden">
                <div className="flex border-b border-amber-100">
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
                    {activeTab === 'estatisticas' && estatisticas && (
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
                        </div>
                    )}

                    {activeTab === 'animais' && (
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
                                                                    'bg-yellow-100 text-yellow-800'
                                                            }`}>
                                                            {animal.status}
                                                        </span>
                                                    </TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </div>
                            )}
                        </div>
                    )}

                    {activeTab === 'usuarios' && (
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
                    )}
                </div>
            </div>
        </div>
    );
}

export default function FazendasPage() {
    const [fazendas, setFazendas] = useState([]);
    const [editandoFazenda, setEditandoFazenda] = useState(null);
    const [modalEdicaoAberto, setModalEdicaoAberto] = useState(false);
    const [fazendaParaExcluir, setFazendaParaExcluir] = useState(null);
    const [modalExclusaoAberto, setModalExclusaoAberto] = useState(false);
    const [fazendaSelecionada, setFazendaSelecionada] = useState(null);
    const [loading, setLoading] = useState(true);
    const [loadingExclusao, setLoadingExclusao] = useState(false);
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

    if (loading) {
        return (
            <MainLayout title="Fazendas" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="flex justify-center items-center h-screen">
                    <div className="text-lg font-poppins text-[#4e2e13] animate-pulse">Carregando...</div>
                </div>
            </MainLayout>
        );
    }

    return (
        <>
            <Helmet>
                <title>Moovox | Fazendas</title>
                <meta name='description' content='Gerenciamento de Fazendas' />
            </Helmet>
            <MainLayout title="Fazendas" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="mt-6 md:mt-8 lg:mt-10">
                    <Card>
                        <CardHeader>
                            <div className="flex items-center">
                                <Building2 className="w-6 h-6 mr-2 text-[#a97c50]" />
                                <CardTitle>Gerenciamento de Fazendas</CardTitle>
                            </div>
                            <CardDescription>
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
                                    <div className="mb-6">
                                        <ModalCriacaoFazenda onSuccess={carregarFazendas} />
                                    </div>

                                    {fazendas.length === 0 ? (
                                        <div className="text-center py-6 bg-amber-50 border border-amber-200 rounded-lg">
                                            <Building2 className="w-10 h-10 mx-auto text-amber-300 mb-2" />
                                            <p className="text-amber-800">Nenhuma fazenda cadastrada</p>
                                            <p className="text-amber-600 text-sm mt-1">Clique em "Nova Fazenda" para cadastrar</p>
                                        </div>
                                    ) : (
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
                                                                        <Pencil className="h-3 w-3" />
                                                                        <span>Editar</span>
                                                                    </Button>

                                                                    <Button
                                                                        variant="outline"
                                                                        size="sm"
                                                                        className="flex items-center space-x-1 bg-green-50 hover:bg-green-100 border-green-300 text-green-700"
                                                                        onClick={() => handleSelecionarFazenda(fazenda)}
                                                                    >
                                                                        <Check className="h-3 w-3" />
                                                                        <span>Selecionar</span>
                                                                    </Button>

                                                                    <Button
                                                                        variant="destructive"
                                                                        size="sm"
                                                                        className="flex items-center space-x-1"
                                                                        onClick={() => handleAbrirExclusao(fazenda)}
                                                                    >
                                                                        <Trash2 className="h-3 w-3" />
                                                                        <span>Excluir</span>
                                                                    </Button>
                                                                </div>
                                                            </TableCell>
                                                        </TableRow>
                                                    ))}
                                                </TableBody>
                                            </Table>
                                        </div>
                                    )}
                                </>
                            )}

                            {/* Modal de Edição */}
                            <ModalEdicaoFazenda
                                fazenda={editandoFazenda}
                                open={modalEdicaoAberto}
                                onOpenChange={setModalEdicaoAberto}
                                onSuccess={carregarFazendas}
                            />

                            {/* Modal de Confirmação de Exclusão */}
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