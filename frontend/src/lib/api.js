import axios from 'axios';

// Define a baseURL baseada no ambiente
const getBaseUrl = () => {
    if (import.meta.env.MODE === 'development') {
        return 'http://localhost:3001/api';
    }
    return 'https://moovoxserver-gaezgyanede2fdhq.brazilsouth-01.azurewebsites.net/api';
};

const api = axios.create({
    baseURL: getBaseUrl(),
    headers: {
        'Content-Type': 'application/json',
    },
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (import.meta.env.MODE === 'development') {
        console.log('Token encontrado:', token ? 'Sim' : 'Não');
        if (token) {
            console.log('Token adicionado ao header Authorization');
        } else {
            console.log('Nenhum token encontrado no localStorage');
        }
        console.log('Configuração da requisição:', {
            url: config.url,
            method: config.method,
            headers: config.headers
        });
    }
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
    (response) => {
        console.log('Resposta recebida:', {
            url: response.config.url,
            status: response.status,
            data: response.data
        });
        return response;
    },
    (error) => {
        console.error('Erro na requisição:', {
            url: error.config?.url,
            status: error.response?.status,
            data: error.response?.data,
            message: error.message
        });
        return Promise.reject(error);
    }
);

export default api; 