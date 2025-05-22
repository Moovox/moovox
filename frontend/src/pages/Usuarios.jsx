import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/MainLayout';

function Usuarios() {
    return (
        <>
            <Helmet>
                <title>Moovox | Usuários</title>
                <meta name='description' content='Gestão de Usuários' />
            </Helmet>
            <MainLayout title="Usuários">
                <p className="text-gray-800">Página de gestão de usuários.</p>
            </MainLayout>
        </>
    );
}

export default Usuarios;
