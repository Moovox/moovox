import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';

function MeuPerfil() {
    return (
        <>
            <Helmet>
                <title>Moovox | Meu Perfil</title>
                <meta name='description' content='Perfil do Usuário' />
            </Helmet>
            <MainLayout title="Meu Perfil">
                <p className="text-gray-800">Página do perfil do usuário.</p>
            </MainLayout>
        </>
    );
}

export default MeuPerfil;
