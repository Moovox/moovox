import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import MainLayout from '../components/layout/MainLayout';
import { farmService } from '../services/farmService';
import { useToast } from '../components/ui/use-toast';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Plus, BuildingIcon, Map, Edit, Trash2, Loader2, AlertCircle } from 'lucide-react';
import { useFarm } from '../context/FarmContext';

function Farms() {
    const [farms, setFarms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [deletingId, setDeletingId] = useState(null);
    const { toast } = useToast();
    const { setCurrentFarm } = useFarm();

    const loadFarms = async () => {
        try {
            setLoading(true);
            setError(null);
            
            const response = await farmService.getAllFarms();
            setFarms(response.data || []);
        } catch (error) {
            console.error('Error loading farms:', error);
            setError(error.message || 'Failed to load farms');
            
            toast({
                variant: "destructive",
                title: "Error",
                description: error.message || 'Failed to load farms. Please try again.'
            });
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        loadFarms();
    }, []);

    const handleSelectFarm = (farm) => {
        if (!farm.id) return;
        
        setCurrentFarm(farm);
        
        toast({
            title: "Farm Selected",
            description: `You are now working with "${farm.name}"`,
            variant: "success"
        });
    };

    const handleDeleteFarm = async (id, name) => {
        if (!window.confirm(`Are you sure you want to delete the farm "${name}"? This action cannot be undone.`)) {
            return;
        }
        
        setDeletingId(id);
        
        try {
            await farmService.deleteFarm(id);
            
            toast({
                title: "Success",
                description: "Farm deleted successfully!",
                variant: "success"
            });
            
            // Reload the farms list
            loadFarms();
        } catch (error) {
            console.error('Error deleting farm:', error);
            
            toast({
                title: "Error",
                description: error.message || 'An error occurred while deleting the farm',
                variant: "destructive"
            });
        } finally {
            setDeletingId(null);
        }
    };

    if (loading) {
        return (
            <>
                <Helmet>
                    <title>Moovox | Farms</title>
                    <meta name='description' content='Farm Management' />
                </Helmet>
                <MainLayout title="Farms" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                    <div className="flex justify-center items-center h-64">
                        <div className="flex flex-col items-center">
                            <Loader2 className="h-12 w-12 animate-spin text-amber-700 mb-4" />
                            <p className="text-amber-800 text-lg">Loading farms...</p>
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }

    if (error) {
        return (
            <>
                <Helmet>
                    <title>Moovox | Farms</title>
                    <meta name='description' content='Farm Management' />
                </Helmet>
                <MainLayout title="Farms" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                    <div className="flex justify-center items-center h-64">
                        <div className="flex flex-col items-center text-center">
                            <AlertCircle className="h-12 w-12 text-red-600 mb-4" />
                            <p className="text-red-600 text-lg font-semibold mb-2">Error loading farms</p>
                            <p className="text-gray-700 max-w-md">{error}</p>
                            <Button 
                                className="mt-4 bg-amber-600 hover:bg-amber-700"
                                onClick={loadFarms}
                            >
                                Try Again
                            </Button>
                        </div>
                    </div>
                </MainLayout>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Moovox | Farms</title>
                <meta name='description' content='Farm Management' />
            </Helmet>
            <MainLayout title="Farms" className="min-h-screen bg-gradient-to-br from-[#fff8f0] via-[#f9e7c2] to-[#bfa77a]">
                <div className="mt-6 md:mt-8 lg:mt-10 mb-6 space-y-6">
                    <div className="flex justify-between items-center">
                        <h2 className="text-xl font-semibold text-amber-900">Your Farms</h2>
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                            <Plus className="w-4 h-4 mr-1" />
                            Add Farm
                        </Button>
                    </div>

                    {farms.length === 0 ? (
                        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
                            <BuildingIcon className="h-12 w-12 mx-auto text-amber-200 mb-4" />
                            <h3 className="text-lg font-semibold text-amber-900 mb-2">No Farms Found</h3>
                            <p className="text-gray-600 mb-6">You don't have any farms registered yet.</p>
                            <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                                <Plus className="w-4 h-4 mr-1" />
                                Register Your First Farm
                            </Button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {farms.map((farm) => (
                                <Card key={farm.id} className="border border-amber-100 overflow-hidden flex flex-col">
                                    <div className="h-48 bg-amber-50 relative overflow-hidden">
                                        {farm.imageUrl ? (
                                            <img 
                                                src={farm.imageUrl} 
                                                alt={farm.name} 
                                                className="w-full h-full object-cover"
                                            />
                                        ) : (
                                            <div className="w-full h-full flex items-center justify-center bg-amber-100">
                                                <BuildingIcon className="h-16 w-16 text-amber-300" />
                                            </div>
                                        )}
                                        
                                        <div className="absolute top-2 right-2 flex gap-1">
                                            <Button 
                                                size="icon" 
                                                variant="secondary" 
                                                className="w-8 h-8 bg-white/80 hover:bg-white"
                                                title="Edit Farm"
                                            >
                                                <Edit className="h-4 w-4 text-amber-700" />
                                            </Button>
                                            <Button 
                                                size="icon" 
                                                variant="secondary" 
                                                className="w-8 h-8 bg-white/80 hover:bg-white"
                                                title="Delete Farm"
                                                onClick={() => handleDeleteFarm(farm.id, farm.name)}
                                                disabled={deletingId === farm.id}
                                            >
                                                {deletingId === farm.id ? (
                                                    <Loader2 className="h-4 w-4 animate-spin text-red-600" />
                                                ) : (
                                                    <Trash2 className="h-4 w-4 text-red-600" />
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                    
                                    <div className="p-4 flex-1 flex flex-col">
                                        <h3 className="text-lg font-semibold text-amber-900 mb-1">{farm.name}</h3>
                                        <p className="text-sm text-gray-600 mb-2 line-clamp-2 flex-1">
                                            {farm.location || 'No location information'}
                                        </p>
                                        
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            <span className="inline-flex items-center px-2 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full">
                                                {farm.size} hectares
                                            </span>
                                            <span className="inline-flex items-center px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                                {farm.animalCount || 0} animals
                                            </span>
                                        </div>
                                        
                                        <div className="flex gap-2 mt-auto">
                                            <Button 
                                                className="flex-1 bg-amber-600 hover:bg-amber-700 text-white"
                                                onClick={() => handleSelectFarm(farm)}
                                            >
                                                Select Farm
                                            </Button>
                                            <Button 
                                                variant="outline" 
                                                size="icon" 
                                                className="border-amber-200 text-amber-700 hover:bg-amber-50"
                                                title="View Farm Map"
                                            >
                                                <Map className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                        </div>
                    )}
                </div>
            </MainLayout>
        </>
    );
}

export default Farms; 