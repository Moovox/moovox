import api from '../lib/api';

export const animaisService = {
    listarAnimais: async () => {
        try {
            const response = await api.get('/animals');
            return response.data.data;
        } catch (error) {
            console.error('Erro ao listar animais:', error);
            throw error.response?.data || error;
        }
    },

    criarAnimal: async (animal) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            const animalData = {
                ...animal,
                farmId: parseInt(farmId)
            };

            const response = await api.post('/animals', animalData);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao criar animal:', error);
            throw error.response?.data || error;
        }
    },

    atualizarAnimal: async (id, animal) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            console.log('Atualizando animal:', {
                id,
                animal,
                farmId
            });

            const animalData = {
                ...animal,
                farmId: parseInt(farmId)
            };

            const response = await api.put(`/animals/${id}`, animalData);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao atualizar animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para editar este animal');
            }
            throw error.response?.data || error;
        }
    },

    excluirAnimal: async (id) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            const response = await api.delete(`/animals/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao excluir animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para excluir este animal');
            }
            throw error.response?.data || error;
        }
    },

    buscarAnimalPorId: async (id) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            const response = await api.get(`/animals/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao buscar animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            throw error.response?.data || error;
        }
    }
}; 