import api from '../lib/api';

export const usuariosService = {
    listarUsuarios: async () => {
        const response = await api.get('/users');
        return response.data.data || [];
    },

    criarUsuario: async (usuario) => {
        const response = await api.post('/users', usuario);
        return response.data.data;
    },

    atualizarUsuario: async (id, usuario) => {
        const response = await api.put(`/users/${id}`, usuario);
        return response.data.data;
    },

    excluirUsuario: async (id) => {
        const response = await api.delete(`/users/${id}`);
        return response.data.data;
    },

    buscarUsuarioPorId: async (id) => {
        const response = await api.get(`/users/${id}`);
        return response.data.data;
    }
}; 