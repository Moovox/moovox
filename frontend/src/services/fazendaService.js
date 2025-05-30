import api from '../lib/api';

export const fazendaService = {
    listarFazendas: async () => {
        try {
            const response = await api.get('/farms');
            return response.data.data;
        } catch (error) {
            console.error('Erro ao listar fazendas:', error);
            throw error.response?.data || error;
        }
    },

    criarFazenda: async (fazenda) => {
        try {
            const response = await api.post('/farms', fazenda);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao criar fazenda:', error);
            throw error.response?.data || error;
        }
    },

    atualizarFazenda: async (id, fazenda) => {
        try {
            const response = await api.put(`/farms/${id}`, fazenda);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao atualizar fazenda:', error);
            throw error.response?.data || error;
        }
    },

    excluirFazenda: async (id) => {
        try {
            const response = await api.delete(`/farms/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao excluir fazenda:', error);
            throw error.response?.data || error;
        }
    },

    buscarFazendaPorId: async (id) => {
        try {
            const response = await api.get(`/farms/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao buscar fazenda:', error);
            throw error.response?.data || error;
        }
    },

    selecionarFazenda: (fazendaId) => {
        localStorage.setItem('farmId', fazendaId);
        return true;
    },

    obterFazendaSelecionada: () => {
        return localStorage.getItem('farmId');
    }
}; 