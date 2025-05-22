import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';

function Aplicacoes() {
    return (
        <>
            <Helmet>
                <title>Moovox | Aplicações</title>
                <meta name='description' content='Gestão de Aplicações' />
            </Helmet>
            <MainLayout title="Aplicações">
                <p className="text-gray-800">Página de gestão de aplicações.</p>
            </MainLayout>
        </>
    );
}

export default Aplicacoes;
