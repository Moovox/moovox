import { useEffect, useState } from "react";

/**
 * Hook simples para dados dos animais
 * Versão limpa sem complicações
 */
export const useSimpleAnimalData = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        setLoading(true);
        
        // Por enquanto, usar dados mockados
        // TODO: Substituir pela chamada real da API
        const mockAnimals = [
          {
            id: 1,
            identification: "BOI001",
            name: "Boi da Silva",
            species: "cattle",
            latitude: -23.5505,
            longitude: -46.6333,
            status: "Saudável",
            weight: 450,
            lastUpdate: new Date().toLocaleString("pt-BR")
          },
          {
            id: 2,
            identification: "PORCO001", 
            name: "Suíno Alpha",
            species: "swine",
            latitude: -23.5485,
            longitude: -46.6353,
            status: "Em Tratamento",
            weight: 120,
            lastUpdate: new Date().toLocaleString("pt-BR")
          },
          {
            id: 3,
            identification: "GALINHA001",
            name: "Galinha Beta",
            species: "poultry",
            latitude: -23.5525,
            longitude: -46.6313,
            status: "Saudável",
            weight: 2.5,
            lastUpdate: new Date().toLocaleString("pt-BR")
          },
          {
            id: 4,
            identification: "CABRA001",
            name: "Cabra Charlie",
            species: "goats",
            latitude: -23.5515,
            longitude: -46.6343,
            status: "Saudável",
            weight: 35,
            lastUpdate: new Date().toLocaleString("pt-BR")
          }
        ];

        // Simular delay de rede
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        setAnimals(mockAnimals);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar dados dos animais");
        console.error("Erro ao buscar animais:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  const refetch = () => {
    setLoading(true);
    // Recarregar dados
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return {
    animals,
    loading,
    error,
    refetch
  };
}; 