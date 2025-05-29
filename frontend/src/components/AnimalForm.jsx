import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';

function AnimalForm({ animal, onSubmit, onCancel }) {
    const [formData, setFormData] = useState({
        name: '',
        species_id: '',
        breed_id: '',
        birth_date: '',
        weight: '',
        health_status: '',
        farm_id: ''
    });

    const [species, setSpecies] = useState([]);
    const [breeds, setBreeds] = useState([]);
    const [farms, setFarms] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (animal) {
            setFormData({
                name: animal.name,
                species_id: animal.species.id,
                breed_id: animal.breed.id,
                birth_date: new Date(animal.birth_date).toISOString().split('T')[0],
                weight: animal.weight,
                health_status: animal.health_status,
                farm_id: animal.farm.id
            });
        }
        fetchData();
    }, [animal]);

    const fetchData = async () => {
        try {
            const token = localStorage.getItem('token');
            const [speciesRes, breedsRes, farmsRes] = await Promise.all([
                axios.get(`${API_URL}/species`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_URL}/breeds`, { headers: { Authorization: `Bearer ${token}` } }),
                axios.get(`${API_URL}/farms`, { headers: { Authorization: `Bearer ${token}` } })
            ]);

            setSpecies(speciesRes.data.data);
            setBreeds(breedsRes.data.data);
            setFarms(farmsRes.data.data);
            setError(null);
        } catch (err) {
            setError('Erro ao carregar dados do formulário');
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    };

    if (loading) return <div className="text-center py-4">Carregando...</div>;
    if (error) return <div className="text-center py-4 text-red-600">{error}</div>;

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700">Nome</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Espécie</label>
                <select
                    name="species_id"
                    value={formData.species_id}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="">Selecione uma espécie</option>
                    {species.map(specie => (
                        <option key={specie.id} value={specie.id}>{specie.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Raça</label>
                <select
                    name="breed_id"
                    value={formData.breed_id}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="">Selecione uma raça</option>
                    {breeds.map(breed => (
                        <option key={breed.id} value={breed.id}>{breed.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Data de Nascimento</label>
                <input
                    type="date"
                    name="birth_date"
                    value={formData.birth_date}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Peso (kg)</label>
                <input
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    step="0.1"
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Status de Saúde</label>
                <select
                    name="health_status"
                    value={formData.health_status}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="">Selecione um status</option>
                    <option value="Saudável">Saudável</option>
                    <option value="Em tratamento">Em tratamento</option>
                    <option value="Doente">Doente</option>
                </select>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700">Fazenda</label>
                <select
                    name="farm_id"
                    value={formData.farm_id}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                >
                    <option value="">Selecione uma fazenda</option>
                    {farms.map(farm => (
                        <option key={farm.id} value={farm.id}>{farm.name}</option>
                    ))}
                </select>
            </div>

            <div className="flex justify-end space-x-3">
                <button
                    type="button"
                    onClick={onCancel}
                    className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                    Cancelar
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    {animal ? 'Atualizar' : 'Criar'}
                </button>
            </div>
        </form>
    );
}

export default AnimalForm; 