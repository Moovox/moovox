import api from '../lib/api';

const tipoMap = {
    'Administrador': 'Administrador',
    'Fazendeiro': 'Fazendeiro',
    'Funcionário': 'Funcionário',
    'Veterinário': 'Veterinário',
    'ADMIN': 'Administrador',
    'FARMER': 'Fazendeiro',
    'FARMHAND': 'Funcionário',
    'VETERINARY': 'Veterinário'
};

export const userService = {
    async createUser(userData) {
        try {
            const response = await api.post('/users', userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    async updateUser(id, userData) {
        try {
            const response = await api.put(`/users/${id}`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    async deleteUser(id) {
        try {
            console.log('Iniciando exclusão do usuário:', id);
            
            // Tenta excluir o usuário usando a rota correta
            const response = await api.delete(`/users/${id}`);
            
            console.log('Resposta da exclusão:', response);
            
            if (response.status === 204 || response.status === 200) {
                return { success: true, message: 'Usuário excluído com sucesso' };
            }
            
            return response.data;
        } catch (error) {
            console.error('Erro detalhado ao excluir usuário:', {
                error: error,
                response: error.response,
                message: error.message,
                status: error.response?.status,
                data: error.response?.data
            });

            if (error.response?.status === 404) {
                throw new Error('Usuário não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para excluir este usuário');
            }
            if (error.response?.status === 500) {
                throw new Error('Erro interno do servidor. Por favor, tente novamente mais tarde.');
            }
            
            throw error.response?.data?.message || error.message || 'Erro ao excluir usuário';
        }
    },

    async getAllUsers() {
        try {
            const response = await api.get('/users');
            console.log('Resposta da API:', response.data);

            if (!response.data || !response.data.data) {
                throw new Error('Nenhum dado retornado da API');
            }

            const usersData = Array.isArray(response.data.data) ? response.data.data : [];

            const users = usersData.map(user => ({
                id: user.id,
                nome: user.nome || user.name,
                email: user.email,
                tipo: tipoMap[user.tipo || user.role] || user.tipo || user.role,
                fazenda: user.fazenda
            }));

            console.log('Usuários mapeados:', users);
            return { data: users };
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            if (error.response?.data) {
                console.error('Detalhes do erro:', error.response.data);
            }
            throw error;
        }
    }
};

export default userService; 