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
            const result = await userService.getAllUsers();
            
            // Se houver erro no resultado, tratamos aqui
            if (result.error) {
                throw result.error;
            }
            
            // Garantindo que temos um array, mesmo vazio
            setUsuarios(result.data || []);
            
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
            // Só mostramos o toast para erros reais, não para listas vazias
            if (error.message && !error.message.includes('Nenhum') && !error.message.includes('não encontrado')) {
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
            }
            
            // Se der erro, garantimos que a lista é inicializada como vazia
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
