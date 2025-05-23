import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import Card from '../components/ui/Card';
import { Icon, Users, Syringe, AlertTriangle, MapPin } from 'lucide-react';
import { cowHead } from '@lucide/lab';
import HeartBeatIcon from '../components/ui/HeartBeatIcon';
import ListCard from '../components/dashboard/ListCard';
import MessageCard from '../components/dashboard/MessageCard';
import ImageCard from '../components/dashboard/ImageCard';
import TelemetryCard from '../components/dashboard/TelemetryCard';

function Dashboard() {
    // Estados para dados dinâmicos vindos do backend
    const [stats, setStats] = useState({
        usuarios: 0,
        animais: 0,
        dosesPendentes: 0,
        alertas: 0,
    });
    const [ultimosUsuarios, setUltimosUsuarios] = useState([]);
    const [dosesMensagem, setDosesMensagem] = useState('');
    const [localizacao, setLocalizacao] = useState({
        imageUrl: '',
        alt: '',
    });
    const [telemetria, setTelemetria] = useState({
        animal: '',
        temperature: '',
        heartRate: '',
        lastUpdate: '',
    });
    const [loading, setLoading] = useState(true);

    // Simulação de fetch dos dados do backend
    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setStats({
                usuarios: 10,
                animais: 10,
                dosesPendentes: 0,
                alertas: 5,
            });
            setUltimosUsuarios([
                { nome: 'Administrador Moovox', papel: 'admin' },
                { nome: 'Dr. Benjamin Nogueira', papel: 'veterinario' },
                { nome: 'Mariana Saraiva', papel: 'veterinario' },
            ]);
            setDosesMensagem('Nenhuma dose pendente.');
            setLocalizacao({
                imageUrl: 'https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-47.0608,-22.9099&z=13&l=map&size=450,200',
                alt: 'Mapa',
            });
            setTelemetria({
                animal: 'Branquinha',
                temperature: '38.5ºC',
                heartRate: '78 bpm',
                lastUpdate: '13/04/2025 às 15:42',
            });
            setLoading(false);
        }, 3000); // simula tempo de requisição
    }, []);

    return (
        <>
            <Helmet>
                <title>Moovox | Dashboard</title>
                <meta name='description' content='Moovox Dashboard' />
            </Helmet>
            <MainLayout 
                title="Painel do Administrador"
                className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
            >
                <div className="mt-6 md:mt-8 lg:mt-10" />
                {loading ? (
                    <div className="w-full flex justify-center items-center min-h-[300px]">
                        <span className="text-lg font-poppins text-[#4e2e13] animate-pulse">Carregando dados...</span>
                    </div>
                ) : (
                    <>
                        {/* Cards principais */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                            <Card
                                variant="terra"
                                icon={<Users className="w-6 h-6 text-[#bfa77a]" />}
                                title="Usuários"
                                value={stats.usuarios}
                            />
                            <Card
                                variant="verde"
                                icon={<Icon iconNode={cowHead} className="w-6 h-6 text-[#bfa77a]" />}
                                title="Animais Registrados"
                                value={stats.animais}
                            />
                            <Card
                                variant="palha"
                                icon={<Syringe className="w-6 h-6 text-[#bfa77a]" />}
                                title="Doses Pendentes"
                                value={stats.dosesPendentes}
                            />
                            <Card
                                variant="alerta"
                                icon={<AlertTriangle className="w-6 h-6 text-[#a97c50]" />}
                                title="Alertas de Saúde"
                                value={<span className="text-[#a97c50]">{stats.alertas}</span>}
                            />
                        </div>
                        {/* Cards secundários */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                            <Card
                                variant="rural"
                                title="Últimos Usuários Cadastrados"
                                extra={ultimosUsuarios.map((user, idx) => (
                                    <span key={user.nome + idx} className="font-poppins text-sm md:text-base text-black block">{user.nome} - {user.papel}</span>
                                ))}
                            />
                            <Card
                                variant="rural"
                                title="Doses Pendentes"
                                value={<span className="font-poppins text-sm md:text-base text-[#a97c50]">{dosesMensagem}</span>}
                            />
                        </div>
                        {/* Cards de imagem e telemetria */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4 mb-8">
                            <Card
                                variant="rural"
                                title="Localização dos Animais"
                                icon={<MapPin className="w-6 h-6 text-[#bfa77a]" />}
                                extra={
                                    <img
                                        src={localizacao.imageUrl}
                                        alt={localizacao.alt}
                                        className="rounded-lg w-full h-auto mt-2"
                                    />
                                }
                            />
                            <Card
                                variant="rural"
                                title="Telemetria do Animal"
                                icon={<HeartBeatIcon className="text-[#bfa77a]" />}
                                extra={
                                    <div>
                                        <div className="font-poppins text-sm md:text-base text-[#a97c50]">{telemetria.animal}</div>
                                        <div className="font-poppins text-sm md:text-base text-[#a97c50]">{telemetria.temperature}</div>
                                        <div className="font-poppins text-sm md:text-base text-[#a97c50]">{telemetria.heartRate}</div>
                                        <div className="font-poppins text-xs text-[#a97c50]">{telemetria.lastUpdate}</div>
                                    </div>
                                }
                            />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
}

export default Dashboard;
