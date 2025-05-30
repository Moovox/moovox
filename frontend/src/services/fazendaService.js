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
            console.log(`Enviando requisição DELETE para /farms/${id}`);
            const response = await api.delete(`/farms/${id}`);
            console.log(`Resposta da exclusão:`, response);
            return response.data;
        } catch (error) {
            console.error('Erro ao excluir fazenda:', error);
            
            // Log detalhado do erro
            if (error.response) {
                // O servidor respondeu com um status fora do intervalo 2xx
                console.error('Dados da resposta de erro:', error.response.data);
                console.error('Status do erro:', error.response.status);
                console.error('Headers:', error.response.headers);
                
                // Retorna os dados de erro do servidor
                throw error.response.data || { message: 'Erro desconhecido do servidor' };
            } else if (error.request) {
                // A requisição foi feita mas não houve resposta
                console.error('Erro de requisição sem resposta:', error.request);
                throw { message: 'Não foi possível conectar ao servidor' };
            } else {
                // Algo aconteceu na configuração da requisição que desencadeou um erro
                console.error('Erro na configuração da requisição:', error.message);
                throw { message: error.message || 'Erro ao enviar requisição' };
            }
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

    listarAnimaisPorFazenda: async (fazendaId) => {
        try {
            const response = await api.get(`/farms/${fazendaId}/animals`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao listar animais da fazenda:', error);
            throw error.response?.data || error;
        }
    },

    listarUsuariosPorFazenda: async (fazendaId) => {
        try {
            const response = await api.get(`/farms/${fazendaId}/users`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao listar usuários da fazenda:', error);
            throw error.response?.data || error;
        }
    },

    getEstatisticasFazenda: async (fazendaId) => {
        try {
            const response = await api.get(`/farms/${fazendaId}/stats`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao obter estatísticas da fazenda:', error);
            throw error.response?.data || error;
        }
    },

    selecionarFazenda: (fazendaId) => {
        localStorage.setItem('farmId', fazendaId);
        return true;
    },

    obterFazendaSelecionada: () => {
        return localStorage.getItem('farmId');
    },
    
    limparFazendaSelecionada: () => {
        localStorage.removeItem('farmId');
        return true;
    }
}; 