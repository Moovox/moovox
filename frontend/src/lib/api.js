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
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api; 