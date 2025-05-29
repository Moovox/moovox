import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { Pencil, Trash2, Loader2 } from 'lucide-react';
import ModalCadastroUsuario from './ModalCadastroUsuario';

const tipos = [
    { value: 'all', label: 'Todos os tipos' },
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Fazendeiro', label: 'Fazendeiro' },
    { value: 'Funcionário', label: 'Funcionário' },
    { value: 'Veterinário', label: 'Veterinário' },
];

function UsuariosTable({ usuarios, loading }) {
    const [busca, setBusca] = useState('');
    const [tipo, setTipo] = useState('all');

    const usuariosFiltrados = usuarios?.filter(u =>
        ((u?.nome?.toLowerCase().includes(busca.toLowerCase()) || 
          u?.email?.toLowerCase().includes(busca.toLowerCase()) || 
          u?.id?.toString().includes(busca))) &&
        (tipo === 'all' || u?.tipo === tipo)
    ) || [];

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2 justify-between">
                <div className="flex flex-col md:flex-row gap-3">
                    <Input
                        placeholder="Buscar por nome, email ou ID..."
                        value={busca}
                        onChange={(e) => setBusca(e.target.value)}
                        className="md:w-64 bg-white/80"
                    />
                    <Select value={tipo} onValueChange={setTipo}>
                        <SelectTrigger className="md:w-48 bg-white/80">
                            <SelectValue placeholder="Filtrar por tipo" />
                        </SelectTrigger>
                        <SelectContent>
                            {tipos.map((t) => (
                                <SelectItem key={t.value} value={t.value}>
                                    {t.label}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <ModalCadastroUsuario />
            </div>

            <div className="rounded-xl border bg-white/80 shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-[#F6E3B3]/60">
                            <TableHead className="w-12">ID</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead className="w-28 text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={5} className="h-24 text-center">
                                    <div className="flex items-center justify-center">
                                        <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                                    </div>
                                </TableCell>
                            </TableRow>
                        ) : usuariosFiltrados.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                                    Nenhum usuário encontrado.
                                </TableCell>
                            </TableRow>
                        ) : (
                            usuariosFiltrados.map((usuario) => (
                                <TableRow key={usuario.id}>
                                    <TableCell>{usuario.id}</TableCell>
                                    <TableCell>{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell>{usuario.tipo}</TableCell>
                                    <TableCell>
                                        <div className="flex justify-center gap-2">
                                            <Button 
                                                size="icon" 
                                                variant="ghost" 
                                                className="text-primary hover:bg-primary/10"
                                                title="Editar"
                                            >
                                                <Pencil className="w-4 h-4" />
                                            </Button>
                                            <Button 
                                                size="icon" 
                                                variant="ghost" 
                                                className="text-destructive hover:bg-destructive/10"
                                                title="Excluir"
                                            >
                                                <Trash2 className="w-4 h-4" />
                                            </Button>
                                        </div>
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

export default UsuariosTable;
