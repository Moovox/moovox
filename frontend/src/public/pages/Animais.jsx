import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../../components/MainLayout';

function Animais() {
    return (
        <>
            <Helmet>
                <title>Moovox | Animais</title>
                <meta name='description' content='Gestão de Animais' />
            </Helmet>
            <MainLayout title="Animais">
                <p className="text-gray-800">Página de gestão de animais.</p>
            </MainLayout>
        </>
    );
}

export default Animais;
