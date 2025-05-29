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
                title: "Animal atualizado",
                description: "As informações do animal foram atualizadas com sucesso."
            });

            onSuccess();
            onOpenChange(false);
        } catch (error) {
            console.error('Erro ao atualizar animal:', error);
            toast({
                variant: "destructive",
                title: "Erro ao atualizar",
                description: error.message || "Não foi possível atualizar o animal. Tente novamente mais tarde."
            });
        }
    };

    const formFields = (
        <>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Identificação</label>
                <Input
                    value={animal?.identificacao || ''}
                    disabled
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0 bg-gray-100"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Nome (opcional)</label>
                <Input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite o nome do animal"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Espécie</label>
                <Select
                    value={formData.especie}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, especie: value }))}
                    required
                >
                    <SelectTrigger className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0">
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
                <label className="text-sm font-medium text-[#4e2e13]">Raça</label>
                <Input
                    name="raca"
                    value={formData.raca}
                    onChange={handleChange}
                    placeholder="Digite a raça"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Data de Nascimento</label>
                <Input
                    name="dataNascimento"
                    type="date"
                    value={formData.dataNascimento}
                    onChange={handleChange}
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Peso (kg)</label>
                <Input
                    name="peso"
                    type="number"
                    step="0.1"
                    value={formData.peso}
                    onChange={handleChange}
                    placeholder="Digite o peso"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Estado de Saúde</label>
                <Select
                    value={formData.status}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, status: value }))}
                    required
                >
                    <SelectTrigger className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0">
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
        </>
    );

    return (
        <FormModal
            title="Editar Animal"
            open={open}
            onOpenChange={onOpenChange}
            onSubmit={handleSubmit}
            showTrigger={false}
        >
            {formFields}
        </FormModal>
    );
}

export default ModalEditarAnimal; 