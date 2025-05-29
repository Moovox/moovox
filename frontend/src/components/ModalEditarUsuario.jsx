import React from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';
import { userService } from '../services/userService';
import { useToast } from './ui/use-toast';
import { Button } from './ui/button';
import { Pencil } from 'lucide-react';

const tipoToRole = {
    'Administrador': 'ADMIN',
    'Fazendeiro': 'FARMER',
    'Funcionário': 'FARMHAND',
    'Veterinário': 'VETERINARY'
};

const tipos = [
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Fazendeiro', label: 'Fazendeiro' },
    { value: 'Funcionário', label: 'Funcionário' },
    { value: 'Veterinário', label: 'Veterinário' },
];

function ModalEditarUsuario({ usuario, onSuccess }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nome: usuario?.nome || '',
        email: usuario?.email || '',
        tipo: usuario?.tipo || '',
    });
    const [errors, setErrors] = React.useState({});
    const { toast } = useToast();

    React.useEffect(() => {
        if (usuario) {
            setFormData({
                nome: usuario.nome || '',
                email: usuario.email || '',
                tipo: usuario.tipo || '',
            });
        }
    }, [usuario]);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.nome?.trim()) {
            newErrors.nome = 'Nome é obrigatório';
        }

        if (!formData.email?.trim()) {
            newErrors.email = 'Email é obrigatório';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email inválido';
        }

        if (!formData.tipo) {
            newErrors.tipo = 'Tipo de usuário é obrigatório';
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

    const handleSelectChange = (value) => {
        setFormData(prev => ({
            ...prev,
            tipo: value
        }));
        if (errors.tipo) {
            setErrors(prev => ({
                ...prev,
                tipo: ''
            }));
        }
    };

    const resetForm = () => {
        if (usuario) {
            setFormData({
                nome: usuario.nome || '',
                email: usuario.email || '',
                tipo: usuario.tipo || '',
            });
        }
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
            const farmId = parseInt(localStorage.getItem('farmId'), 10);
            if (!farmId || isNaN(farmId)) {
                throw new Error('ID da fazenda não encontrado ou inválido');
            }

            const userData = {
                name: formData.nome,
                email: formData.email,
                role: tipoToRole[formData.tipo],
                farmId
            };

            await userService.updateUser(usuario.id, userData);
            
            toast({
                title: "Sucesso",
                description: "Usuário atualizado com sucesso!",
                variant: "default"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Erro completo:', error);
            
            toast({
                title: "Erro ao atualizar usuário",
                description: error.message || 'Ocorreu um erro ao atualizar o usuário',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button 
                size="icon" 
                variant="ghost" 
                className="text-primary hover:bg-primary/10"
                title="Editar"
                onClick={() => setOpen(true)}
            >
                <Pencil className="w-4 h-4" />
            </Button>

            <FormModal
                title="Editar Usuário"
                open={open}
                onOpenChange={handleOpenChange}
                onSubmit={handleSubmit}
                loading={loading}
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#4e2e13]">Nome</label>
                        <Input
                            name="nome"
                            value={formData.nome || ''}
                            onChange={handleChange}
                            placeholder="Digite o nome completo"
                            className={`border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0 ${errors.nome ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.nome && <span className="text-xs text-red-500">{errors.nome}</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#4e2e13]">Email</label>
                        <Input
                            name="email"
                            type="email"
                            value={formData.email || ''}
                            onChange={handleChange}
                            placeholder="Digite o email"
                            className={`border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0 ${errors.email ? 'border-red-500' : ''}`}
                            required
                        />
                        {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-[#4e2e13]">Tipo de Usuário</label>
                        <Select
                            value={formData.tipo || ''}
                            onValueChange={handleSelectChange}
                            required
                        >
                            <SelectTrigger className={`border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0 ${errors.tipo ? 'border-red-500' : ''}`}>
                                <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                {tipos.map((tipo) => (
                                    <SelectItem key={tipo.value} value={tipo.value}>
                                        {tipo.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.tipo && <span className="text-xs text-red-500">{errors.tipo}</span>}
                    </div>
                </div>
            </FormModal>
        </>
    );
}

export default ModalEditarUsuario; 