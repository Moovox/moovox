import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/MainLayout';

function Vacinas() {
    return (
        <>
            <Helmet>
                <title>Moovox | Vacinas</title>
                <meta name='description' content='Gestão de Vacinas' />
            </Helmet>
            <MainLayout title="Vacinas">
                <p className="text-gray-800">Página de gestão de vacinas.</p>
            </MainLayout>
        </>
    );
}

export default Vacinas;
