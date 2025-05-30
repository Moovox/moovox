import { useState } from 'react';
import { fazendaService } from '../../services/fazendaService';
import { useToast } from '../ui/use-toast';
import FormModal from '../ui/form-modal';
import { Input } from '../ui/input';

/**
 * Modal para criação de nova fazenda
 * @param {Object} props
 * @param {Function} props.onSuccess - Callback executado após criação bem-sucedida
 */
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

export default ModalCriacaoFazenda; 