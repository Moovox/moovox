import React from 'react';
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

                {/* Cards principais - responsividade e espaçamento melhorados */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                    <Card variant="terra" className="flex flex-col justify-between p-4 md:p-6 min-h-[120px]">
                        <div className="flex items-center gap-2 mb-2">
                            <Users className="w-6 h-6 text-[#bfa77a]" />
                            <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Usuários</span>
                        </div>
                        <span className="font-poppins font-bold text-xl md:text-2xl text-[#4e2e13]">10</span>
                    </Card>
                    <Card variant="verde" className="flex flex-col justify-between p-4 md:p-6 min-h-[120px]">
                        <div className="flex items-center gap-2 mb-2">
                            <Icon iconNode={cowHead} className="w-6 h-6 text-[#bfa77a]" />
                            <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Animais Registrados</span>
                        </div>
                        <span className="font-poppins font-bold text-xl md:text-2xl text-[#4e2e13]">10</span>
                    </Card>
                    <Card variant="palha" className="flex flex-col justify-between p-4 md:p-6 min-h-[120px]">
                        <div className="flex items-center gap-2 mb-2">
                            <Syringe className="w-6 h-6 text-[#bfa77a]" />
                            <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Doses Pendentes</span>
                        </div>
                        <span className="font-poppins font-bold text-xl md:text-2xl text-[#4e2e13]">0</span>
                    </Card>
                    <Card variant="alerta" className="flex flex-col justify-between p-4 md:p-6 min-h-[120px]">
                        <div className="flex items-center gap-2 mb-2">
                            <AlertTriangle className="w-6 h-6 text-[#a97c50]" />
                            <span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Alertas de Saúde</span>
                        </div>
                        <span className="font-poppins font-bold text-xl md:text-2xl text-[#a97c50]">5</span>
                    </Card>
                </div>

                {/* Cards secundários - espaçamento e fontes ajustados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 px-2 md:px-4">
                    <Card variant="rural" className="p-4 md:p-6">
                        <ListCard 
                            title={<span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Últimos Usuários Cadastrados</span>} 
                            items={[
                                <span className="font-poppins text-sm md:text-base text-white">Administrador Moovox - admin</span>,
                                <span className="font-poppins text-sm md:text-base text-white">Dr. Benjamin Nogueira - veterinario</span>,
                                <span className="font-poppins text-sm md:text-base text-white">Mariana Saraiva - veterinario</span>,
                            ]} 
                        />
                    </Card>
                    <Card variant="rural" className="p-4 md:p-6">
                        <MessageCard 
                            title={<span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Doses Pendentes</span>} 
                            message={<span className="font-poppins text-sm md:text-base text-[#a97c50]">Nenhuma dose pendente.</span>} 
                        />
                    </Card>
                </div>

                {/* Cards de imagem e telemetria - espaçamento e fontes ajustados */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 px-2 md:px-4 mb-8">
                    <Card variant="rural" className="p-4 md:p-6">
                        <ImageCard
                            title={<span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Localização dos Animais</span>}
                            icon={<MapPin className="w-6 h-6 text-[#bfa77a]" />}
                            imageUrl="https://static-maps.yandex.ru/1.x/?lang=pt_BR&ll=-47.0608,-22.9099&z=13&l=map&size=450,200"
                            alt="Mapa"
                        />
                    </Card>
                    <Card variant="rural" className="p-4 md:p-6">
                        <TelemetryCard
                            title={<span className="font-poppins font-semibold text-base md:text-lg text-[#4e2e13]">Telemetria do Animal</span>}
                            icon={<HeartBeatIcon className="text-[#bfa77a]" />}
                            animal={<span className="font-poppins text-sm md:text-base text-[#a97c50]">Branquinha</span>}
                            temperature={<span className="font-poppins text-sm md:text-base text-[#a97c50]">38.5ºC</span>}
                            heartRate={<span className="font-poppins text-sm md:text-base text-[#a97c50]">78 bpm</span>}
                            lastUpdate={<span className="font-poppins text-xs text-[#a97c50]">13/04/2025 às 15:42</span>}
                        />
                    </Card>
                </div>
            </MainLayout>
        </>
    );
}

export default Dashboard;
