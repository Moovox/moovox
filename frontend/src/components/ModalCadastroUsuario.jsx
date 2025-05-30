import React from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';
import { userService } from '../services/userService';
import { useToast } from './ui/use-toast';

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

const initialFormData = {
    nome: '',
    email: '',
    tipo: '',
    senha: '',
    confirmarSenha: ''
};

function ModalCadastroUsuario({ onSuccess }) {
    const [open, setOpen] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [formData, setFormData] = React.useState(initialFormData);
    const [errors, setErrors] = React.useState({});
    const { toast } = useToast();

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

        if (!formData.senha) {
            newErrors.senha = 'Senha é obrigatória';
        } else if (formData.senha.length < 6) {
            newErrors.senha = 'A senha deve ter no mínimo 6 caracteres';
        }

        if (formData.senha !== formData.confirmarSenha) {
            newErrors.confirmarSenha = 'As senhas não coincidem';
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
        // Limpa o erro do campo quando o usuário começa a digitar
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
        setFormData(initialFormData);
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
                password: formData.senha,
                role: tipoToRole[formData.tipo],
                farmId
            };

            const response = await userService.createUser(userData);
            
            toast({
                title: "Sucesso",
                description: "Usuário cadastrado com sucesso!",
                variant: "success"
            });
            
            handleOpenChange(false);
            if (onSuccess) {
                onSuccess();
            }
        } catch (error) {
            console.error('Erro completo:', error);
            
            toast({
                title: "Erro ao cadastrar usuário",
                description: error.message || 'Ocorreu um erro ao cadastrar o usuário',
                variant: "destructive"
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <FormModal
            title="Cadastrar Novo Usuário"
            triggerText="Novo Usuário"
            open={open}
            onOpenChange={handleOpenChange}
            onSubmit={handleSubmit}
            loading={loading}
        >
            <div className="flex flex-col gap-4">
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Nome</label>
                    <Input
                        name="nome"
                        value={formData.nome || ''}
                        onChange={handleChange}
                        placeholder="Digite o nome completo"
                        className={`${errors.nome ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.nome && <span className="text-xs text-red-500">{errors.nome}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Email</label>
                    <Input
                        name="email"
                        type="email"
                        value={formData.email || ''}
                        onChange={handleChange}
                        placeholder="Digite o email"
                        className={`${errors.email ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.email && <span className="text-xs text-red-500">{errors.email}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Tipo de Usuário</label>
                    <Select
                        value={formData.tipo || ''}
                        onValueChange={handleSelectChange}
                        required
                    >
                        <SelectTrigger className={`${errors.tipo ? 'border-red-500' : 'border-amber-200'}`}>
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
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Senha</label>
                    <Input
                        name="senha"
                        type="password"
                        value={formData.senha || ''}
                        onChange={handleChange}
                        placeholder="Digite a senha"
                        className={`${errors.senha ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.senha && <span className="text-xs text-red-500">{errors.senha}</span>}
                </div>
                <div className="space-y-1.5">
                    <label className="text-sm font-medium text-amber-900">Confirmar Senha</label>
                    <Input
                        name="confirmarSenha"
                        type="password"
                        value={formData.confirmarSenha || ''}
                        onChange={handleChange}
                        placeholder="Confirme a senha"
                        className={`${errors.confirmarSenha ? 'border-red-500' : 'border-amber-200'}`}
                        required
                    />
                    {errors.confirmarSenha && <span className="text-xs text-red-500">{errors.confirmarSenha}</span>}
                </div>
            </div>
        </FormModal>
    );
}

export default ModalCadastroUsuario; 