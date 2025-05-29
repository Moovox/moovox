import axios from 'axios';

const api = axios.create({
    baseURL: 'https://moovoxserver-gaezgyanede2fdhq.brazilsouth-01.azurewebsites.net',
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