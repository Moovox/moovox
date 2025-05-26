import React from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import UsuariosTable from '../components/UsuariosTable';

const mockUsuarios = [
    { id: 1, nome: 'Sra. Sophia Braga', email: 'sra.sophia.braga@moovox.com', tipo: 'fazendeiro' },
    { id: 2, nome: 'Helena Nogueira', email: 'helena.nogueira@moovox.com', tipo: 'fazendeiro' },
    { id: 3, nome: 'Isaac Braga', email: 'isaac.braga@moovox.com', tipo: 'fazendeiro' },
    { id: 4, nome: 'Washington Albuquerque', email: 'washington.albuquerque@moovox.com', tipo: 'veterinario' },
    { id: 5, nome: 'Dr. Théo Batista', email: 'dr.theo.batista@moovox.com', tipo: 'veterinario' },
    { id: 6, nome: 'Ana Clara Moreira', email: 'ana.clara.moreira@moovox.com', tipo: 'veterinario' },
    { id: 7, nome: 'Roberta Saraiva', email: 'roberta.saraiva@moovox.com', tipo: 'funcionario' },
    { id: 8, nome: 'Dra. Márcia Moraes', email: 'dra.marcia.moraes@moovox.com', tipo: 'funcionario' },
    { id: 9, nome: 'Sarah Batista', email: 'sarah.batista@moovox.com', tipo: 'funcionario' },
    { id: 10, nome: 'Administrador Moovox', email: 'admin@moovox.com', tipo: 'admin' },
];

function Usuarios() {
    return (
        <>
            <Helmet>
                <title>Moovox | Usuários</title>
                <meta name='description' content='Gestão de Usuários' />
            </Helmet>
            <MainLayout title="Usuários">
                <UsuariosTable usuarios={mockUsuarios} />
            </MainLayout>
        </>
    );
}

export default Usuarios;
