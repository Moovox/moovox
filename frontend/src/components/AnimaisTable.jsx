import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import { animaisService } from '../services/animaisService';
import { useToast } from './ui/use-toast';
import ModalCadastroAnimal from './ModalCadastroAnimal';
import ModalEditarAnimal from './ModalEditarAnimal';

const especies = [
    { value: 'all', label: 'Todas as espécies' },
    { value: 'bovino', label: 'Bovino' },
    { value: 'suíno', label: 'Suíno' },
    { value: 'ave', label: 'Ave' },
    { value: 'caprino', label: 'Caprino' },
    { value: 'ovino', label: 'Ovino' },
];

const statusMap = {
    'saudavel': { label: 'Saudável', className: 'text-green-600' },
    'em_tratamento': { label: 'Em Tratamento', className: 'text-yellow-600' },
    'em_recuperacao': { label: 'Em Recuperação', className: 'text-blue-600' },
    'doente': { label: 'Doente', className: 'text-red-600' }
};

function AnimaisTable() {
    const [busca, setBusca] = useState('');
    const [especie, setEspecie] = useState('all');
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(true);
    const [animalParaEditar, setAnimalParaEditar] = useState(null);
    const [modalEditarAberto, setModalEditarAberto] = useState(false);
    const [animalExcluindo, setAnimalExcluindo] = useState(null);
    const { toast } = useToast();

    useEffect(() => {
        carregarAnimais();
    }, []);

    const carregarAnimais = async () => {
        try {
            const data = await animaisService.listarAnimais();
            setAnimais(data);
        } catch (error) {
            console.error('Erro ao carregar animais:', error);
            toast({
                variant: "destructive",
                title: "Erro ao carregar animais",
                description: "Não foi possível carregar a lista de animais. Tente novamente mais tarde."
            });
        } finally {
            setLoading(false);
        }
    };

    const handleExcluir = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este animal?')) {
            setAnimalExcluindo(id);
            try {
                await animaisService.excluirAnimal(id);
                toast({
                    title: "Animal excluído",
                    description: "O animal foi excluído com sucesso.",
                    variant: "success"
                });
                carregarAnimais();
            } catch (error) {
                console.error('Erro ao excluir animal:', error);
                toast({
                    variant: "destructive",
                    title: "Erro ao excluir",
                    description: "Não foi possível excluir o animal. Tente novamente mais tarde."
                });
            } finally {
                setAnimalExcluindo(null);
            }
        }
    };

    const handleEditar = (animal) => {
        setAnimalParaEditar(animal);
        setModalEditarAberto(true);
    };

    const animaisFiltrados = animais.filter(a =>
        ((a.identificacao.toLowerCase().includes(busca.toLowerCase()) || 
          a.nome?.toLowerCase().includes(busca.toLowerCase()) || 
          a.id.toString().includes(busca))) &&
        (especie === 'all' || a.especie.toLowerCase() === especie.toLowerCase())
    );

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2 justify-between">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input
                        placeholder="Pesquisar por identificação ou nome..."
                        value={busca}
                        onChange={e => setBusca(e.target.value)}
                        className="md:w-64 bg-white"
                    />
                    <Select value={especie} onValueChange={setEspecie}>
                        <SelectTrigger className="md:w-48 bg-white">
                            <SelectValue placeholder="Todas as espécies" />
                        </SelectTrigger>
                        <SelectContent>
                            {especies.map(e => (
                                <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <ModalCadastroAnimal onSuccess={carregarAnimais} />
            </div>
            <div className="rounded-xl border bg-white shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-amber-50">
                            <TableHead className="w-12">ID</TableHead>
                            <TableHead>Identificação</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Espécie</TableHead>
                            <TableHead>Data Nasc.</TableHead>
                            <TableHead>Peso (kg)</TableHead>
                            <TableHead>Estado</TableHead>
                            <TableHead className="w-28 text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={8} className="h-24 text-center">
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="h-6 w-6 animate-spin text-amber-700" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : animaisFiltrados.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={8} className="text-center text-muted-foreground py-8">
                                    Nenhum animal encontrado.
                                </TableCell>
                            </TableRow>
                        ) : (
                            animaisFiltrados.map(animal => (
                                <TableRow key={animal.id} className="hover:bg-amber-50/50">
                                    <TableCell>{animal.id}</TableCell>
                                    <TableCell className="font-medium">{animal.identificacao}</TableCell>
                                    <TableCell>{animal.nome || '-'}</TableCell>
                                    <TableCell className="capitalize">{animal.especie}</TableCell>
                                    <TableCell>{new Date(animal.dataNascimento).toLocaleDateString('pt-BR')}</TableCell>
                                    <TableCell>{animal.peso}</TableCell>
                                    <TableCell>
                                        <span className={`font-medium ${statusMap[animal.status]?.className || 'text-gray-600'}`}>
                                            {statusMap[animal.status]?.label || animal.status}
                                        </span>
                                    </TableCell>
                                    <TableCell className="flex gap-2 justify-center">
                                        <Button 
                                            size="icon" 
                                            variant="ghost" 
                                            className="text-amber-700 hover:bg-amber-100 hover:text-amber-800 transition-colors"
                                            onClick={() => handleEditar(animal)}
                                            title="Editar"
                                        >
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button 
                                            size="icon" 
                                            variant="ghost" 
                                            className="text-red-500 hover:bg-red-50 hover:text-red-600 transition-colors"
                                            onClick={() => handleExcluir(animal.id)}
                                            title="Excluir"
                                            disabled={animalExcluindo === animal.id}
                                        >
                                            {animalExcluindo === animal.id ? (
                                                <Loader2 className="h-4 w-4 animate-spin" />
                                            ) : (
                                                <Trash2 className="w-4 h-4" />
                                            )}
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>

            <ModalEditarAnimal 
                animal={animalParaEditar}
                open={modalEditarAberto}
                onOpenChange={setModalEditarAberto}
                onSuccess={carregarAnimais}
            />
        </div>
    );
}

export default AnimaisTable; 