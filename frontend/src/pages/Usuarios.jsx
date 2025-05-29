import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import UsuariosTable from '../components/UsuariosTable';
import { userService } from '../services/userService';
import { useToast } from '../components/ui/use-toast';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const { toast } = useToast();

    const carregarUsuarios = async () => {
        try {
            setLoading(true);
            const response = await userService.getAllUsers();
            
            if (!response.data) {
                throw new Error('Dados não encontrados');
            }

            console.log('Dados recebidos na página:', response.data);
            
            // Garante que os dados são um array
            const usuariosArray = Array.isArray(response.data) ? response.data : [];
            setUsuarios(usuariosArray);
            
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            let mensagem = "Não foi possível carregar a lista de usuários.";
            
            if (error.response?.status === 401) {
                mensagem = "Sessão expirada. Por favor, faça login novamente.";
            } else if (error.message) {
                mensagem = error.message;
            }
            
            toast({
                variant: "destructive",
                title: "Erro",
                description: mensagem
            });
            setUsuarios([]);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        carregarUsuarios();
    }, []);

    const handleUserCreated = () => {
        carregarUsuarios();
    };

    return (
        <>
            <Helmet>
                <title>Moovox | Usuários</title>
                <meta name='description' content='Gestão de Usuários' />
            </Helmet>
            <MainLayout title="Usuários" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="mt-6 md:mt-8 lg:mt-10" />
                <UsuariosTable 
                    usuarios={usuarios} 
                    loading={loading} 
                    onUserCreated={handleUserCreated}
                />
            </MainLayout>
        </>
    );
}

export default Usuarios;
