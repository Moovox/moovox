import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import SafeAnimalMap from '../components/maps/SafeAnimalMap';
import { Search, Filter, MapPin, ToggleLeft } from 'lucide-react';

function AnimalMap() {
    const [speciesFilter, setSpeciesFilter] = useState('');
    const [statusFilter, setStatusFilter] = useState('');
    const [search, setSearch] = useState('');
    const [showFences, setShowFences] = useState(true);

    return (
        <>
            <Helmet>
                <title>Moovox | Animal Map</title>
                <meta name='description' content='Animal Location Map' />
            </Helmet>
            <MainLayout 
                title="Animal Location Map"
                className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]"
            >
                <div className="mt-6 md:mt-8 lg:mt-10 mb-6 space-y-4">
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            {/* Search */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Search className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    placeholder="Search animal..."
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={search}
                                    onChange={(e) => setSearch(e.target.value)}
                                />
                            </div>

                            {/* Species Filter */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={speciesFilter}
                                    onChange={(e) => setSpeciesFilter(e.target.value)}
                                >
                                    <option value="">All species</option>
                                    <option value="bovino">Cattle</option>
                                    <option value="suíno">Swine</option>
                                    <option value="ave">Poultry</option>
                                    <option value="caprino">Goats</option>
                                    <option value="ovino">Sheep</option>
                                </select>
                            </div>

                            {/* Status Filter */}
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Filter className="h-5 w-5 text-gray-400" />
                                </div>
                                <select
                                    className="block w-full rounded-md border border-gray-300 pl-10 py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:border-amber-500"
                                    value={statusFilter}
                                    onChange={(e) => setStatusFilter(e.target.value)}
                                >
                                    <option value="">All statuses</option>
                                    <option value="Ativo">Active</option>
                                    <option value="Inativo">Inactive</option>
                                    <option value="Em tratamento">In treatment</option>
                                    <option value="Em quarentena">In quarantine</option>
                                </select>
                            </div>

                            {/* Virtual Fences Toggle */}
                            <div className="relative flex items-center">
                                <div className="flex items-center space-x-3">
                                    <ToggleLeft className="h-5 w-5 text-amber-700" />
                                    <label className="text-sm font-medium">
                                        Virtual Fences
                                    </label>
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            checked={showFences}
                                            onChange={(e) => setShowFences(e.target.checked)}
                                            className="w-4 h-4 text-amber-600 bg-gray-100 border-gray-300 rounded focus:ring-amber-500"
                                        />
                                        <label className="ml-2 text-sm font-medium text-gray-700">
                                            Show
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Full Screen Map */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="h-[700px] w-full">
                            <SafeAnimalMap 
                                filtroEspecie={speciesFilter} 
                                filtroStatus={statusFilter}
                                busca={search}
                                exibirFiltros={false}
                                altura="680px"
                                mapZoom={6}
                                titulo="Real-Time Location Map"
                                atualizacaoAutomatica={true}
                                intervaloAtualizacao={120000}
                                exibirCercasVirtuais={showFences}
                                exibirLegendaInterna={false}
                            />
                        </div>
                    </div>
                    
                    {/* Animal Types Legend */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="flex items-center gap-2 mb-3">
                            <Filter className="text-amber-800 w-5 h-5" />
                            <h3 className="text-lg font-semibold text-amber-900">Legend</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-semibold text-amber-800 mb-2">Animal Types</h4>
                                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-green-600"></div>
                                        <span>Cattle</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-red-600"></div>
                                        <span>Swine</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-yellow-600"></div>
                                        <span>Poultry</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-blue-600"></div>
                                        <span>Goats</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-full bg-purple-600"></div>
                                        <span>Sheep</span>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-amber-800 mb-2">Virtual Fences</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-blue-500"></div>
                                        <span>Main Farm</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-green-500"></div>
                                        <span>Pasture Area</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <div className="w-4 h-4 rounded-lg bg-red-500"></div>
                                        <span>Restricted Zone</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Virtual Fences Information */}
                    <div className="bg-white rounded-xl shadow-sm p-4 overflow-hidden">
                        <div className="flex items-center gap-2 mb-3">
                            <MapPin className="text-amber-800 w-5 h-5" />
                            <h3 className="text-lg font-semibold text-amber-900">About Virtual Fences</h3>
                        </div>
                        
                        <p className="text-sm text-gray-700 mb-4">
                            Virtual fences define geographic boundaries for your animals.
                            The system monitors when animals exit or enter these areas,
                            allowing better herd control.
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="p-3 border border-blue-200 rounded-lg bg-blue-50">
                                <h4 className="font-semibold text-blue-800">Main Farm</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Main farm area. All animals should remain within this perimeter.
                                </p>
                            </div>
                            
                            <div className="p-3 border border-green-200 rounded-lg bg-green-50">
                                <h4 className="font-semibold text-green-800">Pasture Area</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Area designated for grazing. Recommended for cattle and sheep.
                                </p>
                            </div>
                            
                            <div className="p-3 border border-red-200 rounded-lg bg-red-50">
                                <h4 className="font-semibold text-red-800">Restricted Zone</h4>
                                <p className="text-xs text-gray-600 mt-1">
                                    Restricted access area. Animals should not enter this zone.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </MainLayout>
        </>
    );
}

export default AnimalMap; 