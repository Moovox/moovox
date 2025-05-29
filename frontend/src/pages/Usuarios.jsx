import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import UsuariosTable from '../components/UsuariosTable';
import { usuariosService } from '../services/usuariosService';
import { useToast } from '../components/ui/use-toast';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    useEffect(() => {
        const carregarUsuarios = async () => {
            try {
                const response = await usuariosService.listarUsuarios();
                const usuariosFormatados = response.data.map(user => ({
                    id: user.id,
                    nome: user.name,
                    email: user.email,
                    tipo: user.role
                }));
                setUsuarios(usuariosFormatados);
            } catch (error) {
                console.error('Erro ao carregar usuários:', error);
                toast({
                    variant: "destructive",
                    title: "Erro",
                    description: "Não foi possível carregar a lista de usuários."
                });
            } finally {
                setLoading(false);
            }
        };

        carregarUsuarios();
    }, []);

    return (
        <>
            <Helmet>
                <title>Moovox | Usuários</title>
                <meta name='description' content='Gestão de Usuários' />
            </Helmet>
            <MainLayout title="Usuários">
                <UsuariosTable usuarios={usuarios} loading={loading} />
            </MainLayout>
        </>
    );
}

export default Usuarios;
