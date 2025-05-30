import React from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';
import { useToast } from './ui/use-toast';
import { animaisService } from '../services/animaisService';

const especies = [
    { value: 'bovino', label: 'Bovino' },
    { value: 'suíno', label: 'Suíno' },
    { value: 'ave', label: 'Ave' },
    { value: 'caprino', label: 'Caprino' },
    { value: 'ovino', label: 'Ovino' },
];

const status = [
    { value: 'saudavel', label: 'Saudável' },
    { value: 'em_tratamento', label: 'Em Tratamento' },
    { value: 'em_recuperacao', label: 'Em Recuperação' },
    { value: 'doente', label: 'Doente' },
];

function ModalCadastroAnimal({ onSuccess }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const { toast } = useToast();
    const [formData, setFormData] = React.useState({
        identificacao: '',
        nome: '',
        especie: '',
        raca: '',
        dataNascimento: '',
        peso: '',
        saude: 'saudavel'
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validação básica
        if (!formData.identificacao || !formData.especie || !formData.dataNascimento || !formData.peso) {
            toast({
                title: "Campos obrigatórios",
                description: "Por favor, preencha todos os campos obrigatórios",
                variant: "destructive"
            });
            return;
        }
        
        setLoading(true);
        try {
            const farmId = parseInt(localStorage.getItem('farmId'), 10);
            await animaisService.cadastrarAnimal({
                identificacao: formData.identificacao,
                nome: formData.nome,
                especieId: especies.findIndex(e => e.value === formData.especie) + 1,
                racaId: 1, // Temporário até implementar seleção de raça
                dataNascimento: formData.dataNascimento,
                peso: parseFloat(formData.peso),
                status: formData.saude,
                farmId
            });
            
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
            toast({
                title: "Erro",
                description: error.message || "Ocorreu um erro ao cadastrar o animal",
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
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
            <div className="space-y-4">
                <div className="space-y-2">
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
                <div className="space-y-2">
                    <label className="text-sm font-medium text-amber-900">Nome (opcional)</label>
                    <Input
                        name="nome"
                        value={formData.nome}
                        onChange={handleChange}
                        placeholder="Digite o nome do animal"
                        className="border-amber-200"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-amber-900">Espécie</label>
                    <Select
                        value={formData.especie}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, especie: value }))}
                        required
                    >
                        <SelectTrigger className="border-amber-200">
                            <SelectValue placeholder="Selecione a espécie" />
                        </SelectTrigger>
                        <SelectContent>
                            {especies.map((especie) => (
                                <SelectItem key={especie.value} value={especie.value}>
                                    {especie.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-medium text-amber-900">Raça</label>
                    <Input
                        name="raca"
                        value={formData.raca}
                        onChange={handleChange}
                        placeholder="Digite a raça"
                        className="border-amber-200"
                        required
                    />
                </div>
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
                    <label className="text-sm font-medium text-amber-900">Estado de Saúde</label>
                    <Select
                        value={formData.saude}
                        onValueChange={(value) => setFormData(prev => ({ ...prev, saude: value }))}
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