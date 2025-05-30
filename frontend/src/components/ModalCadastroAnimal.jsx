import React, { useEffect } from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';
import { useToast } from './ui/use-toast';
import { animaisService } from '../services/animaisService';
import { fazendaService } from '../services/fazendaService';
import { useNavigate } from 'react-router-dom';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { AlertCircle, Building2, RefreshCw } from 'lucide-react';
import { Button } from './ui/button';
import { useAuth } from './AuthContext';

const status = [
    { value: 'saudavel', label: 'Saudável' },
    { value: 'em_tratamento', label: 'Em Tratamento' },
    { value: 'em_recuperacao', label: 'Em Recuperação' },
    { value: 'doente', label: 'Doente' },
];

function ModalCadastroAnimal({ onSuccess }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [especies, setEspecies] = React.useState([]);
    const [racas, setRacas] = React.useState([]);
    const { toast } = useToast();
    const navigate = useNavigate();
    const { user } = useAuth();
    const [farmId, setFarmId] = React.useState(null);
    const [farmInfo, setFarmInfo] = React.useState(null);
    const [farmLoading, setFarmLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        identificacao: '',
        nome: '',
        especieId: '',
        racaId: '',
        dataNascimento: '',
        peso: '',
        status: 'saudavel'
    });

    // Função para buscar a fazenda atual
    const buscarFazendaAtual = async () => {
        setFarmLoading(true);
        try {
            const resultado = await fazendaService.verificarFazendaSelecionada();
            
            if (resultado.valido) {
                setFarmInfo(resultado.fazenda);
                setFarmId(resultado.fazenda.id.toString());
                console.log('Fazenda encontrada:', resultado.fazenda);
            } else {
                // Se não for válida, limpar o estado e mostrar mensagem
                setFarmId(null);
                setFarmInfo(null);
                toast({
                    title: "Fazenda não disponível",
                    description: resultado.mensagem,
                    variant: "destructive"
                });
            }
        } catch (error) {
            console.error('Erro ao buscar fazenda:', error);
            setFarmId(null);
            setFarmInfo(null);
            toast({
                title: "Erro ao buscar fazenda",
                description: "Não foi possível verificar a fazenda selecionada. Por favor, selecione outra.",
                variant: "destructive"
            });
        } finally {
            setFarmLoading(false);
        }
    };

    useEffect(() => {
        // Carregar espécies ao montar o componente
        setEspecies(animaisService.getEspecies());
        
        // Verificar se existe uma fazenda selecionada
        buscarFazendaAtual();
    }, []);

    useEffect(() => {
        // Atualizar raças quando a espécie mudar
        if (formData.especieId) {
            setRacas(animaisService.getRacasPorEspecie(formData.especieId));
        } else {
            setRacas([]);
        }
    }, [formData.especieId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.identificacao || !formData.especieId || !formData.racaId || !formData.dataNascimento || !formData.peso || !formData.status) {
            toast({
                title: "Campos incompletos",
                description: "Por favor, preencha todos os campos obrigatórios",
                variant: "destructive"
            });
            return;
        }
        
        if (!farmId) {
            toast({
                title: "Fazenda não selecionada",
                description: "Por favor, selecione uma fazenda antes de cadastrar um animal",
                variant: "destructive"
            });
            if (user?.role === 'ADMIN') {
                // Sugerir ir para a página de fazendas para selecionar uma
                const shouldGoToFazendas = window.confirm("Deseja ir para a página de gerenciamento de fazendas para selecionar uma?");
                if (shouldGoToFazendas) {
                    navigate('/fazendas');
                }
            }
            return;
        }
        
        setLoading(true);
        try {
            // Garantir que todos os dados estão no formato correto
            const animalData = {
                nome: formData.nome || formData.identificacao, // Usar identificação como nome se nome estiver vazio
                especieId: parseInt(formData.especieId),
                racaId: parseInt(formData.racaId),
                dataNascimento: formData.dataNascimento,
                peso: parseFloat(formData.peso),
                status: formData.status,
                farmId: parseInt(farmId)
            };
            
            console.log('Dados do animal a serem enviados:', animalData);
            
            await animaisService.criarAnimal(animalData);
            
            toast({
                title: "Sucesso",
                description: "Animal cadastrado com sucesso!",
                variant: "success"
            });
            
            setOpen(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Erro ao cadastrar animal:', error);
            const errorMessage = error.message || "Ocorreu um erro ao cadastrar o animal";
            
            // Verificar se é um erro de conexão
            if (errorMessage.includes('conectar') || 
                errorMessage.includes('conexão') || 
                errorMessage.includes('connection') || 
                errorMessage.includes('network') ||
                error.code === 'ERR_NETWORK') {
                toast({
                    title: "Erro de conexão",
                    description: "Não foi possível conectar ao servidor. Verifique sua conexão de internet e tente novamente.",
                    variant: "destructive"
                });
                setLoading(false);
                return;
            }
            
            // Se o erro estiver relacionado à fazenda, dar opções adicionais
            if (errorMessage.includes('fazenda') || 
               (error.response?.data?.code === 'FARM_ERROR')) {
                toast({
                    title: "Erro na seleção de fazenda",
                    description: errorMessage,
                    variant: "destructive",
                    action: user?.role === 'ADMIN' ? (
                        <Button 
                            variant="outline" 
                            size="sm" 
                            onClick={handleNavigateToFazendas}
                        >
                            Gerenciar Fazendas
                        </Button>
                    ) : undefined
                });
                
                // Atualizar farmId no localStorage
                localStorage.removeItem('farmId');
                setFarmId(null);
            } else {
                toast({
                    title: "Erro",
                    description: errorMessage,
                    variant: "destructive"
                });
            }
        } finally {
            setLoading(false);
        }
    };

    const handleNavigateToFazendas = () => {
        setOpen(false);
        navigate('/fazendas');
    };

    return (
        <FormModal
            title="Cadastrar Novo Animal"
            triggerText="Novo Animal"
            open={open}
            onOpenChange={setOpen}
            onSubmit={handleSubmit}
            loading={loading}
        >
            {!farmId ? (
                <Alert variant="destructive" className="mb-4">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Atenção!</AlertTitle>
                    <AlertDescription>
                        <p>O ID da fazenda é obrigatório para criar um animal.</p>
                        {user?.role === 'ADMIN' ? (
                            <div className="mt-2">
                                <Button 
                                    variant="outline" 
                                    size="sm" 
                                    className="flex items-center gap-2"
                                    onClick={handleNavigateToFazendas}
                                >
                                    <Building2 className="h-4 w-4" />
                                    Ir para gerenciamento de fazendas
                                </Button>
                            </div>
                        ) : (
                            <p className="mt-2 text-sm">
                                Contate um administrador para selecionar uma fazenda para você.
                            </p>
                        )}
                    </AlertDescription>
                </Alert>
            ) : (
                <Alert variant="info" className="mb-4 bg-amber-50 border-amber-200">
                    <Building2 className="h-4 w-4 text-amber-800" />
                    <AlertTitle className="text-amber-800">Fazenda selecionada</AlertTitle>
                    <AlertDescription className="text-amber-700">
                        <div className="flex justify-between items-center">
                            <div>
                                <p>{farmInfo?.name || `Fazenda ID: ${farmId}`}</p>
                            </div>
                            <Button 
                                variant="outline" 
                                size="sm" 
                                className="flex items-center gap-2 border-amber-300 text-amber-800 hover:bg-amber-100"
                                onClick={buscarFazendaAtual}
                                disabled={farmLoading}
                            >
                                <RefreshCw className={`h-3 w-3 ${farmLoading ? 'animate-spin' : ''}`} />
                                Atualizar
                            </Button>
                        </div>
                    </AlertDescription>
                </Alert>
            )}

            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Identificação</label>
                    <Input
                        name="identificacao"
                        value={formData.identificacao}
                        onChange={handleChange}
                        placeholder="Digite a identificação"
                        className="border-amber-200"
                        required
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Nome (opcional)</label>
                    <Input
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite o nome do animal"
                        className="border-amber-200"
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Espécie</label>
                    <Select
                        value={formData.especieId}
                        onValueChange={(value) => setFormData(prev => ({ 
                            ...prev, 
                            especieId: value,
                            racaId: '' // Limpar a raça quando trocar a espécie
                        }))}
                        required
                    >
                        <SelectTrigger className="border-amber-200">
                            <SelectValue placeholder="Selecione a espécie" />
                        </SelectTrigger>
                        <SelectContent>
                            {especies.map((especie) => (
                                <SelectItem key={especie.id} value={especie.id.toString()}>
                                    {especie.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Raça</label>
                    <Select
                        value={formData.racaId}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, racaId: value }))}
                        required
                        disabled={!formData.especieId}
                    >
                        <SelectTrigger className="border-amber-200">
                            <SelectValue placeholder={formData.especieId ? "Selecione a raça" : "Selecione uma espécie primeiro"} />
                        </SelectTrigger>
                        <SelectContent>
                            {racas.map((raca) => (
                                <SelectItem key={raca.id} value={raca.id.toString()}>
                                    {raca.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Data de Nascimento</label>
                    <Input
                        name="dataNascimento"
                        type="date"
                        value={formData.dataNascimento}
                        onChange={handleChange}
                        className="border-amber-200"
                        required
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Peso (kg)</label>
                    <Input
                        name="peso"
                        type="number"
                        step="0.1"
                        value={formData.peso}
                        onChange={handleChange}
                        placeholder="Digite o peso"
                        className="border-amber-200"
                        required
                    />
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Estado de Saúde</label>
                    <Select
                        value={formData.status}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                        required
                    >
                        <SelectTrigger className="border-amber-200">
                            <SelectValue placeholder="Selecione o estado de saúde" />
                        </SelectTrigger>
                        <SelectContent>
                            {status.map((estado) => (
                                <SelectItem key={estado.value} value={estado.value}>
                                    {estado.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>
        </FormModal>
    );
}

export default ModalCadastroAnimal; 