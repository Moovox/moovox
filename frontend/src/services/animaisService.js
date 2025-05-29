import api from '../lib/api';

export const animaisService = {
    listarAnimais: async () => {
        const response = await api.get('/animals');
        return response.data.data;
    },

    criarAnimal: async (animal) => {
        const response = await api.post('/animals', animal);
        return response.data.data;
    },

    atualizarAnimal: async (id, animal) => {
        const response = await api.put(`/animals/${id}`, animal);
        return response.data.data;
    },

    excluirAnimal: async (id) => {
        const response = await api.delete(`/animals/${id}`);
        return response.data;
    },

    buscarAnimalPorId: async (id) => {
        const response = await api.get(`/animals/${id}`);
        return response.data.data;
    }
}; 