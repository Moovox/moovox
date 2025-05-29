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
    timeout: 10000, // 10 segundos de timeout
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    const farmId = localStorage.getItem('farmId');

    if (import.meta.env.MODE === 'development') {
        console.log('Preparando requisição:', {
            url: config.url,
            method: config.method,
            baseURL: config.baseURL,
            farmId: farmId || 'Não encontrado'
        });
        console.log('Token encontrado:', token ? 'Sim' : 'Não');
    }

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    // Adiciona o farmId no header apenas se não for uma rota de autenticação
    if (farmId && !config.url.includes('/auth/')) {
        config.headers['X-Farm-ID'] = farmId;
    }

    if (import.meta.env.MODE === 'development') {
        console.log('Configuração final da requisição:', {
            url: config.url,
            fullUrl: config.baseURL + config.url,
            method: config.method,
            headers: config.headers
        });
    }

    return config;
}, (error) => {
    console.error('Erro na preparação da requisição:', error);
    return Promise.reject(error);
});

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
    (response) => {
        if (import.meta.env.MODE === 'development') {
            console.log('Resposta recebida com sucesso:', {
                url: response.config.url,
                method: response.config.method,
                status: response.status,
                data: response.data
            });
        }
        return response;
    },
    (error) => {
        if (import.meta.env.MODE === 'development') {
            if (error.code === 'ERR_NETWORK') {
                console.error('Erro de conexão com o servidor:', {
                    url: error.config?.url,
                    baseURL: error.config?.baseURL,
                    fullUrl: error.config?.baseURL + error.config?.url,
                    message: 'Não foi possível conectar ao servidor. Verifique se o servidor está rodando e acessível.'
                });
            } else {
                console.error('Erro na requisição:', {
                    url: error.config?.url,
                    method: error.config?.method,
                    status: error.response?.status,
                    data: error.response?.data,
                    message: error.message,
                    code: error.code,
                    stack: error.stack
                });
            }

            // Log adicional para erros 500
            if (error.response?.status === 500) {
                console.error('Detalhes do erro 500:', {
                    headers: error.config?.headers,
                    params: error.config?.params,
                    responseHeaders: error.response?.headers,
                    data: error.response?.data
                });
            }
        }

        // Se for erro de autenticação, redireciona para login
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('farmId');
            window.location.href = '/login';
            return Promise.reject(new Error('Sessão expirada. Por favor, faça login novamente.'));
        }

        // Tratamento específico para erro de rede
        if (error.code === 'ERR_NETWORK') {
            return Promise.reject(new Error('Não foi possível conectar ao servidor. Por favor, verifique sua conexão com a internet e tente novamente em alguns instantes.'));
        }

        return Promise.reject(error);
    }
);

export default api; 