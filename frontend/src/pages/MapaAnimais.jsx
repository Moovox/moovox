import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/MainLayout';
import SafeAnimalMap from '../components/SafeAnimalMap';
import { Search, Filter, MapPin, ToggleLeft } from 'lucide-react';

function MapaAnimais() {
    const [filtroEspecie, setFiltroEspecie] = useState('');
    const [filtroStatus, setFiltroStatus] = useState('');
    const [busca, setBusca] = useState('');
    const [exibirCercas, setExibirCercas] = useState(true);

    return (
        <>
            <Helmet>
                <title>Moovox | Mapa de Animais</title>
                <meta name='description' content='Mapa de Localização dos Animais' />
            </Helmet>
            <MainLayout 
                title="Mapa de Localização dos Animais"
                className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
            >
                <div className="mt-6 md:mt-8 lg:mt-10 mb-6 space-y-4">
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Busca */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Buscar animal..."
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={busca}
                                    onChange={(e) => setBusca(e.target.value)}
                                />
                            </div>

                            {/* Filtro por Espécie */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={filtroEspecie}
                                    onChange={(e) => setFiltroEspecie(e.target.value)}
                                >
                                    <option value="">Todas as espécies</option>
                                    <option value="bovino">Bovinos</option>
                                    <option value="suíno">Suínos</option>
                                    <option value="ave">Aves</option>
                                    <option value="caprino">Caprinos</option>
                                    <option value="ovino">Ovinos</option>
                                </select>
                            </div>

                            {/* Filtro por Status */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={filtroStatus}
                                    onChange={(e) => setFiltroStatus(e.target.value)}
                                >
                                    <option value="">Todos os status</option>
                                    <option value="Ativo">Ativos</option>
                                    <option value="Inativo">Inativos</option>
                                    <option value="Em tratamento">Em tratamento</option>
                                    <option value="Em quarentena">Em quarentena</option>
                                </select>
                            </div>

                            {/* Controle de Exibição de Cercas */}
                            <div className="relative flex items-center">
                                <div className="flex items-center space-x-3">
                                    <ToggleLeft className="h-5 w-5 text-amber-700" />
                                    <label className="text-sm font-medium">
                                        Cercas Virtuais
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={exibirCercas}
                                            onChange={(e) => setExibirCercas(e.target.checked)}
                                            className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-700">
                                            Exibir
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mapa em tela cheia */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="h-[700px] w-full">
                            <SafeAnimalMap 
                                filtroEspecie={filtroEspecie} 
                                filtroStatus={filtroStatus}
                                busca={busca}
                                exibirFiltros={false}
                                altura="680px"
                                mapZoom={6}
                                titulo="Mapa de Localização em Tempo Real"
                                atualizacaoAutomatica={true}
                                intervaloAtualizacao={120000}
                                exibirCercasVirtuais={exibirCercas}
                                exibirLegendaInterna={false}
                            />
                        </div>
                    </div>
                    
                    {/* Legenda de Tipos de Animais - Mantida fora do componente de mapa */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="flex items-center gap-2 mb-3">
                            <Filter className="text-amber-800 w-5 h-5" />
                            <h3 className="text-lg font-semibold text-amber-900">Legenda</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-semibold text-amber-800 mb-2">Tipos de Animais</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                        <span>Bovinos</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-red-600"></div>
                                        <span>Suínos</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
                                        <span>Aves</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        <span>Caprinos</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                        <span>Ovinos</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-amber-800 mb-2">Cercas Virtuais</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-blue-500"></div>
                                        <span>Fazenda Principal</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-green-500"></div>
                                        <span>Área de Pastagem</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-red-500"></div>
                                        <span>Zona Restrita</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Informações sobre cercas virtuais */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="text-amber-800 w-5 h-5" />
                            <h3 className="text-lg font-semibold text-amber-900">Sobre as Cercas Virtuais</h3>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-4">
                            As cercas virtuais definem limites geográficos para seus animais. 
                            O sistema monitora quando animais saem ou entram nessas áreas, 
                            permitindo melhor controle do rebanho.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 border border-blue-200 rounded-lg bg-blue-50">
                                <h4 className="font-semibold text-blue-800">Fazenda Principal</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Área principal da fazenda. Todos os animais devem permanecer neste perímetro.
                                </p>
                            </div>
                            
                            <div className="p-3 border border-green-200 rounded-lg bg-green-50">
                                <h4 className="font-semibold text-green-800">Área de Pastagem</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Área designada para pastagem. Recomendada para bovinos e ovinos.
                                </p>
                            </div>
                            
                            <div className="p-3 border border-red-200 rounded-lg bg-red-50">
                                <h4 className="font-semibold text-red-800">Zona Restrita</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Área de acesso restrito. Os animais não devem entrar nesta zona.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default MapaAnimais; 