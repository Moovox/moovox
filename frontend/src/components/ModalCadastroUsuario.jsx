import React from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';

const tipos = [
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Fazendeiro', label: 'Fazendeiro' },
    { value: 'Funcionário', label: 'Funcionário' },
    { value: 'Veterinário', label: 'Veterinário' },
];

function ModalCadastroUsuario() {
    const [open, setOpen] = React.useState(false);
    const [formData, setFormData] = React.useState({
        nome: '',
        email: '',
        tipo: '',
        senha: '',
        confirmarSenha: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implementar a lógica de cadastro
        console.log('Dados do formulário:', formData);
        setOpen(false);
    };

    const formFields = (
        <>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Nome</label>
                <Input
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    placeholder="Digite o nome completo"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Email</label>
                <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Digite o email"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Tipo de Usuário</label>
                <Select
                    value={formData.tipo}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, tipo: value }))}
                    required
                >
                    <SelectTrigger className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0">
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
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Senha</label>
                <Input
                    name="senha"
                    type="password"
                    value={formData.senha}
                    onChange={handleChange}
                    placeholder="Digite a senha"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Confirmar Senha</label>
                <Input
                    name="confirmarSenha"
                    type="password"
                    value={formData.confirmarSenha}
                    onChange={handleChange}
                    placeholder="Confirme a senha"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
                />
            </div>
        </>
    );

    return (
        <FormModal
            title="Cadastrar Novo Usuário"
            triggerText="Novo Usuário"
            open={open}
            onOpenChange={setOpen}
            onSubmit={handleSubmit}
        >
            {formFields}
        </FormModal>
    );
}

export default ModalCadastroUsuario; 