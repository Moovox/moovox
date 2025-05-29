import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from './Modal';
import AnimalForm from './AnimalForm';

const API_URL = 'http://localhost:3001/api';

function AnimaisTable() {
    const [animais, setAnimais] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedAnimal, setSelectedAnimal] = useState(null);

    useEffect(() => {
        fetchAnimais();
    }, []);

    const fetchAnimais = async () => {
        try {
            setLoading(true);
            const token = localStorage.getItem('token');
            const response = await axios.get(`${API_URL}/animals`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAnimais(response.data.data);
            setError(null);
        } catch (err) {
            setError('Erro ao carregar animais');
            console.error('Erro:', err);
        } finally {
            setLoading(false);
        }
    };

    const handleCreate = () => {
        setSelectedAnimal(null);
        setIsModalOpen(true);
    };

    const handleEdit = (animal) => {
        setSelectedAnimal(animal);
        setIsModalOpen(true);
    };

    const handleDelete = async (id) => {
        if (window.confirm('Tem certeza que deseja excluir este animal?')) {
            try {
                const token = localStorage.getItem('token');
                await axios.delete(`${API_URL}/animals/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setAnimais(animais.filter(animal => animal.id !== id));
            } catch (err) {
                setError('Erro ao excluir animal');
                console.error('Erro:', err);
            }
        }
    };

    const handleSubmit = async (formData) => {
        try {
            const token = localStorage.getItem('token');
            if (selectedAnimal) {
                // Atualizar animal existente
                await axios.put(`${API_URL}/animals/${selectedAnimal.id}`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchAnimais(); // Recarregar lista após atualização
            } else {
                // Criar novo animal
                await axios.post(`${API_URL}/animals`, formData, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                fetchAnimais(); // Recarregar lista após criação
            }
            setIsModalOpen(false);
        } catch (err) {
            setError('Erro ao salvar animal');
            console.error('Erro:', err);
        }
    };

    if (loading) return <div className="text-center py-4">Carregando...</div>;
    if (error) return <div className="text-center py-4 text-red-600">{error}</div>;

    return (
        <div>
            <div className="mb-4">
                <button
                    onClick={handleCreate}
                    className="px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                    Novo Animal
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nome
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Espécie
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Raça
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Data de Nascimento
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Peso (kg)
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status de Saúde
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Fazenda
                            </th>
                            <th className="px-6 py-3 border-b text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {animais.map((animal) => (
                            <tr key={animal.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.id}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.species.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.breed.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {new Date(animal.birth_date).toLocaleDateString('pt-BR')}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.weight.toFixed(1)}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.health_status}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    {animal.farm.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                    <button 
                                        className="text-indigo-600 hover:text-indigo-900 mr-3"
                                        onClick={() => handleEdit(animal)}
                                    >
                                        Editar
                                    </button>
                                    <button 
                                        className="text-red-600 hover:text-red-900"
                                        onClick={() => handleDelete(animal.id)}
                                    >
                                        Excluir
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title={selectedAnimal ? 'Editar Animal' : 'Novo Animal'}
            >
                <AnimalForm
                    animal={selectedAnimal}
                    onSubmit={handleSubmit}
                    onCancel={() => setIsModalOpen(false)}
                />
            </Modal>
        </div>
    );
}

export default AnimaisTable; 