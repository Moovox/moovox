import React, { useState, useEffect } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { Pencil, Trash2, Plus } from 'lucide-react';
import { animaisService } from '../services/animaisService';
import { useToast } from './ui/use-toast';

const especies = [
    { value: 'all', label: 'Todas as espécies' },
    { value: 'bovino', label: 'Bovino' },
    { value: 'suino', label: 'Suíno' },
    { value: 'caprino', label: 'Caprino' },
    { value: 'ovino', label: 'Ovino' },
];

function AnimaisTable() {
    const [busca, setBusca] = useState('');
    const [especie, setEspecie] = useState('all');
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(true);
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
            try {
                await animaisService.excluirAnimal(id);
                toast({
                    variant: "success",
                    title: "Animal excluído",
                    description: "O animal foi excluído com sucesso."
                });
                carregarAnimais();
            } catch (error) {
                console.error('Erro ao excluir animal:', error);
                toast({
                    variant: "destructive",
                    title: "Erro ao excluir",
                    description: "Não foi possível excluir o animal. Tente novamente mais tarde."
                });
            }
        }
    };

    const animaisFiltrados = animais.filter(a =>
        ((a.identificacao.toLowerCase().includes(busca.toLowerCase()) || 
          a.nome?.toLowerCase().includes(busca.toLowerCase()) || 
          a.id.toString().includes(busca))) &&
        (especie === 'all' || a.especie === especie)
    );

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2 justify-between">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input
                        placeholder="Pesquisar por identificação ou nome..."
                        value={busca}
                        onChange={e => setBusca(e.target.value)}
                        className="md:w-64"
                    />
                    <Select value={especie} onValueChange={setEspecie}>
                        <SelectTrigger className="md:w-48">
                            <SelectValue placeholder="Todas as espécies" />
                        </SelectTrigger>
                        <SelectContent>
                            {especies.map(e => (
                                <SelectItem key={e.value} value={e.value}>{e.label}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <Button className="bg-primary hover:bg-primary/90">
                    <Plus className="w-4 h-4 mr-2" />
                    Novo Animal
                </Button>
            </div>
            <div className="rounded-xl border bg-white/80 shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">ID</TableHead>
                            <TableHead>Identificação</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Espécie</TableHead>
                            <TableHead>Data Nasc.</TableHead>
                            <TableHead>Peso (kg)</TableHead>
                            <TableHead className="w-28 text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                                    Carregando...
                                </TableCell>
                            </TableRow>
                        ) : animaisFiltrados.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={7} className="text-center text-muted-foreground py-8">
                                    Nenhum animal encontrado.
                                </TableCell>
                            </TableRow>
                        ) : (
                            animaisFiltrados.map(animal => (
                                <TableRow key={animal.id} className="hover:bg-[#F6E3B3]/60">
                                    <TableCell>{animal.id}</TableCell>
                                    <TableCell className="font-medium">{animal.identificacao}</TableCell>
                                    <TableCell>{animal.nome || '-'}</TableCell>
                                    <TableCell className="capitalize">{animal.especie}</TableCell>
                                    <TableCell>{new Date(animal.dataNascimento).toLocaleDateString()}</TableCell>
                                    <TableCell>{animal.peso}</TableCell>
                                    <TableCell className="flex gap-2 justify-center">
                                        <Button size="icon" variant="ghost" className="text-primary hover:bg-primary/10">
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button 
                                            size="icon" 
                                            variant="ghost" 
                                            className="text-destructive hover:bg-destructive/10"
                                            onClick={() => handleExcluir(animal.id)}
                                        >
                                            <Trash2 className="w-4 h-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default AnimaisTable; 