import axios from "axios";

// Define a baseURL baseada no ambiente
const getBaseUrl = () => {
  if (import.meta.env.MODE === "development") {
    return "http://localhost:3001/api";
  }
  return "https://moovoxserver-gaezgyanede2fdhq.brazilsouth-01.azurewebsites.net/api";
};

const api = axios.create({
  baseURL: getBaseUrl(),
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000, // 10 segundos de timeout
});

// Interceptor para adicionar o token de autenticação
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    const farmId = localStorage.getItem("farmId");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Adiciona o farmId no header apenas se não for uma rota de autenticação
    if (farmId && !config.url.includes("/auth/")) {
      config.headers["X-Farm-ID"] = farmId;
    }

    return config;
  },
  (error) => {
    console.error("Erro na preparação da requisição:", error);
    return Promise.reject(error);
  },
);

// Interceptor para tratar erros de resposta
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Se for erro de autenticação, redireciona para login
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("farmId");
      window.location.href = "/login";
      return Promise.reject(
        new Error("Sessão expirada. Por favor, faça login novamente."),
      );
    }

    // Tratamento específico para erro de rede
    if (error.code === "ERR_NETWORK") {
      return Promise.reject(
        new Error(
          "Não foi possível conectar ao servidor. Por favor, verifique sua conexão com a internet e tente novamente em alguns instantes.",
        ),
      );
    }

    return Promise.reject(error);
  },
);

export default api;
