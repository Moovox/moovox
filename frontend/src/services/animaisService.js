import api from '../lib/api';

export const animaisService = {
    listarAnimais: async () => {
        const response = await api.get('/animais');
        return response.data;
    },

    criarAnimal: async (animal) => {
        const response = await api.post('/animais', animal);
        return response.data;
    },

    atualizarAnimal: async (id, animal) => {
        const response = await api.put(`/animais/${id}`, animal);
        return response.data;
    },

    excluirAnimal: async (id) => {
        const response = await api.delete(`/animais/${id}`);
        return response.data;
    },

    buscarAnimalPorId: async (id) => {
        const response = await api.get(`/animais/${id}`);
        return response.data;
    }
}; 