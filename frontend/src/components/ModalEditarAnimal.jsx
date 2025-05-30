import React, { useEffect } from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';
import { animaisService } from '../services/animaisService';
import { useToast } from './ui/use-toast';

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

function ModalEditarAnimal({ animal, open, onOpenChange, onSuccess }) {
    const { toast } = useToast();
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nome: '',
        especie: '',
        raca: '',
        dataNascimento: '',
        peso: '',
        status: 'saudavel'
    });

    useEffect(() => {
        if (animal && open) {
            setFormData({
                nome: animal.nome || '',
                especie: animal.especie.toLowerCase(),
                raca: animal.raca || '',
                dataNascimento: new Date(animal.dataNascimento).toISOString().split('T')[0],
                peso: animal.peso.toString(),
                status: animal.status || 'saudavel'
            });
        }
    }, [animal, open]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        // Validações básicas
        if (!formData.especie || !formData.dataNascimento || !formData.peso) {
            toast({
                title: "Campos obrigatórios",
                description: "Por favor, preencha todos os campos obrigatórios",
                variant: "destructive"
            });
            return;
        }
        
        setLoading(true);
        try {
            await animaisService.atualizarAnimal(animal.id, {
                nome: formData.nome,
                especieId: especies.findIndex(e => e.value === formData.especie) + 1,
                racaId: 1, // TODO: Implementar seleção de raça
                dataNascimento: formData.dataNascimento,
                peso: parseFloat(formData.peso),
                status: formData.status
            });

            toast({
                title: "Sucesso",
                description: "Animal atualizado com sucesso!",
                variant: "success"
            });

            if (onSuccess) {
                await onSuccess();
            }
            onOpenChange(false);
        } catch (error) {
            console.error('Erro ao atualizar animal:', error);
            toast({
                variant: "destructive",
                title: "Erro ao atualizar",
                description: error.message || "Não foi possível atualizar o animal. Tente novamente mais tarde."
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Editar Animal"
            open={open}
            onOpenChange={onOpenChange}
            onSubmit={handleSubmit}
            submitText="Salvar"
            loading={loading}
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Identificação</label>
                    <Input
                        value={animal?.identificacao || ''}
                        disabled
                        className="bg-gray-100 border-amber-200"
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
                <div className="space-y-1.5">
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

export default ModalEditarAnimal; 