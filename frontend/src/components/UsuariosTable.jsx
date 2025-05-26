import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { Pencil, Trash2 } from 'lucide-react';

const tipos = [
    { value: 'all', label: 'Todos os tipos' },
    { value: 'fazendeiro', label: 'Fazendeiro' },
    { value: 'veterinario', label: 'Veterinário' },
    { value: 'funcionario', label: 'Funcionário' },
    { value: 'admin', label: 'Admin' },
];

function UsuariosTable({ usuarios }) {
    const [busca, setBusca] = useState('');
    const [tipo, setTipo] = useState('all');

    const usuariosFiltrados = usuarios.filter(u =>
        ((u.nome.toLowerCase().includes(busca.toLowerCase()) || u.email.toLowerCase().includes(busca.toLowerCase()) || u.id.toString().includes(busca))) &&
        (tipo === 'all' || u.tipo === tipo)
    );

    return (
        <div className="flex flex-col gap-6 p-4">
            <div className="flex flex-col md:flex-row gap-3 mb-2">
                <Input
                    placeholder="Pesquisar por nome ou email..."
                    value={busca}
                    onChange={e => setBusca(e.target.value)}
                    className="md:w-1/3"
                />
                <Select value={tipo} onValueChange={setTipo}>
                    <SelectTrigger className="md:w-48">
                        <SelectValue placeholder="Todos os tipos" />
                    </SelectTrigger>
                    <SelectContent>
                        {tipos.map(t => (
                            <SelectItem key={t.value} value={t.value}>{t.label}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>
            <div className="rounded-xl border bg-white/80 shadow-sm overflow-x-auto">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead className="w-12">ID</TableHead>
                            <TableHead>Nome</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead className="w-28 text-center">Ações</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {usuariosFiltrados.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={5} className="text-center text-muted-foreground py-8">Nenhum usuário encontrado.</TableCell>
                            </TableRow>
                        ) : (
                            usuariosFiltrados.map(usuario => (
                                <TableRow key={usuario.id} className="hover:bg-[#F6E3B3]/60">
                                    <TableCell>{usuario.id}</TableCell>
                                    <TableCell className="font-medium">{usuario.nome}</TableCell>
                                    <TableCell>{usuario.email}</TableCell>
                                    <TableCell className="capitalize">{usuario.tipo}</TableCell>
                                    <TableCell className="flex gap-2 justify-center">
                                        <Button size="icon" variant="ghost" className="text-primary hover:bg-primary/10">
                                            <Pencil className="w-4 h-4" />
                                        </Button>
                                        <Button size="icon" variant="ghost" className="text-destructive hover:bg-destructive/10">
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

export default UsuariosTable;
