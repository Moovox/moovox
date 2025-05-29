import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import Card from '../components/ui/Card';
import { Users, Syringe, AlertTriangle, MapPin, Activity, CircleDot } from 'lucide-react';
import { dashboardService } from '../services/dashboardService';
import { useToast } from '../components/ui/use-toast';
import { useAuth } from '../components/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import '../styles/dashboard.css';

function Dashboard() {
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    const [stats, setStats] = useState({
        usuarios: 0,
        animais: 0,
        dosesPendentes: 0,
        alertas: 0,
    });
    const [ultimosUsuarios, setUltimosUsuarios] = useState([]);
    const [dosesMensagem, setDosesMensagem] = useState('');
    const [telemetria, setTelemetria] = useState({
        animal: '',
        temperature: '',
        heartRate: '',
        lastUpdate: '',
    });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { toast } = useToast();

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }
    }, [user, navigate]);

    const fetchDashboardData = async () => {
        if (!user) return;

        try {
            setLoading(true);
            setError(null);

            const [statsData, usersData, vaccinesData, telemetryData] = await Promise.all([
                dashboardService.getStats(),
                dashboardService.getLatestUsers(),
                dashboardService.getPendingVaccines(),
                dashboardService.getAnimalTelemetry()
            ]);

            setStats({
                usuarios: statsData.totalUsers || 0,
                animais: statsData.totalAnimals || 0,
                dosesPendentes: statsData.pendingVaccines || 0,
                alertas: statsData.healthAlerts || 0,
            });

            setUltimosUsuarios(usersData.users || []);

            setDosesMensagem(
                vaccinesData.pendingCount > 0
                    ? `${vaccinesData.pendingCount} doses pendentes para aplicação.`
                    : 'Nenhuma dose pendente.'
            );

            if (telemetryData.latest) {
                setTelemetria({
                    animal: telemetryData.latest.animalName || '',
                    temperature: telemetryData.latest.temperature ? `${telemetryData.latest.temperature}ºC` : '',
                    heartRate: telemetryData.latest.heartRate ? `${telemetryData.latest.heartRate} bpm` : '',
                    lastUpdate: telemetryData.latest.timestamp 
                        ? new Date(telemetryData.latest.timestamp).toLocaleString('pt-BR')
                        : '',
                });
            }
        } catch (err) {
            if (err.response?.status === 401) {
                logout();
                navigate('/login');
                return;
            }

            setError('Não foi possível carregar alguns dados do dashboard.');
            toast({
                variant: "destructive",
                title: "Erro ao carregar dados",
                description: "Ocorreu um erro ao carregar as informações do dashboard."
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user) {
            fetchDashboardData();
            const interval = setInterval(fetchDashboardData, 5 * 60 * 1000);
            return () => clearInterval(interval);
        }
    }, [user]);

    const cardAnimation = {
        hover: { scale: 1.02 },
        tap: { scale: 0.98}
    };

    const mainCards = [
        { 
            variant: "terra", 
            icon: <Users className='text-black w-8 h-8' />, 
            title: "Usuários", 
            value: stats.usuarios.toString()
        },
        { 
            variant: "verde", 
            icon: <CircleDot className='text-black w-8 h-8' />, 
            title: "Animais Registrados", 
            value: stats.animais.toString()
        },
        { 
            variant: "palha", 
            icon: <Syringe className='text-black w-8 h-8' />, 
            title: "Doses Pendentes", 
            value: stats.dosesPendentes.toString()
        },
        { 
            variant: "alerta", 
            icon: <AlertTriangle className='text-black w-8 h-8' />, 
            title: "Alertas de Saúde", 
            value: stats.alertas.toString()
        }
    ];

    return (
        <>
            <Helmet>
                <title>Moovox | Dashboard</title>
                <meta name='description' content='Moovox Dashboard' />
            </Helmet>
            <div>
                <MainLayout
                    title="Painel do Administrador"
                    className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
                >
                    <div className="mt-6 md:mt-8 lg:mt-10" />
                    {loading ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full flex justify-center items-center min-h-[300px]"
                        >
                            <span className="text-lg font-poppins text-[#4e2e13] animate-pulse">Carregando dados...</span>
                        </motion.div>
                    ) : error ? (
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="w-full flex justify-center items-center min-h-[300px]"
                        >
                            <span className="text-lg font-poppins text-red-600">{error}</span>
                        </motion.div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8 overflow-hidden"
                        >
                            {/* Cards principais */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 overflow-visible">
                                {mainCards.map((card) => (
                                    <motion.div 
                                        key={card.title}
                                        whileHover={cardAnimation.hover}
                                        whileTap={cardAnimation.tap}
                                        className="h-full"
                                    >
                                        <Card
                                            variant={card.variant}
                                            icon={card.icon}
                                            title={card.title}
                                            value={card.value}
                                            className="h-full transform-gpu"
                                        />
                                    </motion.div>
                                ))}
                            </div>

                            {/* Cards secundários */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
                                <motion.div whileHover={cardAnimation.hover} whileTap={cardAnimation.tap}>
                                    <Card
                                        variant="rural"
                                        title="Últimos Usuários Cadastrados"
                                        className="h-[280px] transform-gpu"
                                    >
                                        <div className="h-full overflow-y-auto custom-scrollbar py-4">
                                            {ultimosUsuarios.map((user, idx) => (
                                                <motion.div
                                                    key={user.nome + idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="p-2 hover:bg-black/5 rounded-lg transition-colors"
                                                >
                                                    <span className="font-poppins text-sm md:text-base text-black block">
                                                        {user.nome} - <span className="font-semibold">{user.papel}</span>
                                                    </span>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </Card>
                                </motion.div>
                                
                                <motion.div whileHover={cardAnimation.hover} whileTap={cardAnimation.tap}>
                                    <Card
                                        variant="rural"
                                        title="Doses Pendentes"
                                        className="h-[280px] transform-gpu"
                                    >
                                        <div className="flex items-center justify-center h-full">
                                            <span className="font-poppins text-lg text-[#3e2c1a]">
                                                {dosesMensagem}
                                            </span>
                                        </div>
                                    </Card>
                                </motion.div>
                            </div>

                            {/* Mapa e Telemetria */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-visible">
                                <motion.div whileHover={cardAnimation.hover} whileTap={cardAnimation.tap}>
                                    <Card
                                        variant="rural"
                                        title="Localização dos Animais"
                                        icon={<MapPin className='text-black w-6 h-6' />}
                                        className="h-[280px] transform-gpu"
                                    >
                                        <div className="flex items-center justify-center h-full">
                                            <span className="text-sm text-gray-600">
                                                Mapa via Google Maps será aplicado aqui futuramente.
                                            </span>
                                        </div>
                                    </Card>
                                </motion.div>

                                <motion.div whileHover={cardAnimation.hover} whileTap={cardAnimation.tap}>
                                    <Card
                                        variant="rural"
                                        title="Telemetria do Animal"
                                        icon={<Activity className='text-black w-6 h-6' />}
                                        className="h-[280px] transform-gpu"
                                    >
                                        {telemetria.animal ? (
                                            <div className="p-4 space-y-4">
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold">Animal:</span>
                                                    <span>{telemetria.animal}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold">Temperatura:</span>
                                                    <span>{telemetria.temperature}</span>
                                                </div>
                                                <div className="flex items-center justify-between">
                                                    <span className="font-semibold">Batimentos:</span>
                                                    <span>{telemetria.heartRate}</span>
                                                </div>
                                                <div className="text-sm text-gray-500 text-right">
                                                    Última atualização: {telemetria.lastUpdate}
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="flex items-center justify-center h-full">
                                                <span className="text-sm text-gray-600">
                                                    Nenhum dado de telemetria disponível
                                                </span>
                                            </div>
                                        )}
                                    </Card>
                                </motion.div>
                            </div>
                        </motion.div>
                    )}
                </MainLayout>
            </div>
        </>
    );
}

export default Dashboard;
