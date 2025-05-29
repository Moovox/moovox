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
            <MainLayout title="Animais" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="mt-6 md:mt-8 lg:mt-10" />
                <AnimaisTable />
            </MainLayout>
        </>
    );
}

export default Animais;
