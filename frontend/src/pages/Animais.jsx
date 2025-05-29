import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import AnimaisTable from '../components/AnimaisTable';

function Animais() {
    return (
        <>
            <Helmet>
                <title>Moovox | Animais</title>
                <meta name='description' content='Gestão de Animais' />
            </Helmet>
            <MainLayout title="Animais">
                <AnimaisTable />
            </MainLayout>
        </>
    );
}

export default Animais;
