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

// Componente para os cards principais do dashboard
function DashboardStatCard({ icon, label, value, variant, valueColor }) {
    return (
        <Card variant={variant} className="flex flex-col justify-between p-4 md:p-6 min-h-[120px]">
            <div className="flex items-center gap-2 mb-2">
                {icon}
                <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">{label}</span>
            </div>
            <span className={`font-poppins font-bold text-xl md:text-2xl ${valueColor}`}>{value}</span>
        </Card>
    );
}

// Componente para seção de lista (últimos usuários)
function DashboardListSection({ title, items }) {
    return (
        <Card variant="rural" className="p-4 md:p-6">
            <ListCard title={title} items={items} />
        </Card>
    );
}

// Componente para seção de mensagem (doses pendentes)
function DashboardMessageSection({ title, message }) {
    return (
        <Card variant="rural" className="p-4 md:p-6">
            <MessageCard title={title} message={message} />
        </Card>
    );
}

// Componente para seção de imagem (localização)
function DashboardImageSection({ title, icon, imageUrl, alt }) {
    return (
        <Card variant="rural" className="p-4 md:p-6">
            <ImageCard title={title} icon={icon} imageUrl={imageUrl} alt={alt} />
        </Card>
    );
}

// Componente para seção de telemetria
function DashboardTelemetrySection({ title, icon, animal, temperature, heartRate, lastUpdate }) {
    return (
        <Card variant="rural" className="p-4 md:p-6">
            <TelemetryCard
                title={title}
                icon={icon}
                animal={animal}
                temperature={temperature}
                heartRate={heartRate}
                lastUpdate={lastUpdate}
            />
        </Card>
    );
}

function Dashboard() {
    // Estado para os dados principais do dashboard
    const [dashboardData, setDashboardData] = useState({
        usuarios: 0,
        animais: 0,
        dosesPendentes: 0,
        alertas: 0,
    });
    const [usuariosList, setUsuariosList] = useState([]); // Agora dinâmico
    const [dosesMessage, setDosesMessage] = useState(''); // Agora dinâmico
    const [loading, setLoading] = useState(true);

    // Simulação de fetch dos dados do backend
    useEffect(() => {
        setLoading(true);
        // Simule um delay de requisição
        setTimeout(() => {
            setDashboardData({
                usuarios: 10,
                animais: 10,
                dosesPendentes: 0,
                alertas: 5,
            });
            // Simulando usuários vindos do backend
            setUsuariosList([
                { nome: 'Administrador Moovox', tipo: 'admin' },
                { nome: 'Dr. Benjamin Nogueira', tipo: 'veterinario' },
                { nome: 'Mariana Saraiva', tipo: 'veterinario' },
            ]);
            // Simulando mensagem de doses vindas do backend
            setDosesMessage('Nenhuma dose pendente.');
            setLoading(false);
        }, 1000);
    }, []);

    // Dados dos cards principais agora vindos do estado
    const statCards = [
        {
            icon: <Users className="w-6 h-6 text-[#bfa77a]" />, label: 'Usuários', value: dashboardData.usuarios, variant: 'terra', valueColor: 'text-[#4e2e13]'
        },
        {
            icon: <Icon iconNode={cowHead} className="w-6 h-6 text-[#bfa77a]" />, label: 'Animais Registrados', value: dashboardData.animais, variant: 'verde', valueColor: 'text-[#4e2e13]'
        },
        {
            icon: <Syringe className="w-6 h-6 text-[#bfa77a]" />, label: 'Doses Pendentes', value: dashboardData.dosesPendentes, variant: 'palha', valueColor: 'text-[#4e2e13]'
        },
        {
            icon: <AlertTriangle className="w-6 h-6 text-[#a97c50]" />, label: 'Alertas de Saúde', value: dashboardData.alertas, variant: 'alerta', valueColor: 'text-[#a97c50]'
        },
    ];

    // Dados dos cards secundários
    const usuariosTitle = <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Últimos Usuários Cadastrados</span>;
    const dosesTitle = <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Doses Pendentes</span>;

    // Monta a lista de usuários para o componente ListCard
    const usuariosListItems = usuariosList.length > 0
        ? usuariosList.map((user, idx) => (
            <span key={user.nome + idx} className="font-poppins text-sm md:text-base text-white">{user.nome} - {user.tipo}</span>
        ))
        : [<span key="no-users" className="font-poppins text-sm md:text-base text-white">Nenhum usuário encontrado.</span>];

    // Mensagem de doses pendentes
    const dosesMessageNode = <span className="font-poppins text-sm md:text-base text-[#a97c50]">{dosesMessage}</span>;

    // Dados dos cards de imagem e telemetria
    const imageSectionProps = {
        title: <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Localização dos Animais</span>,
        icon: <MapPin className="w-6 h-6 text-[#bfa77a]" />,
        imageUrl: "https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-47.0608,-22.9099&z=13&l=map&size=450,200",
        alt: "Mapa"
    };
    const telemetrySectionProps = {
        title: <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Telemetria do Animal</span>,
        icon: <HeartBeatIcon className="text-[#bfa77a]" />,
        animal: <span className="font-poppins text-sm md:text-base text-[#a97c50]">Branquinha</span>,
        temperature: <span className="font-poppins text-sm md:text-base text-[#a97c50]">38.5ºC</span>,
        heartRate: <span className="font-poppins text-sm md:text-base text-[#a97c50]">78 bpm</span>,
        lastUpdate: <span className="font-poppins text-xs text-[#a97c50]">13/04/2025 às 15:42</span>
    };

    // Corrige o sumiço do dashboard: renderiza sempre o MainLayout e só troca o conteúdo interno
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
                {/* Espaçamento extra entre o header e os cards */}
                <div className="mt-6 md:mt-8 lg:mt-10" />

                {loading ? (
                    <div className="w-full flex justify-center items-center py-10">
                        <span className="font-poppins text-lg text-[#4e2e13]">Carregando dados...</span>
                    </div>
                ) : null}

                {/* Cards principais - agora componentizados */}
                {!loading && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                            {statCards.map((card) => (
                                <DashboardStatCard key={card.label} {...card} />
                            ))}
                        </div>

                        {/* Cards secundários componentizados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                            <DashboardListSection title={usuariosTitle} items={usuariosListItems} />
                            <DashboardMessageSection title={dosesTitle} message={dosesMessageNode} />
                        </div>

                        {/* Cards de imagem e telemetria componentizados */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4 mb-8">
                            <DashboardImageSection {...imageSectionProps} />
                            <DashboardTelemetrySection {...telemetrySectionProps} />
                        </div>
                    </>
                )}
            </MainLayout>
        </>
    );
}

export default Dashboard;
