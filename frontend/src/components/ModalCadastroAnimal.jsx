import React from 'react';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import FormModal from './ui/form-modal';

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

function ModalCadastroAnimal() {
    const [open, setOpen] = React.useState(false);
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

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implementar a lógica de cadastro
        console.log('Dados do formulário:', formData);
        setOpen(false);
    };

    const formFields = (
        <>
            <div className="space-y-2">
                <label className="text-sm font-medium text-[#4e2e13]">Identificação</label>
                <Input
                    name="identificacao"
                    value={formData.identificacao}
                    onChange={handleChange}
                    placeholder="Digite a identificação"
                    className="border-[#e5e0d8] focus:border-[#4e2e13] focus:ring-0"
                    required
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
                    value={formData.saude}
                    onValueChange={(value) => setFormData(prev => ({ ...prev, saude: value }))}
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
            title="Cadastrar Novo Animal"
            triggerText="Novo Animal"
            open={open}
            onOpenChange={setOpen}
            onSubmit={handleSubmit}
        >
            {formFields}
        </FormModal>
    );
}

export default ModalCadastroAnimal; 