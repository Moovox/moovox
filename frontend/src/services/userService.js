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
            if (!id) throw new Error("ID do usuário não fornecido");
            
            const response = await api.put(`/users/${id}`, userData);
            return response.data;
        } catch (error) {
            throw error.response?.data || error;
        }
    },

    async deleteUser(id) {
        try {
            if (!id) throw new Error("ID do usuário não fornecido");
            
            const response = await api.delete(`/users/${id}`);
            
            if (response.status === 204 || response.status === 200) {
                return { success: true, message: 'Usuário excluído com sucesso' };
            }
            
            return response.data;
        } catch (error) {
            if (error.response?.status === 404) {
                throw new Error('Usuário não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para excluir este usuário');
            }
            if (error.response?.status === 500) {
                throw new Error('Erro interno do servidor. Por favor, tente novamente mais tarde.');
            }
            
            throw error.response?.data?.message 
                ? { message: error.response.data.message }
                : { message: error.message || 'Erro ao excluir usuário' };
        }
    },

    async removeFarmhandRole(id) {
        try {
            if (!id) throw new Error("ID do usuário não fornecido");
            
            const response = await api.delete(`/users/${id}/farmhand`);
            
            if (response.status === 200) {
                return { 
                    success: true, 
                    message: response.data.message || 'Vínculo como trabalhador rural removido com sucesso'
                };
            }
            
            return response.data;
        } catch (error) {
            if (error.response?.data?.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error(error.message || 'Erro ao remover vínculo como trabalhador rural');
        }
    },

    async removeVeterinarianRole(id) {
        try {
            if (!id) throw new Error("ID do usuário não fornecido");
            
            const response = await api.delete(`/users/${id}/veterinarian`);
            
            if (response.status === 200) {
                return { 
                    success: true, 
                    message: response.data.message || 'Vínculo como veterinário removido com sucesso'
                };
            }
            
            return response.data;
        } catch (error) {
            if (error.response?.data?.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error(error.message || 'Erro ao remover vínculo como veterinário');
        }
    },

    async transferVeterinarianApplications(sourceId, targetId) {
        try {
            if (!sourceId || !targetId) {
                throw new Error("IDs de origem e destino são obrigatórios");
            }
            
            const response = await api.post(`/users/transfer-applications`, {
                sourceId,
                targetId
            });
            
            if (response.status === 200) {
                return { 
                    success: true, 
                    transferredCount: response.data.transferredCount,
                    message: response.data.message || 'Aplicações transferidas com sucesso'
                };
            }
            
            return response.data;
        } catch (error) {
            if (error.response?.data?.message) {
                throw new Error(error.response.data.message);
            }
            throw new Error(error.message || 'Erro ao transferir aplicações');
        }
    },

    async getAllUsers() {
        try {
            const response = await api.get('/users');

            if (!response.data) {
                return { data: [] };
            }

            const usersData = Array.isArray(response.data.data) ? response.data.data : [];

            const users = usersData.map(user => ({
                id: user.id,
                nome: user.nome || user.name,
                email: user.email,
                tipo: tipoMap[user.tipo || user.role] || user.tipo || user.role,
                fazenda: user.fazenda
            }));

            return { data: users };
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            return { data: [], error };
        }
    }
};

export default userService; 