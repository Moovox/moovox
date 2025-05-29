import React, { useState } from 'react';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from './ui/table';
import { Input } from './ui/input';
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from './ui/select';
import { Button } from './ui/button';
import { Pencil, Trash2, Loader2, AlertCircle } from 'lucide-react';
import ModalCadastroUsuario from './ModalCadastroUsuario';
import ModalEditarUsuario from './ModalEditarUsuario';
import { userService } from '../services/userService';
import { useToast } from './ui/use-toast';
import { Alert, AlertDescription } from './ui/alert';

const tipos = [
    { value: 'all', label: 'Todos os tipos' },
    { value: 'Administrador', label: 'Administrador' },
    { value: 'Fazendeiro', label: 'Fazendeiro' },
    { value: 'Funcionário', label: 'Funcionário' },
    { value: 'Veterinário', label: 'Veterinário' },
];

function UsuariosTable({ usuarios, loading, onUserCreated, error }) {
    const [busca, setBusca] = useState('');
    const [tipo, setTipo] = useState('all');
    const [loadingDelete, setLoadingDelete] = useState(null);
    const { toast } = useToast();

    const usuariosFiltrados = usuarios?.filter(u =>
        ((u?.nome?.toLowerCase().includes(busca.toLowerCase()) || 
          u?.email?.toLowerCase().includes(busca.toLowerCase()) || 
          u?.id?.toString().includes(busca))) &&
        (tipo === 'all' || u?.tipo === tipo)
    ) || [];

    const handleDelete = async (id, nome) => {
        if (!window.confirm(`Tem certeza que deseja excluir o usuário "${nome}"?`)) {
            return;
        }

        setLoadingDelete(id);
        try {
            await userService.deleteUser(id);
            toast({
                title: "Sucesso",
                description: "Usuário excluído com sucesso!",
                variant: "default"
            });
            if (onUserCreated) {
                await onUserCreated();
            }
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
            toast({
                title: "Erro ao excluir usuário",
                description: error.message || 'Ocorreu um erro ao excluir o usuário',
                variant: "destructive"
            });
        } finally {
            setLoadingDelete(null);
        }
    };

    const renderTableContent = () => {
        if (loading) {
            return (
                <TableRow>
                    <TableCell colSpan={5} className="h-24 text-center">
                        <div className="flex items-center justify-center">
                            <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                    </TableCell>
                </TableRow>
            );
        }

        if (error) {
            return (
                <TableRow>
                    <TableCell colSpan={5} className="h-24">
                        <Alert variant="destructive" className="flex items-center gap-2">
                            <AlertCircle className="h-4 w-4" />
                            <AlertDescription>
                                {error.message || 'Erro ao carregar usuários. Por favor, tente novamente.'}
                            </AlertDescription>
                        </Alert>
                    </TableCell>
                </TableRow>
            );
        }

        if (usuariosFiltrados.length === 0) {
            return (
                <TableRow>
                    <TableCell colSpan={5} className="text-center text-muted-foreground py-8">
                        Nenhum usuário encontrado.
                    </TableCell>
                </TableRow>
            );
        }

        return usuariosFiltrados.map((usuario) => (
            <TableRow key={usuario.id}>
                <TableCell>{usuario.id}</TableCell>
                <TableCell>{usuario.nome}</TableCell>
                <TableCell>{usuario.email}</TableCell>
                <TableCell>{usuario.tipo}</TableCell>
                <TableCell>
                    <div className="flex justify-center gap-2">
                        <ModalEditarUsuario
                            usuario={usuario}
                            onSuccess={onUserCreated}
                        />
                        <Button 
                            size="icon" 
                            variant="ghost" 
                            className="text-destructive hover:bg-destructive/10"
                            title="Excluir"
                            onClick={() => handleDelete(usuario.id, usuario.nome)}
                            disabled={loadingDelete === usuario.id}
                        >
                            {loadingDelete === usuario.id ? (
                                <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                                <Trash2 className="w-4 h-4" />
                            )}
                        </Button>
                    </div>
                </TableCell>
            </TableRow>
        ));
    };

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
                <ModalCadastroUsuario onSuccess={onUserCreated} />
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
                        {renderTableContent()}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}

export default UsuariosTable;
