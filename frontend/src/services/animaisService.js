import api from '../lib/api';

export const animaisService = {
    listarAnimais: async () => {
        try {
            const response = await api.get('/animals');
            return response.data.data;
        } catch (error) {
            console.error('Erro ao listar animais:', error);
            throw error.response?.data || error;
        }
    },

    criarAnimal: async (animal) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, selecione uma fazenda primeiro.');
            }

            // Garantir que farmId seja um número e que todos os outros campos estejam formatados corretamente
            const animalData = {
                name: animal.nome, // Backend espera "name" em vez de "nome"
                species_id: parseInt(animal.especieId),
                breed_id: parseInt(animal.racaId),
                birth_date: animal.dataNascimento,
                weight: parseFloat(animal.peso),
                health_status: animal.status,
                farm_id: parseInt(farmId)
            };

            console.log('Enviando para o backend:', animalData);
            const response = await api.post('/animals', animalData);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao criar animal:', error);
            
            // Verificar o tipo de erro para dar mensagens mais específicas
            if (error.response) {
                // O servidor respondeu com um status de erro
                if (error.response.status === 400 && error.response.data?.code === 'FARM_ERROR') {
                    // Limpar o farmId inválido do localStorage
                    localStorage.removeItem('farmId');
                    throw new Error(error.response.data.message || 'A fazenda selecionada não existe ou não está disponível.');
                }
                
                if (error.response.status === 404) {
                    // Provavelmente um erro de rota ou recurso não encontrado
                    throw new Error('Recurso não encontrado. Verifique a configuração do sistema.');
                }
                
                if (error.response.status === 403) {
                    throw new Error('Você não tem permissão para acessar este recurso.');
                }
                
                // Outros erros do servidor
                throw error.response.data || new Error('Erro ao processar a requisição no servidor.');
            } else if (error.request) {
                // A requisição foi feita mas não houve resposta do servidor
                throw new Error('Não foi possível conectar ao servidor. Verifique sua conexão de internet.');
            } else {
                // Algo aconteceu na configuração da requisição que acionou um erro
                throw error;
            }
        }
    },

    // Mapeamento para espécies
    getEspecies: () => {
        return [
            { id: 1, name: "CATTLE", label: "Bovino" },
            { id: 2, name: "SWINE", label: "Suíno" },
            { id: 3, name: "EQUINE", label: "Equino" },
            { id: 4, name: "POULTRY", label: "Ave" },
            { id: 5, name: "CAPRINE", label: "Caprino" },
            { id: 6, name: "OVINE", label: "Ovino" }
        ];
    },

    // Mapeamento para raças por espécie
    getRacasPorEspecie: (especieId) => {
        const racasPorEspecie = {
            // Bovinos (CATTLE)
            1: [
                { id: 1, name: "Angus" },
                { id: 2, name: "Brahman" },
                { id: 3, name: "Nelore" },
                { id: 4, name: "Holstein" }
            ],
            // Suínos (SWINE)
            2: [
                { id: 5, name: "Pietrain" },
                { id: 6, name: "Landrace" },
                { id: 7, name: "Large White" },
                { id: 8, name: "Duroc" },
                { id: 9, name: "Moura" }
            ],
            // Equinos (EQUINE)
            3: [
                { id: 10, name: "Crioulo" },
                { id: 11, name: "Mangalarga Marchador" },
                { id: 12, name: "Quarto de Milha" },
                { id: 13, name: "Percheron" }
            ],
            // Aves (POULTRY)
            4: [
                { id: 14, name: "Leghorn" },
                { id: 15, name: "Rhode Island Red" },
                { id: 16, name: "Plymouth Rock" },
                { id: 17, name: "Sussex" }
            ],
            // Caprinos (CAPRINE)
            5: [
                { id: 18, name: "Boer" },
                { id: 19, name: "Anglo-Nubiana" },
                { id: 20, name: "Saanen" }
            ],
            // Ovinos (OVINE)
            6: [
                { id: 21, name: "Suffolk" },
                { id: 22, name: "Santa Inês" },
                { id: 23, name: "Dorper" }
            ]
        };

        return racasPorEspecie[especieId] || [];
    },

    atualizarAnimal: async (id, animal) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            console.log('Atualizando animal:', {
                id,
                animal,
                farmId
            });

            const animalData = {
                ...animal,
                farmId: parseInt(farmId)
            };

            const response = await api.put(`/animals/${id}`, animalData);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao atualizar animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para editar este animal');
            }
            throw error.response?.data || error;
        }
    },

    excluirAnimal: async (id) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            const response = await api.delete(`/animals/${id}`);
            return response.data;
        } catch (error) {
            console.error('Erro ao excluir animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            if (error.response?.status === 403) {
                throw new Error('Você não tem permissão para excluir este animal');
            }
            throw error.response?.data || error;
        }
    },

    buscarAnimalPorId: async (id) => {
        try {
            const farmId = localStorage.getItem('farmId');
            if (!farmId) {
                throw new Error('ID da fazenda não encontrado. Por favor, faça login novamente.');
            }

            const response = await api.get(`/animals/${id}`);
            return response.data.data;
        } catch (error) {
            console.error('Erro ao buscar animal:', error);
            if (error.response?.status === 404) {
                throw new Error('Animal não encontrado');
            }
            throw error.response?.data || error;
        }
    }
}; 