import { useState, useEffect } from 'react';
import { fazendaService } from '../../services/fazendaService';
import { useToast } from '../ui/use-toast';
import FormModal from '../ui/form-modal';
import { Input } from '../ui/input';

/**
 * Modal para edição de fazenda existente
 * @param {Object} props
 * @param {Object} props.fazenda - Dados da fazenda a ser editada
 * @param {boolean} props.open - Estado do modal (aberto/fechado)
 * @param {Function} props.onOpenChange - Função para alterar o estado do modal
 * @param {Function} props.onSuccess - Callback executado após edição bem-sucedida
 */
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

export default ModalEdicaoFazenda; 